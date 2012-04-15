/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.Router

/**
 * @class Ext.app.Router
 *
 * {Ext_app_Router:doc-contents}
 */
Ext.define('Ext.app.Router', {

    // {{{ requires

    requires: [
        'Ext.app.controller.Auto',
        'Ext.app.controller.Rest'
    ],

    // }}}
    // {{{ attach

    attach: Ext.emptyFn,

    // }}}
    // {{{ isRest

    isRest: Ext.emptyFn

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
