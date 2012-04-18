/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.controller.Controller

/**
 * @class Ext.app.controller.Controller
 *
 * {Ext_app_controller_Controller:doc-contents}
 */
Ext.define('Ext.app.controller.Controller', {

    // {{{ alternateClassName

    alternateClassName: 'Ext.app.Controller',

    // }}}
    // {{{ statics

    statics: {
        GLOBAL_ACTION: 'global',
        EXTENT_ACTION: 'extent',
        TARGET_ACTION: 'target'
    },

    // }}}
    // {{{ dispatch

    dispatch: Ext.emptyFn,

    // }}}
    // {{{ constructor

    constructor: function() {

        // create view instance.
        this.view = Ext.create(
            Ext.String.format('Ext.{0}.view.View', this.appMode)
        );

    },

    // }}}
    // {{{ makeInstance

    makeInstance: function(config, next) {

        var me, isFatal;

        config  = config || {};
        me      = this;
        isFatal = false;

        (function(actions, mode, next) {

            var loop = [];

            Ext.iterate(actions, function(item) {

                if(Ext.isString(item.$src)) {

                    loop.push(function(next) {

                        //item.$src

                        // isFatalをtrueに
                    });
                }

                item.ready = false;
                item.define = Ext.create(
                    Ext.String.format(
                        'Ext.{0}.action.Action',
                        mode
                    ),
                    item.$src
                );

            });

            loop.push(next);
            loop.shift()(loop.shift());

        })(this.actions, this.appMode, function() {

            if(isFatal) {
                next();
            }

            var temp, chain;

            temp  = [];
            chain = [];

            me.actions.forEach(function(action, i) {
                if(action.define) {
                    temp.push(action);
                }
            });
            me.actions = temp;

            me.actions.forEach(function(action, i) {

                var exec;

                exec = action.define.$execute();
                exec.$actionName = action.name;
                chain.push(exec);
            });

            me.actionChain = chain;

            me.actions.forEach(function(o, i) {

                // initialize action
                o.define.init(config, function() {
                    o.ready = true;
                    next();
                });

            });

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
