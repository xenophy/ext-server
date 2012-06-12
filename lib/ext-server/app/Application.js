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

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

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

        var type, name;

        // default value setting
        Ext.applyIf(config, {
            type        : 'server', // shell or server
            controllers : [],
            name        : 'App'     // Default name space "App"
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

        // call initialize Application method.
        this['$init' + Ext.String.capitalize(type)].call(this, config);
    },

    // }}}
    // {{{ init

    init: function(config) {

        var name, paths;

        config = config || {};
        name   = config.name;

        // Ext.Loader for User Application settings
        paths = {};
        paths[name] = process.ExtEnv.dirname;
        Ext.Loader.setConfig('paths', paths);

    },

    // }}}
    // {{{ $initServer

    $initServer: function(config) {

        // create server
        Ext.create('Ext.server.Server', config);

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

        application: Ext.app.Application.createInstance,

        // }}}
        // {{{ moduleFileModified

        moduleFileModified: {}

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
