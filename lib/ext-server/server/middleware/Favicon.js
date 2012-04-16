/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.Favicon

/**
 * @class Ext.server.middleware.Favicon
 *
 * {Ext_server_middleware_Favicon:doc-contents}
 */
Ext.define('Ext.server.middleware.Favicon', {

    // {{{ alias

    alternateClassName: 'Ext.server.Favicon',

    // }}}
    // {{{ init

    init: function(config) {

        // TODO:setting custom path.
        return Ext.server.Connect.favicon();
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
