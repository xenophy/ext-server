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
    // {{{ dispatch

    dispatch: function(req, res, next) {

        var chain;

        // call parent method.
        chain = this.buildChain(req.url);

        chain.push(next);
        chain.shift()(req, res, function() {
            chain.shift()(req, res, chain.shift());
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
