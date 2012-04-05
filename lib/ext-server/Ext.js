/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext
 *
 * {Ext:doc-contents}
 *
 * @singleton
 */
(function() {

    var objectPrototype = Object.prototype,
        toString = objectPrototype.toString;

    if(typeof global.Ext === 'undefined') {
        global.Ext = { global: global };
    }

    // {{{ apply

    /**
     * {Ext:method-apply:desc}
     *
     * @param {Object} object {Ext:method-apply:param_object}
     * @param {Object} config {Ext:method-apply:param_config}
     * @param {Object} defaults {Ext:method-apply:param_defaults}
     * @return {Object} {Ext:method-apply:return}
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

        // {{{ name

        /**
         * @property {String} [name='Ext']
         *
         * {Ext:property-name:desc}
         */
        name: Ext.sandboxName || 'Ext',

        // }}}
        // {{{ emptyString

        /**
         * {Ext:property-emptyString:desc}
         */
        emptyString: new String(),

        // }}}
        // {{{ $requires

        // private
        $requires: {},

        // }}}
        // {{{ $locale

        // private
        $locale: {},

        // }}}
        // {{{ $e

        // private
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
        // {{{ emptyFn

        /**
         * {Ext:method-emptyFn:desc}
         *
         * @method
         */
        emptyFn: function() {
        },

        // }}}
        // {{{ applyIf

        /**
         * {Ext:method-applyIf:desc}
         *
         * @param {Object} object {Ext:method-applyIf:param_object}
         * @param {Object} config {Ext:method-applyIf:param_config}
         * @return {Object} {Ext:method-applyIf:return}
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
        // {{{ iterate

        /**
         * {Ext:method-iterate:desc}
         *
         * @param {Object/Array} object {Ext:method-microtime:param_object}
         * @param {Function} fn {Ext:method-microtime:param_fn}
         * @param {Object} scope {Ext:method-microtime:param_scope}
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
        }

        // }}}

    });

    Ext.apply(Ext, {

        // {{{ valueFrom

        /**
         * {Ext:method-valueFrom:desc}
         *
         * @param {Object} value {Ext:method-valueFrom:param_value}
         * @param {Object} defaultValue {Ext:method-valueFrom:param_defaultValue}
         * @param {Boolean} allowBlank {Ext:method-valueFrom:param_allowBlank}
         * @return {Object} {Ext:method-valueFrom:return}
         */
        valueFrom: function(value, defaultValue, allowBlank){
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value;
        },

        // }}}
        // {{{ typeOf

        /**
         * {Ext:method-typeOf:desc}
         *
         * @param {Object} value {Ext:method-typeOf:param_value}
         * @return {String} {Ext:method-typeOf:return}
         */
        typeOf: function(value) {

            var type,
                typeToString;

            if(value === null) {
                return 'null';
            }

            type = typeof value;

            if(type === 'undefined' || type === 'string' || type === 'number' || type === 'boolean') {
                return type;
            }

            typeToString = toString.call(value);

            switch(typeToString) {
                case '[object Array]':
                    return 'array';
                case '[object Date]':
                    return 'date';
                case '[object Boolean]':
                    return 'boolean';
                case '[object Number]':
                    return 'number';
                case '[object RegExp]':
                    return 'regexp';
            }

            if(type === 'function') {
                return 'function';
            }

        },

        // }}}
        // {{{ isSimpleObject

        /**
         * @private
         */
        isSimpleObject: function(value) {
            return value instanceof Object && value.constructor === Object;
        },

        // }}}
        // {{{ isArray

        /**
         * {Ext:method-isArray:desc}
         *
         * @param {Object} target {Ext:method-isArray:param_target}
         * @return {Boolean} {Ext:method-isArray:return}
         */
        isArray: Array.isArray,

        // }}}
        // {{{ isBoolean

        /**
         * {Ext:method-isBoolean:desc}
         *
         * @param {Object} value {Ext:method-isBoolean:param_value}
         * @return {Boolean} {Ext:method-isBoolean:return}
         */
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        // }}}
        // {{{ isDate

        /**
         * {Ext:method-isDate:desc}
         *
         * @param {Object} object {Ext:method-isDate:param_object}
         * @return {Boolean} {Ext:method-isDate:return}
         */
        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },

        // }}}
        // {{{ isDefined

        /**
         * {Ext:method-isDefined:desc}
         *
         * @param {Object} value {Ext:method-isDefined:param_value}
         * @return {Boolean} {Ext:method-isDefined:return}
         */
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },

        // }}}
        // {{{ isEmpty

        /**
         * {Ext:method-isEmpty:desc}
         *
         * @param {Object} value {Ext:method-isEmpty:param_value}
         * @param {Boolean} allowEmptyString {Ext:method-isEmpty:param_allowEmptyString}
         * @return {Boolean} {Ext:method-isEmpty:return}
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
         * {Ext:method-isFunction:desc}
         *
         * @param {Object} value {Ext:method-isFunction:desc}
         * @return {Boolean} {Ext:method-isFunction:return}
         */
        isFunction: function(value) {
            return typeof value === 'function';
        },

        // }}}
        // {{{ isIterable

        /**
         * {Ext:method-isIterable:desc}
         *
         * @param {Object} value {Ext:method-isIterable:param_value}
         * @return {Boolean} {Ext:method-isIterable:return}
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
         * {Ext:method-isNumber:desc}
         *
         * @param {Object} value {Ext:method-isNumber:param_value}
         * @return {Boolean} {Ext:method-isNumber:return}
         */
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },

        // }}}
        // {{{ isNumeric

        /**
         * {Ext:method-isNumeric:desc}
         *
         * @param {Object} value {Ext:method-isNumeric:param_value}
         * @return {Boolean} {Ext:method-isNumeric:return}
         */
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        // }}}
        // {{{ isObject

        /**
         * {Ext:method-isObject:desc}
         *
         * @param {Object} value {Ext:method-isObject:param_value}
         * @return {Boolean} {Ext:method-isObject:return}
         */
        isObject: function(value) {
            return toString.call(value) === '[object Object]';
        },

        // }}}
        // {{{ isPrimitive

        /**
         * {Ext:method-isPrimitive:desc}
         *
         * @param {Object} value {Ext:method-isPrimitive:param_value}
         * @return {Boolean} {Ext:method-isPrimitive:return}
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
         * {Ext:method-isString:desc}
         *
         * @param {Object} value {Ext:method-isString:param_value}
         * @return {Boolean} {Ext:method-isString:return}
         */
        isString: function(value) {
            return typeof value === 'string';
        }

        // }}}

    });

    Ext.apply(Ext, {

        // {{{ clone

        /**
         * {Ext:method-clone:desc}
         *
         * @param {Object} item {Ext:method-clone:desc}
         * @return {Object} {Ext:method-clone:return}
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
        // {{{ functionFactory

        // privatec
        functionFactory: function() {

            var args = Array.prototype.slice.call(arguments);

            if(args.length > 0) {
                args[args.length - 1] = [
                    /*
                    'var Ext=global.',
                    this.getUniqueGlobalNamespace(),
                    ';',
                    */
                    args[args.length - 1]
                ].join('');
            }

            return Function.prototype.constructor.apply(Function.prototype, args);
        },

        // }}}
        // {{{ getRandomInt

        /**
         * {Ext:method-getRandomInt:desc}
         *
         * @param {Number} min {Ext:method-getRandomInt:param_min}
         * @param {Number} max {Ext:method-getRandomInt:param_max}
         * @return {Number} {Ext:method-getRandomInt:return}random value
         */
        getRandomInt: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // }}}
        // {{{ getUniqueGlobalNamespace

        /*
        // private
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
        */

        // }}}
        // {{{ moduleCacheClear

        /**
         * {Ext:method-moduleCacheClear:desc}
         *
         * @param {String} path {Ext:method-moduleCacheClear:desc}
         * @param {Number} mtime {Ext:method-moduleCacheClear:desc}
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
         * {Ext:method-setLocale:desc}
         *
         * @param {String} locale {Ext:method-setLocale:param_locale}
         * @return {Boolean} {Ext:method-setLocale:return}
         */
        setLocale: function(locale) {

            try {
                locale = locale || 'en';
                locale = Ext.String.replace(locale, '/', '');
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
         * {Ext:method-uid:desc}
         *
         * @param {Number} len {Ext:method-uid:param_len}
         * @return {String} {Ext:method-uid:return}
         */
        uid: function(len) {

            var buf = [],
                ret = [],
                chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                charlen = chars.length;

            for(var i = 0; i < len; ++i) {
                buf.push(chars[Ext.getRandomInt(0, charlen - 1)]);
            }

            return buf.join('');
        },

        // }}}
        // {{{ Logger

        /**
         * @private
         */
        Logger: {
            verbose: Ext.emptyFn,
            log: Ext.emptyFn,
            info: Ext.emptyFn,
            warn: Ext.emptyFn,
            error: function(message) {
                throw new Error(message);
            },
            deprecate: Ext.emptyFn
        }

        // }}}

    });

    // Ext.Error
    require('./lang/Error');

    Ext.apply(Ext, {

        // Ext.Array
        Array: require('./lang/Array'),

        // Ext.Date
        Date: require('./lang/Date'),

        // Ext.Function
        Function: require('./lang/Function'),

        // Ext.JSON
        JSON: require('./misc/JSON'),

        // Ext.Number
        Number: require('./lang/Number'),

        // Ext.Object
        Object: require('./lang/Object'),

        // Ext.String
        String: require('./lang/String'),

        // Ext.util
        util: {}

    });

    Ext.apply(Ext.util, {

        // Ext.util.Format
        Format: require('./util/Format')

    });

    // create shorthand
    Ext.apply(Ext, {

        // {{{ toArray

        /**
         * @method
         * @member Ext
         * @alias Ext.Array#toArray
         */
        toArray: function() {
            return Ext.Array.toArray.apply(Ext.Array, arguments);
        },

        // }}}
        // {{{ merge

        /**
         * {Ext:method-merge:desc}
         *
         * @member Ext
         * @method merge
         * @alias Ext.Object#merge
         */
        merge: Ext.Object.merge,

        // }}}
        // {{{ margeIf

        /**
         * @private
         */
        mergeIf: Ext.Object.mergeIf,

        // }}}
        // {{{ each

        /**
         * @inheritdoc Ext.Array#each
         */
        each: Ext.Array.each,

        // }}}
        // {{{ union

        /**
         * @inheritdoc Ext.Array#merge
         */
        union: Ext.Array.merge,

        // }}}
        // {{{ toArray

        /**
         * @method
         * @member Ext
         * @inheritdoc Ext.Array#toArray
         */
        toArray: function() {
            return Ext.Array.toArray.apply(Ext.Array, arguments);
        }

        // }}}

    });

    // exports Ext
    module.exports = global.Ext;

    // locale setting
    var locale = process.env.LANG || 'en';

    if(Ext.isString(process.env.LANG)) {
        var tmp = process.env.LANG.split('_');
        if(Ext.isArray(tmp)) {
            locale = tmp[0];
        }
    }
    Ext.setLocale(locale);

    // require core files
    require('./class/Base');
    require('./class/Class');
    require('./class/ClassManager');
    require('./class/Loader');
    require('./version/Version');

    // dependencies
    Ext.$dependencies = {

        // {{{ connect

        connect: require('connect')

        // }}}

    };

    // require classes
    require('./server/Request');
    require('./server/Connect');
    require('./server/Server');

})();

// {{{ globalEval

/*
 * This method evaluates the given code free of any local variable. In some browsers this
 * will be at global scope, in others it will be in a function.
 *
 * @parma {String} code The code to evaluate.
 * @private
 * @method
 */
Ext.globalEval = function($$code) {
    (function(){
        eval($$code);
    }());
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
