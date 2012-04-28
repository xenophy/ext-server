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

        if(
            (Ext.isArray(this.uses) && this.uses.length > 0) ||
            Ext.isString(this.uses)
        ) {

            // bind module
            this.$bind(config, next);

        } else {

            next();

        }

    },

    // }}}
    // {{{ $bind

    $bind: function(config, next) {

        var me, uses, tmp, callback;

        me = this;

        if(Ext.isArray(this.uses)) {

            uses = this.uses;

        } else if(Ext.isString()) {

            uses.push(this.uses);

        } else {

            // TODO: Exception例外
            uses.push(this.uses);

        }

        tmp = [];
        Ext.iterate(uses, function(item) {

            var name, conn;

            name = item;
            conn = 'default';

            if(Ext.isObject(item)) {
                name = item.name;
                conn = item.conn;
            }

            tmp.push({
                name: name,
                conn: conn,
                path: require('path').normalize(config.config.app.paths.modules + '/' + name + '.js'),
                define: null,
                ready: false
            });

        });

        uses = tmp;

        callback = function() {

            var all = true;

            uses.forEach(function(item, i) {
                if(!item.ready) {
                    all = false;
                }
            });

            if(all) {

                // モジュールをアクションにバインド
                uses.forEach(function(item, i) {
                    me[item.name] = item.define;
                });

                next();
            }

        };

        Ext.iterate(uses, function(item) {

            var cls = '';

            require('fs').stat(item.path, function(err, stat) {

                if(err) {

                    // TODO: display Error page
                    next();

                } else {

                    // モジュールキャッシュクリア
                    Ext.moduleCacheClear(item.path, stat.mtime);

                    // モジュール生成
                    item.define = Ext.create('Ext.app.module.Module', require(item.path));

                    // コネクション名設定
                    // item.define.setConnName(item.conn);

                    // 初期化
                    item.define.init(config, function() {

                        item.ready = true;
                        callback();

                    });

                }

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
