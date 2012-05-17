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
    // {{{ result

    result: {},

    // }}}
    // {{{ constructor

    constructor: function(param) {

        if(Ext.isFunction(param)) {
            this.execute = param;
        } else {
            Ext.apply(this, param);
        }

        // TODO: this.executeがisFunctionではない場合、例外処理を発生させる


        this.result = {};

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

            var name, conn, bind;

            name = item;
            conn = 'default';

            if(Ext.isObject(item)) {
                name = item.name;
                conn = item.conn;
                bind = item.bind;
            }

            tmp.push({
                name: name,
                conn: conn,
                bind: bind,
                path: Ext.node.path.normalize(config.config.app.paths.modules + '/' + name + '.js'),
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

                me.$moduleNames = [];

                uses.forEach(function(item, i) {

                    if(Ext.isString(item.bind)) {
                        me[item.bind] = item.define;
                    } else {
                        me[item.name] = item.define;
                    }

                    me.$moduleNames.push(item.bind);

                });

                next();
            }

        };

        Ext.iterate(uses, function(item) {

            var cls = '';

            Ext.node.fs.stat(item.path, function(err, stat) {

                if(err) {

                    // TODO: display Error page
                    next();

                } else {

                    // モジュールキャッシュクリア
                    Ext.moduleCacheClear(item.path, stat.mtime);

                    try {
                        var src = require(item.path);

                        if(Ext.isString(src)) {

                            // モジュール生成
                            item.define = Ext.create(src);

                            // TODO 'Ext.app.module.Module'を継承していない場合は、エラー

                        } else {

                            // モジュール生成
                            item.define = Ext.create('Ext.app.module.Module', require(item.path));

                        }

                    } catch(e) {

                        // render 500 Error
                        config.actionResultConfig = { abort: 500, errorDetails: e };
                        me.controller.render.call(me.controller, config, next);

                        return;
                    }

                    // コネクション名設定
                    item.define.setConnName(item.conn);

                    // 初期化
                    item.define.init(config, function() {

                        item.ready = true;
                        callback();

                    });

                }

            });

        });

    },

    // }}}
    // {{{ set

    /**
     * {Ext_app_action_Action:method-set:desc}
     *
     * @param name {String} {Ext_app_action_Action:method-set:param_name}
     * @param value {Ext_app_action_Action:method-set:param_name}
     */
    set: function(name, value) {

        var result = this.result;

        if(Ext.isString(name)) {
            result[name] = value;
        } else if(Ext.isObject(name)) {
            Ext.apply(result, name);
        } else {
            return false;
        }

        return result;

    },

    // }}}
    // {{{ $bindMail

    $bindMail: function(config) {

        var nodemailer = Ext.$dependencies.nodemailer;
        var transport = nodemailer.createTransport("SMTP", config);

        var f = this.$mail || function(message, next) {
            transport.sendMail(message, next);
        };

        this.$mail = f;

        return f;

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
