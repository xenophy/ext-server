/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.config.Application

/**
 * @class Ext.server.config.Application
 *
 * {Ext_server_config_Application:doc-contents}
 */
Ext.define('Ext.server.config.Application', {

    // {{{ extend

    extend: 'Ext.app.config.Application',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, {
            paths: {
                public: config.public || './public'
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
