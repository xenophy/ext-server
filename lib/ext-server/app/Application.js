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

    // {{{ exntend

    extend: 'Ext.app.controller.Controller',

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
            type: 'server'  // shell or server
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

        type = type.toLowerCase();

        // call initialize Application method.
        this['$init' + Ext.String.capitalize(type)].call(this, config);
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
