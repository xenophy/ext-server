/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.shell.controller.Controller

/**
 * @class Ext.shell.controller.Controller
 *
 * {Ext_shell_controller_Controller:doc-contents}
 */
Ext.define('Ext.shell.controller.Controller', {

    // {{{ requires

    requires: [
        'Ext.shell.view.View'
    ],

    // }}}
    // {{{ appMode

    appMode: 'shell',

    // }}}
    // {{{ render

    render: function(next) {


        console.log("render!!");
        next();

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
