/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.Controller

/**
 * @class Ext.app.Controller
 *
 * {Ext_app_Controller:doc-contents}
 */
Ext.define('Ext.app.Controller', {

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

    // }}}
    // {{{ init

    init: Ext.emptyFn,

    // }}}
    // {{{ control

    control: function(config) {

        if(!Ext.isSimpleObject(config)) {
            config = {};
        }

        this.fireEvent('addroute', config);
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
