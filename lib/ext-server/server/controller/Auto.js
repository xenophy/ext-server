/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.controller.Auto

/**
 * @class Ext.server.controller.Auto
 *
 * {Ext_server_controller_Auto:doc-contents}
 */
Ext.define('Ext.server.controller.Auto', {

    // {{{ alternateClassName

    alternateClassName: 'Ext.server.AutoController',

    // }}}
    // {{{ extend

    extend: 'Ext.app.controller.Auto',

    // }}}
    // {{{ dispatch

    dispatch: function(config, next) {




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
