/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.Array
 *
 * 配列を扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ clean

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    clean: function(array) {

        var results = [],
            i = 0,
            ln = array.length,
            item;

        for(; i < ln; i++) {

            item = array[i];

            if(!NX.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    // }}}
    // {{{ clone

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    clone: function(array) {
        return Array.prototype.slice.call(array);
    },

    // }}}
    // {{{ contains

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    contains: function(array, item) {
        return array.indexOf(item) !== -1;
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
