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
     * 配列をフィルタリングし、Ext.isEmptyで定義される要素を取り除きます。
     *
     * @param {Array} array
     * @return {Array} 取り除かれた結果
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
     * 一次配列のコピー（参照ではない）を生成します。
     * このメソッドはExt.cloneと違い、再帰的なコピー処理を行わないという点に注意してください。
     * これは、単にArray.prototype.slice.call(array)を使いやすくするためのメソッドです。
     *
     * @param {Array} array
     * @return {Array} コピーされた配列
     */
    clone: function(array) {
        return Array.prototype.slice.call(array);
    },

    // }}}
    // {{{ contains

    /**
     * 指定した項目（item）が配列（array）に存在するかどうかをチェックします。
     *
     * @param {Array} チェックされる配列
     * @param {Mixed} 検索する項目
     * @return {Boolean} 配列に項目が含まれている場合はtrue、そうでない場合はfalse
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
