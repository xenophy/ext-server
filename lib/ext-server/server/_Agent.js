/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Agent

/**
 * @class Ext.server.Agent
 *
 * {Ext_server_Agent:doc-contents}
 */
Ext.define('Ext.server.Agent', {

    // {{{ extend

    extend: 'Ext.app.Agent',

    // }}}
    // {{{ run

    run: function(config, next) {

        var req, res;

        config  = config || {};
        req     = config.req;
        res     = config.res;

        config.path = req.url;

        // call parent
        this.callParent([config, next]);

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
