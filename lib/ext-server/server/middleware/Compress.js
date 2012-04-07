/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.Compress

/**
 * @class Ext.server.middleware.Compress
 *
 * {Ext_serer_middleware_Compress:doc-contents}
 */
Ext.define('Ext.server.middleware.Compress', {

    // {{{ alias

    alternateClassName: 'Ext.server.Compress',

    // }}}
    // {{{ init

    init: function(config) {

        if(config.compress === false) {
            return null;
        }

        return Ext.server.Connect.compress();
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

