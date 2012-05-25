/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.Static

/**
 * @class Ext.server.view.Static
 *
 * {Ext_server_view_Static:doc-contents}
 */
Ext.define('Ext.server.view.Static', {

    // {{{ requires

    requires: [
        'Ext.server.middleware.Static'
    ],

    // }}}
    // {{{ constructor

    constructor: function(config, next) {

        config = config;

        Ext.create('Ext.server.middleware.Static').init({
            public: config.root
        })(
            config.req,
            config.res,
            next
        );

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
