/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext
 *
 * 名前空間 Ext (グローバルなオブジェクト)は、クラス、シングルトン、便利なメソッドを内包するライブラリです。
 * 多くの便利な関数は、Extオブジェクトのプロパティとして提供されます。
 * また、他のクラスメソッドで、頻繁に利用されるメソッドは、Extオブジェクトのショートカットとして提供されます。
 *
 * @singleton
 */
(function() {

    if(typeof global.Ext === 'undefined') {
        global.Ext = { global: global };
    }

    // {{{ apply

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
        // {{{ applyIf

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
        // {{{ clone

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
        // {{{ emptyFn

        /**
         * 再利用のための空関数オブジェクトです。
         * 何らかの関数を設定しなくてはならない&#160;場合や、
         * 継承先のクラスにメソッドを実装してもらうときの抽象メソッド定義などに使用します。
         */
        emptyFn: function() {
        },

        // }}}
        // {{{ functionFactory

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
        // {{{ getRandomInt

        /**
         * minからmaxの間でランダムな整数値を返却します。
         *
         * @param min {Number} 最小値
         * @param max {Number} 最大値
         * @return {Number} ランダム値
         */
        getRandomInt: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // }}}
        // {{{ getUniqueGlobalNamespace

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
        },

        // }}}
        // {{{ isArray

        /**
         * テスト対象が配列の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isArray: Array.isArray,

        // }}}
        // {{{ isBoolean

        /**
         * テスト対象が真偽値の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        // }}}
        // {{{ isDate

        /**
         * テスト対象が日付型の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },

        // }}}
        // {{{ isDefined

        /**
         * テスト対象がundefinedでない場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },

        // }}}
        // {{{ isEmpty

        /**
         * value値がnullまたは、undefined、または空文字列、空配列の場合、trueを返します。
         * 空文&#160;字列をEmpty(空)としない場合は、allowBlankにtrueを設定します。
         *
         * - `null`
         * - `undefined`
         * - 空配列
         * - 空文字列(空文字列を空と判定しない場合は、allowEmptyStringをtrueに設定します。)
         *
         * @param {Mixed} value テストするオブジェクト
         * @param {Boolean} allowEmptyString (オプション)空文字列を空としない場合はtrueを設定(初期値:false)
         * @return {Boolean}
         */
        isEmpty: function(value, allowEmptyString) {
            return (
                (value === null) ||
                (value === undefined) ||
                (!allowEmptyString ? value === '' : false) ||
                (Ext.isArray(value) && value.length === 0)
            );
        },

        // }}}
        // {{{ isFunction

        /**
         * テスト対象が関数オブジェクトの場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isFunction: function(value) {
            return typeof value === 'function';
        },

        // }}}
        // {{{ isIterable

        /**
         * テスト対象がイテレート可能な場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isIterable: function(value) {
            return (
                (value && typeof value !== 'string')
                ? value.length !== undefined
                : false
            );
        },

        // }}}
        // {{{ isNumber

        /**
         * テスト対象が数値型の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },

        // }}}
        // {{{ Ext.isNumeric

        /**
         * テスト対象が数字の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト <br />**例**: 1, '1', '2.34' はtrue
         * @return {Boolean}
         */
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        // }}}
        // {{{ isObject

        /**
         * テスト対象がオブジェクト型の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isObject: function(value) {
            return toString.call(value) === '[object Object]';
        },

        // }}}
        // {{{ isPrimitive

        /**
         * テスト対象が文字列型か数値型か真偽型の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isPrimitive: function(value) {

            var type = typeof value;

            return (
                type === 'string' ||
                type === 'number' ||
                type === 'boolean'
            );
        },

        // }}}
        // {{{ isString

        /**
         * テスト対象が文字列型の場合はtrue、そうでない場合はfalseを返します。
         *
         * @param {Mixed} value テストするオブジェクト
         * @return {Boolean}
         */
        isString: function(value) {
            return typeof value === 'string';
        },

        // }}}
        // {{{ iterate

        /**
         * 配列の各要素か、オブジェクトのプロパティを繰り返します。
         *
         * @param {Object/Array} object 繰り返しを行うオブジェクトか配列
         * @param {Function} fn 繰り返し時に呼び出す関数を設定します。
         * 繰り返しを行うオブジェクトの種別によって、引数が異なります。
         * 詳しくは、 Ext.Array.eachと Ext.Object.each を参照してください。
         * @param {Object} scope 呼び出される関数スコープオブジェクトを設定します。
         * デフォルト値は、繰り返されるオブジェクトです。
         */
        iterate: function(object, fn, scope) {

            if(Ext.isEmpty(object)) {
                return;
            }

            if(scope === undefined) {
                scope = object;
            }

            if(Ext.isIterable(object)) {

                Ext.Array.each.call(Ext.Array, object, fn, scope);

            } else {

                Ext.Object.each.call(Ext.Object, object, fn, scope);

            }
        },

        // }}}
        // {{{ microtime

        /**
         * 現在の Unix タイムスタンプをマイクロ秒で返します。
         *
         * @param {Boolean} get_as_float trueを指定すると、小数点を含んで値を返します。
         * @return {Boolean}
         */
        microtime: function(get_as_float) {
            var now = new Date().getTime() / 1000;
            var s = parseInt(now, 10);
            return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
        },

        // }}}
        // {{{ moduleCacheClear

        /**
         * モジュールキャッシュをクリアします。
         *
         * @param {String} path モジュールパス
         * @param {Number} mtime ファイル更新日時
         */
        moduleCacheClear: function(path, mtime) {

            if(require.cache[path]) {

                if(!Ext.$requires[path]) {
                    Ext.$requires[path] = {};
                }

                var prev = Ext.$requires[path].mtime || new Date(1900, 1, 1);

                if(mtime && prev < mtime) {

                    delete require.cache[path];

                    Ext.$requires[path].mtime = mtime;
                }

            }

        },

        // }}}
        // {{{ setLocale

        /**
         * Next JSのロケールを設定します。
         * 標準は、英語ですが、エラーメッセージなどをロケ&#160;ールに合わせて出力することができます。
         *
         * @param {String} locale ロケール (初期値:'en')
         * @return {Boolean}
         */
        setLocale: function(locale) {

            try {
                locale = locale || 'en';
                locale = Ext.util.Format.replace(locale, '/', '');
                Ext.apply(
                    Ext.$locale,
                    Ext.JSON.decode(
                        require('fs').readFileSync(
                            require('path').normalize(__dirname + '/../locale/' + locale + '.json')
                        ).toString()
                    )
                );
            } catch(e) {
            }

        },

        // }}}
        // {{{ uid

        /**
         * ユニークIDを返します。
         *
         * @param {Number} len ID長
         * @return {String}
         */
        uid: function(len) {

            var buf = [],
                ret = [];
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                charlen = chars.length;

            for(var i = 0; i < len; ++i) {
                buf.push(chars[Ext.getRandomInt(0, charlen - 1)]);
            }

            return buf.join('');
        }

        // }}}

    });

    Ext.apply(Ext, {

        // Ext.Array
        Array: require('./lang/Array'),

        // Ext.Date
        String: require('./lang/Date'),

        // Ext.Error
        String: require('./lang/Error'),

        // Ext.Function
        String: require('./lang/Function'),

        // Ext.JSON
        JSON: require('./misc/JSON'),

        // Ext.Number
        String: require('./lang/Number'),

        // Ext.Object
        String: require('./lang/Object'),

        // Ext.String
        String: require('./lang/String')

    });

    // create shorthand
    Ext.apply(Ext, {

        /**
         * "write it"
         *
         * @param o {Object} xxx
         * @return {Object}
         */
        sprintf: Ext.String.sprintf,

        /**
         * "write it"
         *
         * @param o {Object} xxx
         * @return {Object}
         */
        toArray: function() {
            return Ext.Array.toArray.apply(Ext.Array, arguments);
        }

    });

    // exports Ext
    module.exports = global.Ext;

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
