/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.StaticCache

/**
 * @class Ext.server.middleware.StaticCache
 *
 * {Ext_server_middleware_StaticCache:doc-contents}
 */
Ext.define('Ext.server.middleware.StaticCache', {

    // {{{ alias

    alternateClassName: 'Ext.server.StaticCache',

    // }}}
    // {{{ init

    init: function(config) {
        return Ext.server.Connect.staticCache(config);
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
