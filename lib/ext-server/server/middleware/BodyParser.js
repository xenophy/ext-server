/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.BodyParser

/**
 * @class Ext.server.middleware.BodyParser
 *
 * {Ext_server_middleware_BodyParser:doc-contents}
 */
Ext.define('Ext.server.middleware.BodyParser', {

    // {{{ alias

    alternateClassName: 'Ext.server.BodyParser',

    // }}}
    // {{{ init

    init: function(config) {
        return Ext.server.Connect.bodyParser();
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

