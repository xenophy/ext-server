/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.Multipart

/**
 * @class Ext.server.middleware.Multipart
 *
 * {Ext_server_middleware_Multipart:doc-contents}
 */
Ext.define('Ext.server.middleware.Multipart', {

    // {{{ alias

    alternateClassName: 'Ext.server.Multipart',

    // }}}
    // {{{ init

    init: function(config) {
        return Ext.server.Connect.multipart();
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

