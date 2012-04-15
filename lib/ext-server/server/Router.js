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
    // {{{ attach

    attach: function(config, next) {

        config = config || {};

        var req = config.req;

        // call parent.
        this.callParent(arguments);

        // restful url?
        this.isRest(req.url, function() {

            next();
        });

    },

    // }}}
    // {{{ isRest

    isRest: function(path, next) {








        next();
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
