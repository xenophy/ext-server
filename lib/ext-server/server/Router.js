/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Router

/**
 * @class Ext.server.Router
 *
 * {Ext_server_Router:doc-contents}
 */
Ext.define('Ext.server.Router', {

    // {{{ extend

    extend: 'Ext.app.Router',

    // }}}
    // {{{ dispatchTable

    dispatchTable: {},

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, {
            dispatchTable: config.dispatchTable
        });

    },

    // }}}
    // {{{ dispatch

    dispatch: function(req, res, next) {

        var me = this;

        Ext.iterate(me.dispatchTable, function(path, actions) {

            var match = me.match(path, req.url);

            if(match) {

                actions.forEach(function(action) {

                    // TODO:chain

                    action(req, res, next);

                });

            }

        });

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
