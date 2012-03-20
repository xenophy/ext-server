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
 * {Ext_Function:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ alias

    /**
     * {Ext_Function:method-alias:desc}
     *
     * @param {Object/Function} object {Ext_Function:method-alias:param_object}
     * @param {String} methodName {Ext_Function:method-alias:param_methodName}
     * @return {Function} {Ext_Function:method-alias:return}
     */
    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    // }}}
    // {{{ bind

    /**
     * {Ext_Function:method-bind:desc}
     *
     * @param {Function} fn {Ext_Function:method-bind:param_fn}
     * @param {Object} scope {Ext_Function:method-bind:param_scope}
     * @param {Array} args {Ext_Function:method-bind:param_args}
     * @param {Boolean/Number} appendArgs {Ext_Function:method-bind:param_appendArgs}
     * @return {Function} {Ext_Function:method-bind:return}
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
     * {Ext_Function:method-createBuffered:desc}
     *
     * @param {Function} fn {Ext_Function:method-createBuffered:param_fn}
     * @param {Number} buffer {Ext_Function:method-createBuffered:param_buffer}
     * @param {Object} scope {Ext_Function:method-createBuffered:param_scope}
     * @param {Array} args {Ext_Function:method-createBuffered:param_args}
     * @return {Function} {Ext_Function:method-createBuffered:return}
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
     * {Ext_Function:method-createDelayed:desc}
     *
     * @param {Function} fn {Ext_Function:method-createDelayed:param_fn}
     * @param {Number} delay {Ext_Function:method-createDelayed:param_delay}
     * @param {Object} scope {Ext_Function:method-createDelayed:param_scope}
     * @param {Array} args {Ext_Function:method-createDelayed:param_args}
     * @param {Boolean/Number} appendArgs {Ext_Function:method-createDelayed:param_appendArgs}
     * @return {Function} {Ext_Function:method-createDelayed:return}
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
     * {Ext_Function:method-createInterceptor:desc}
     *
     * @param {Function} origFn {Ext_Function:method-createInterceptor:param_origFn}
     * @param {Function} newFn {Ext_Function:method-createInterceptor:param_newFn}
     * @param {Object} scope {Ext_Function:method-createInterceptor:param_scope}
     * @param {Object} returnValue {Ext_Function:method-createInterceptor:param_returnValue}
     * @return {Function} {Ext_Function:method-createInterceptor:return}
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
                return (newFn.apply(scope || me || global, args) !== false) ? origFn.apply(me || global, args) : returnValue || null;
            };

        }
    },

    // }}}
    // {{{ createSequence

    /**
     * {Ext_Function:method-createSequence:desc}
     *
     * @param {Function} origFn {Ext_Function:method-createSequence:param_origFn}
     * @param {Function} newFn {Ext_Function:method-createSequence:param_newFn}
     * @param {Object} scope {Ext_Function:method-createSequence:param_scope}
     * @return {Function} {Ext_Function:method-createSequence:return}
     */
    createSequence: function(origFn, newFn, scope) {

        if(!Ext.isFunction(newFn)) {

            return origFn;

        } else {

            return function() {
                var retval = origFn.apply(this || global, arguments);
                newFn.apply(scope || this || global, arguments);
                return retval;
            };

        }
    },

    // }}}
    // {{{ createThrottled

    /**
     * {Ext_Function:method-createThrottled:desc}
     *
     * @param {Function} fn {Ext_Function:method-createThrottled:param_fn}
     * @param {Number} interval {Ext_Function:method-createThrottled:param_interval}
     * @param {Object} scope {Ext_Function:method-createThrottled:param_scope}
     * @return {Function} {Ext_Function:method-createThrottled:return}
     */
    createThrottled: function(fn, interval, scope) {

        var lastCallTime, elapsed, lastArgs, timer, execute;

        execute = function() {
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
     * {Ext_Function:method-defer:desc}
     *
     * @param {Function} fn {Ext_Function:method-defer:param_fn}
     * @param {Number} millis {Ext_Function:method-defer:param_millis}
     * @param {Object} scope {Ext_Function:method-defer:param_scope}
     * @param {Array} args {Ext_Function:method-defer:param_args}
     * @param {Boolean/Number} appendArgs {Ext_Function:method-defer:param_appendArgs}
     * @return {Number} {Ext_Function:method-defer:return}
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
     * {Ext_Function:method-flexSetter:desc}
     *
     * @param {Function} setter {Ext_Function:method-flexSetter:param_setter}
     * @return {Function} {Ext_Function:method-flexSetter:return}
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
     * {Ext_Function:method-pass:desc}
     *
     * @param {Function} fn {Ext_Function:method-pass:param_fn}
     * @param {Array} args {Ext_Function:method-pass:param_args}
     * @param {Object} scope {Ext_Function:method-pass:param_scope}
     * @return {Function} {Ext_Function:method-pass:return}
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
