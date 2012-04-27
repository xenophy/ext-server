/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.action.Action

/**
 * @class Ext.app.action.Action
 *
 * {Ext_app_action_Action:doc-contents}
 */
Ext.define('Ext.app.action.Action', {

    // {{{ $execute

    $execute: Ext.emptyFn,

    // }}}
    // {{{ uses

    uses: [],

    // }}}
    // {{{ constructor

    constructor: function(param) {

        if(Ext.isFunction(param)) {
            this.execute = param;
        } else {
            Ext.apply(this, param);
        }

        // TODO: this.executeがisFunctionではない場合、例外処理を発生させる





    },

    // }}}
    // {{{ init

    init: function(config, next) {

        var me;

        me = this;

        if(me.uses.length > 0) {

            // TODO:モジュール初期化

            console.log(this);


        } else {
            next();
        }

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
