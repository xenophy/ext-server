/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.View

/**
 * @class Ext.server.view.View
 *
 * {Ext_server_view_View:doc-contents}
 */
Ext.define('Ext.server.view.View', {

    // {{{ extend

    extend: 'Ext.app.view.View',

    // }}}
    // {{{ controller

    constructor: function() {

    },

    // }}}
    // {{{ render

    render: function(next) {

        console.log("View.render");
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
