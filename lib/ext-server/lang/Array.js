/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Array

/**
 * @class Ext.Array
 *
 * {Ext_Array:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ clean

    /**
     * {Ext_Array:method-clean:desc}
     *
     * @param {Array} array {Ext_Array:method-clean:param_array}
     * @return {Array} {Ext_Array:method-clean:return}
     */
    clean: function(array) {

        var results = [],
            i = 0,
            ln = array.length,
            item;

        for(; i < ln; i++) {

            item = array[i];

            if(!Ext.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    // }}}
    // {{{ clone

    /**
     * {Ext_Array:method-clone:desc}
     *
     * @param {Array} array {Ext_Array:method-clone:param_array}
     * @return {Array} {Ext_Array:method-clone:return}
     */
    clone: function(array) {
        return Array.prototype.slice.call(array);
    },

    // }}}
    // {{{ contains

    /**
     * {Ext_Array:method-contains:desc}
     *
     * @param {Array} array {Ext_Array:method-contains:param_array}
     * @param {Object} item {Ext_Array:method-contains:param_item}
     * @return {Boolean} {Ext_Array:method-contains:return}
     */
    contains: function(array, item) {
        return array.indexOf(item) !== -1;
    },

    // }}}
    // {{{ difference

    /**
     * {Ext_Array:method-difference:desc}
     *
     * @param {Array} arrayA {Ext_Array:method-difference:param_arrayA}
     * @param {Array} arrayB {Ext_Array:method-difference:param_arrayB}
     * @return {Array} {Ext_Array:method-difference:return}
     */
    difference: function(arrayA, arrayB) {

        var slice = Array.prototype.slice;

        var erase = function(array, index, removeCount) {
            array.splice(index, removeCount);
            return array;
        };

        var clone = slice.call(arrayA),
            ln = clone.length,
            i, j, lnB;

        for(i = 0, lnB = arrayB.length; i < lnB; i++) {
            for(j = 0; j < ln; j++) {
                if(clone[j] === arrayB[i]) {
                    erase(clone, j, 1);
                    j--;
                    ln--;
                }
            }
        }

        return clone;
    },

    // }}}
    // {{{ each

    /**
     * {Ext_Array:method-each:desc}
     *
     * @param {Array/NodeList/Object} iterable {Ext_Array:method-each:param_iterable}
     * @param {Function} fn {Ext_Array:method-each:param_fn}
     * @param {Object} fn.item {Ext_Array:method-each:param_fn.item}
     * @param {Number} fn.index {Ext_Array:method-each:param_fn.index}
     * @param {Array} fn.allItems {Ext_Array:method-each:param_fn.allItems}
     * @param {Boolean} fn.return {Ext_Array:method-each:param_fn.return}
     * @param {Object} scope {Ext_Array:method-each:param_scope}
     * @param {Boolean} reverse {Ext_Array:method-each:param_reverse}
     * @return {Boolean} {Ext_Array:method-each:return}
     */
    each: function(array, fn, scope, reverse) {

        array = Ext.Array.from(array);

        var i, ln = array.length;

        if(reverse !== true) {

            for(i = 0; i < ln; i++) {
                if(fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }

        } else {

            for(i = ln - 1; i > -1; i--) {
                if(fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }
        }

        return true;
    },

    // }}}
    // {{{ every

    /**
     * {Ext_Array:method-every:desc}
     *
     * @param {Array} array {Ext_Array:method-every:param_array}
     * @param {Function} fn {Ext_Array:method-every:param_fn}
     * @param {Object} scope {Ext_Array:method-every:param_scope}
     * @return {Boolean} {Ext_Array:method-every:return}
     */
    every: function(array, fn, scope) {
        return array.every(fn, scope);
    },

    // }}}
    // {{{ from

    /**
     * {Ext_Array:method-from:desc}
     *
     * @param {Array/Mixed} value {Ext_Array:method-from:param_value}
     * @param {Boolean} newReference {Ext_Array:method-from:param_newReference}
     * @return {Array} {Ext_Array:method-from:return}
     */
    from: function(value, newReference) {

        var slice = Array.prototype.slice;

        if(value === undefined || value === null) {
            return [];
        }

        if(Ext.isArray(value)) {
            return (newReference) ? slice.call(value) : value;
        }

        var type = typeof value;

        if (value && value.length !== undefined && type !== 'string' && (type !== 'function' || !value.apply)) {
            return Ext.Array.toArray(value);
        }

        return [value];
    },

    // }}}
    // {{{ include

    /**
     * {Ext_Array:method-include:desc}
     *
     * @param {Array} array {Ext_Array:method-include:param_array}
     * @param {Object} item {Ext_Array:method-include:param_item}
     */
    include: function(array, item) {
        if(!Ext.Array.contains(array, item)) {
            array.push(item);
        }
    },

    // }}}
    // {{{ indexOf

    /**
     * {Ext_Array:method-indexOf:desc}
     *
     * @param {Array} array {Ext_Array:method-indexOf:param_array}
     * @param {Object} item {Ext_Array:method-indexOf:param_item}
     * @param {Number} from {Ext_Array:method-indexOf:param_from}
     * @return {Number} {Ext_Array:method-indexOf:return}
     */
    indexOf: function(array, item, from) {
        return array.indexOf(item, from);
    },

    // }}}
    // {{{ insert

    /**
     * {Ext_Array:method-insert:desc}
     *
     * @param {Array} array {Ext_Array:method-insert:param_array}
     * @param {Number} index {Ext_Array:method-insert:param_index}
     * @param {Array} items {Ext_Array:method-insert:param_items}
     * @return {Array} {Ext_Array:method-insert:return}
     */
    insert: function(array, index, items) {
        return Ext.Array.replace(array, index, 0, items);
    },

    // }}}
    // {{{ lastIndexOf

    /**
     * {Ext_Array:method-lastIndexOf:desc}
     *
     * @param {Array} array {Ext_Array:method-lastIndexOf:param_array}
     * @param {Mixed} item {Ext_Array:method-lastIndexOf:param_item}
     * @param {Number} from {Ext_Array:method-lastIndexOf:param_from}
     * @return {Number} {Ext_Array:method-lastIndexOf:return}
     */
    lastIndexOf: function(array, item, from) {

        var len = array.length, from = Number(from);

        if(isNaN(from)) {

            from = len - 1;

        } else {

            from = (from < 0) ? Math.ceil(from) : Math.floor(from);

            if(from < 0) {
                from += len;
            } else if(from >= len) {
                from = len - 1;
            }
        }

        return array.lastIndexOf(item, from);
    },

    // }}}
    // {{{ replace

    /**
     * {Ext_Array:method-replace:desc}
     *
     * @param {Array} array {Ext_Array:method-replace:param_array}
     * @param {Number} index {Ext_Array:method-replace:param_index}
     * @param {Number} removeCount {Ext_Array:method-replace:param_removeCout}
     * @param {Array} insert {Ext_Array:method-replace:param_insert}
     * @return {Array} {Ext_Array:method-replace:return}
     */
    replace: function(array, index, removeCount, insert) {

        if(insert && insert.length) {
            if(index < array.length) {
                array.splice.apply(array, [index, removeCount].concat(insert));
            } else {
                array.push.apply(array, insert);
            }
        } else {
            array.splice(index, removeCount);
        }

        return array;
    },

    // }}}
    // {{{ slice

    /**
     * {Ext_Array:method-slice:desc}
     *
     * @param {Array} array {Ext_Array:method-slice:param_array}
     * @param {Number} begin {Ext_Array:method-slice:param_begin}
     * @param {Number} end {Ext_Array:method-slice:param_end}
     * @return {Array} {Ext_Array:method-slice:return}
     */
    slice: function(array, begin, end) {
        return Array.prototype.slice.call(array, begin, end);
    },

    // }}}
    // {{{ splice

    /**
     * {Ext_Array:method-splice:desc}
     *
     * @param {Array} array {Ext_Array:method-splice:param_array}
     * @param {Number} index {Ext_Array:method-splice:param_index}
     * @param {Number} removeCount {Ext_Array:method-splice:removeCount}
     * @return {Array} {Ext_Array:method-splice:return}
     */
    splice: function(array) {
        return array.splice.apply(array, Ext.Array.slice(Ext.toArray(arguments), 1));
    },

    // }}}
    // {{{ toArray

    /**
     * {Ext_Array:method-toArray:desc}
     *
     * @param {Object} iterable {Ext_Array:method-toArray:param_iterable}
     * @param {Number} start {Ext_Array:method-toArray:param_start}
     * @param {Number} end {Ext_Array:method-toArray:param_end}
     * @return {Array} {Ext_Array:method-toArray:return}
     */
    toArray: function(iterable, start, end) {

        if(!iterable || !iterable.length) {
            return [];
        }

        if(typeof iterable === 'string') {
            iterable = iterable.split('');
        }

        var array = [], i;

        start = start || 0;
        end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

        for(i = start; i < end; i++) {
            array.push(iterable[i]);
        }

        return array;
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
