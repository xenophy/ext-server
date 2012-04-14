/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.control.Control

/**
 * @class Ext.app.control.Contrl
 *
 * {Ext_app_control_Control:doc-contents}
 */
Ext.define('Ext.app.control.Control', {

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, {
            regions: config.regions || [],
            actions: config.actions || []
        });

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
