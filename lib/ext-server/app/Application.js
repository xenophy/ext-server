/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.Application

/**
 * @class Ext.app.Application
 *
 * {Ext_app_Application:doc-contents}
 */
Ext.define('Ext.app.Application', {

    // {{{ dispatchTable

    dispatchTable: {},

    // }}}
    // {{{ exntend

    extend: 'Ext.app.Controller',

    // }}}
    // {{{ statics

    statics: {

        // {{{ createInstance

        createInstance: function(config) {
            new Ext.app.Application(config || {});
        }

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var type;

        // default value setting
        Ext.applyIf(config, {
            type: 'server',  // shell or server
            controllers: []
        });

        type = config.type;
        name = config.name;

        if(
            !Ext.isString(type) ||
            !Ext.Array.contains(['server', 'shell'], type.toLowerCase())
        ) {
            // TODO: Ext.Error exception.

            return;
        }

        if(!Ext.isString(name) || Ext.isEmpty(name)) {

            // TODO: Ext.Error exception.

            return;
        }

        if(!Ext.isArray(config.controllers)) {

            // TODO: Ext.Error exception.

            return;
        }

        type = type.toLowerCase();

        // common initialize
        this.init(config);

        // set dispatchTable
        config.dispatchTable = this.dispatchTable;

        // call initialize Application method.
        this['$init' + Ext.String.capitalize(type)].call(this, config);
    },

    // }}}
    // {{{ init

    init: function(config) {

        var me = this, name, paths = {},
            controllerInstances = {};

        name = config.name;

        // Ext.Loader for User Application settings
        paths = {};
        paths[name] = process.ExtEnv.dirname;
        Ext.Loader.setConfig('paths', paths);

        // load and create use controllers
        config.controllers.forEach(function(controller) {

            controllerInstances[controller] = Ext.create(Ext.String.format('{0}.controller.{1}', name, controller));
            controllerInstances[controller].on('addroute', Ext.Function.bind(me.addRoute, me));

        });
        this.controllers = controllerInstances;

        // call initialize method
        Ext.iterate(this.controllers, function(name, controller) {
            controller.init.call(controller, config, this);
        });

    },

    // }}}
    // {{{ addRoute

    addRoute: function(routes) {

        var me = this;

        Ext.iterate(routes, function(name, route) {

            if(!Ext.isArray(me.dispatchTable[name])) {
                me.dispatchTable[name] = [];
            }

            me.dispatchTable[name].push(route);

        });

    },

    // }}}
    // {{{ $initServer

    $initServer: function(config) {

        // require
        Ext.Loader.require('Ext.server.Server');

        // create server
        Ext.server.Server.create(config);

    },

    // }}}
    // {{{ $initShell

    $initShell: function(config) {

        // TODO: shell mode operation implement.

    }

    // }}}

}, function() {

    Ext.apply(Ext, {

        // {{{ application

        application: Ext.app.Application.createInstance

        // }}}

    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
