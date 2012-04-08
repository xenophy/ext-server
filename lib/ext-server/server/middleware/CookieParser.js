/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.CookieParser

/**
 * @class Ext.server.middleware.CookieParser
 *
 * {Ext_server_middleware_CookieParser:doc-contents}
 */
Ext.define('Ext.server.middleware.CookieParser', {

    // {{{ alias

    alternateClassName: 'Ext.server.CookieParser',

    // }}}
    // {{{ init

    init: function(config) {

        var secret = config.secret || 'Ext Server Cookie Secret';

        return Ext.server.Connect.cookieParser(secret);
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

