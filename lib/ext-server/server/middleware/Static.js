/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.Static

/**
 * @class Ext.server.middleware.Static
 *
 * {Ext_serer_middleware_Static:doc-contents}
 */
Ext.define('Ext.server.middleware.Static', {

    // {{{ alias

    alternateClassName: 'Ext.server.Static',

    // }}}
    // {{{ init

    init: function(config) {

        var public, path;

        path    = require('path');
        public  = config.public;

        // 静的コンテンツパス設定
        if(path.existsSync(public)) {
            return Ext.server.Connect.static(public);
        }

        return null;
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
