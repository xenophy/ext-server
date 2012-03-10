/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Function

/**
 * @class Ext.Function
 *
 * 関数を扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ alias

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    // }}}
    // {{{ bind

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    bind: function(fn, scope, args, appendArgs) {

        var method = fn, slice = Array.prototype.slice;

        return function() {

            var callArgs = args || arguments;

            if(appendArgs === true) {

                callArgs = slice.call(arguments, 0);
                callArgs = callArgs.concat(args);

            } else if(Ext.isNumber(appendArgs)) {

                callArgs = slice.call(arguments, 0);
                Ext.Array.insert(callArgs, appendArgs, args);

            }

            return method.apply(scope || global, callArgs);
        };
    },

    // }}}
    // {{{ createBuffered

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createBuffered: function(fn, buffer, scope, args) {

        return function() {

            var timerId;

            return function() {

                var me = this;

                if(timerId) {
                    clearInterval(timerId);
                    timerId = null;
                }

                timerId = setTimeout(function(){
                    fn.apply(scope || me, args || arguments);
                }, buffer);

            };

        }();
    },

    // }}}
    // {{{ createDelayed

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createDelayed: function(fn, delay, scope, args, appendArgs) {

        if(scope || args) {
            fn = Ext.Function.bind(fn, scope, args, appendArgs);
        }

        return function() {
            var me = this;
            setTimeout(function() {
                fn.apply(me, arguments);
            }, delay);
        };
    },

    // }}}
    // {{{ createInterceptor

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createInterceptor: function(origFn, newFn, scope, returnValue) {

        var method = origFn;

        if(!Ext.isFunction(newFn)) {

            return origFn;

        } else {

            return function() {
                var me = this,
                args = arguments;
                newFn.target = me;
                newFn.method = origFn;
                return (newFn.apply(scope || me || window, args) !== false) ? origFn.apply(me || window, args) : returnValue || null;
            };

        }
    },

    // }}}
    // {{{ createSequence

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createSequence: function(origFn, newFn, scope) {

        if(!Ext.isFunction(newFn)) {

            return origFn;

        } else {

            return function() {
                var retval = origFn.apply(this || window, arguments);
                newFn.apply(scope || this || window, arguments);
                return retval;
            };

        }
    },

    // }}}
    // {{{ createThrottled

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createThrottled: function(fn, interval, scope) {

        var lastCallTime, elapsed, lastArgs, timer, execute = function() {
            fn.apply(scope || this, lastArgs);
            lastCallTime = new Date().getTime();
        };

        return function() {

            elapsed = new Date().getTime() - lastCallTime;
            lastArgs = arguments;

            clearTimeout(timer);

            if(!lastCallTime || (elapsed >= interval)) {
                execute();
            } else {
                timer = setTimeout(execute, interval - elapsed);
            }
        };
    },

    // }}}
    // {{{ defer

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    defer: function(fn, millis, obj, args, appendArgs) {

        fn = Ext.Function.bind(fn, obj, args, appendArgs);

        if(millis > 0) {
            return setTimeout(fn, millis);
        }

        fn();

        return 0;
    },

    // }}}
    // {{{ flexSetter

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    flexSetter: function(fn) {

        return function(a, b) {

            var k, i;

            if(a === null) {
                return this;
            }

            if(typeof a !== 'string') {

                for(k in a) {

                    if(a.hasOwnProperty(k)) {
                        fn.call(this, k, a[k]);
                    }

                }

            } else {

                fn.call(this, a, b);

            }

            return this;
        };

    },

    // }}}
    // {{{ pass

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    pass: function(fn, args, scope) {

        if(args) {
            args = Ext.Array.from(args);
        } else {
            args = [];
        }

        return function() {
            return fn.apply(scope, args.concat(Ext.Array.toArray(arguments)));
        };
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
