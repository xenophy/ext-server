/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext
 * @singleton
 */
(function() {

    if(typeof global.Ext === 'undefined') {
        global.Ext = { global: global };
    }

    // {{{ Ext.apply

    /**
     * 設定されたコンフィグオブジェクトをオブジェクトに全てコピーします。
     * Note:オブジェクトや配列に対して、再帰的なコピーを行わず、
     * クローンを作成してコピーする場合は、Ext.Object.mergeを利用してください。
     *
     * @param o {Object} 適用されるオブジェクト
     * @param config {Object} 適用するオブジェクト
     * @param defaults {Object} 初期値として適用されるオブジェクト
     * @return {Object} 適用後のオブジェクト
     */
    Ext.apply = function(o, config, defaults) {

        if(defaults) {
            Ext.apply(o, defaults);
        }

        if(o && config && typeof config === 'object') {

            var i, j, k;

            for(i in config) {
                o[i] = config[i];
            }

        }

        return o;
    };

    // }}}

    Ext.apply(Ext, {

        // {{{ $e

        /**
         * @private
         */
        $e: function(key) {

            var arg = [Ext.$locale[key]];

            Ext.iterate(arguments, function(item, i) {
                if(i > 0) {
                    arg.push(item);
                }
            });

            return Ext.String.format.apply(this, arg);
        },

        // }}}
        // {{{ Ext.applyIf

        /**
         * プロパティ値が存在しないものに対して、設定されたコンフィグオブジェクトをオブジェクトにコピーします。
         * 既に存在するプロパティは上書きしません。
         *
         * @param o {Object} 適用されるオブジェクト
         * @param config {Object} 適用するオブジェクト
         * @return {Object} 適用後のオブジェクト
         */
        applyIf: function(o, config) {

            var prop;

            if(o) {
                for(prop in config) {
                    if(o[prop] === undefined) {
                        o[prop] = config[prop];
                    }
                }
            }
            return o;
        },

        // }}}
        // {{{ Ext.clone

        /**
         * 配列、オブジェクト、日付型を含むあらゆる変数のクローンを生成します。
         *
         * @param item {Object} クローンを作成する変数
         * @return {Object} 生成されたクローン
         */
        clone: function(item) {

            if(item === null || item === undefined) {
                return item;
            }

            var type = toString.call(item);

            if(type === '[object Date]') {
                return new Date(item.getTime());
            }

            var i, j, k, clone, key;

            if(type === '[object Array]') {

                i = item.length;
                clone = [];

                while(i--) {
                    clone[i] = Ext.clone(item[i]);
                }

            } else if(type === '[object Object]' && item.constructor === Object) {

                clone = {};

                for(key in item) {
                    clone[key] = Ext.clone(item[key]);
                }

            }

            return clone || item;

        },

        // }}}
        // {{{ Ext.emptyFn

        /**
         * 再利用のための空関数オブジェクトです。
         * 何らかの関数を設定しなくてはならない&#160;場合や、
         * 継承先のクラスにメソッドを実装してもらうときの抽象メソッド定義などに使用します。
         *
         * @return {void}
         */
        emptyFn: function() {
        },

        // }}}
        // {{{ Ext.functionFactory

        /**
         * @method functionFactory
         * @private
         */
        functionFactory: function() {

            var args = Array.prototype.slice.call(arguments);

            if(args.length > 0) {
                args[args.length - 1] = [
                    'var Ext=global.',
                    this.getUniqueGlobalNamespace(),
                    ';',
                    args[args.length - 1]
                ].join('');
            }

            return Function.prototype.constructor.apply(Function.prototype, args);
        },

        // }}}
        // {{{ Ext.getRandomInt

        /**
         * minからmaxの間でランダムな整数値を返却します。
         *
         * @param min {int} 最小値
         * @param max {int} 最大値
         * @return {int} ランダム値
         */
        getRandomInt: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // }}}
        // {{{ Ext.getUniqueGlobalNamespace

        /**
         * @private
         */
        getUniqueGlobalNamespace: function() {

            var uniqueGlobalNamespace = this.uniqueGlobalNamespace;

            if(uniqueGlobalNamespace === undefined) {

                var i = 0;

                do {
                    uniqueGlobalNamespace = 'ExtBox' + (++i);
                } while (Ext.global[uniqueGlobalNamespace] !== undefined);

                Ext.global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace;
            }

            return uniqueGlobalNamespace;
        }

        // }}}

    });

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
