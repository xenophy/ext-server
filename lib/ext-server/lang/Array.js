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

            if(!Ext.isEmpty(item)) {
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
    },

    // }}}
    // {{{ difference

    /**
     * 配列Aから、配列Bに存在する項目を取り除いた配列を返します。
     *
     * @param {Array} arrayA 配列A
     * @param {Array} arrayB 配列B
     * @return {Array} 配列Aから配列Bの項目が取り除かれた配列
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
     * @method each
     *
     * 配列、または反復が可能な値を反復処理し、各項目に対して指定したコールバック関数を呼び出します。
     *
     *     var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];
     *
     *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
     *         console.log(name);
     *     });
     *
     *     var sum = function() {
     *         var sum = 0;
     *
     *         Ext.Array.each(arguments, function(value) {
     *             sum += value;
     *         });
     *
     *         return sum;
     *     };
     *
     *     sum(1, 2, 3); // returns 6
     *
     * コールバック関数でfalseを返すことで、反復処理を停止させることができます。
     *
     *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
     *         if (name === 'Singapore') {
     *             return false; // break here
     *         }
     *     });
     *
     * Ext.eachはExt.Array.eachのエイリアスです。
     *
     * @param {Array/NodeList/Mixed} iterable 反復処理させる値。
     * この引数が反復可能でない場合、コールバック関数が１回呼び出されます。
     * @param {Function} fn
     * コールバック関数。 Falseを返した場合、反復処理が停止し、
     * このメソッドはその時点のインデックス(index)を返します。 
     * 以下、コールバック関数に渡される引数です。
     *
     * - `item` : Mixed - 渡された配列(array)の現在のインデックス(index)にある項目
     * - `index` : Number - 配列(array)内の現在のインデックス(index)
     * - `allItems` : Array/NodeList/Mixed - Ext.Array.eachの第一引数として渡された配列(array)
     *
     * @param {Object} scope (オプション) 関数のスコープ（thisの参照先）
     * @param {Boolean} reverse (オプション)反復処理の順番を逆（配列の最後から開始）にします。
     * デフォルトはfalseです。
     * @return {Boolean} パラメータfnの説明を参照してください。
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
     * "write it"
     *
     * @param {Array} array 
     * @param {Function} fn 各項目へのコールバック関数
     * @param {Object} scope コールバック関数のスコープ
     * @return {Boolean} コールバック関数がfalsyな値を返さなかった場合はtrue
     */
    every: function(array, fn, scope) {
        return array.every(fn, scope);
    },

    // }}}
    // {{{ from

    /**
     * @method from
     *
     * 引数が配列でない場合、配列にして返します。 返却例:
     * 
     * - undefinedまたはnullが渡された場合、空の配列を返します。
     * - 配列が渡された場合、渡された配列をそのまま返します。
     * - 反復可能な値(iterable)の場合、配列のコピーを返します。（argumentsやノードリストと同様）
     * - それ以外の場合は、渡された値を１つ持つ配列を返します。
     * - "write it"
     *
     * @param {Array/Mixed} value 配列でない場合、配列に変換される値
     * @param {Boolean} (オプション) trueを指定した場合、渡された配列のコピーを作成し、
     * 必要に応じて新しい参照を返します。デフォルトはfalseです。
     * @return {Array} 配列
     */
    from: function(value, newReference) {

        var slice = Array.prototype.slice;

        if(value === undefined || value === null) {
            return [];
        }

        if(Ext.isArray(value)) {
            return (newReference) ? slice.call(value) : value;
        }

        if(value && value.length !== undefined && typeof value !== 'string') {
            return Ext.toArray(value);
        }

        return [value];
    },

    // }}}
    // {{{ include

    /**
     * 指定した項目が配列に含まれていない場合、この項目を配列に含めます。
     *
     * @param {Array} array 配列
     * @param {Mixed} item 含める項目
     */
    include: function(array, item) {
        if(!Ext.Array.contains(array, item)) {
            array.push(item);
        }
    },

    // }}}
    // {{{ indexOf

    /**
     * その配列(array)における、渡された項目(item)のインデックスを取得します。
     * Internet Explorerで存在しないarray.Prototype.indexOfを補完するメソッドです。
     *
     * @param {Array} array チェックされる配列
     * @param {Mixed} item 検索する項目
     * @param {Number} from (オプション)検索を開始するインデックス
     * @return {Number} 配列における、項目のインデックス(見つからなかった場合は-1)
     */
    indexOf: function(array, item, from) {
        return array.indexOf(item, from);
    },

    // }}}
    // {{{ insert

    /**
     * 配列に項目を挿入します。
     *
     * @param {Array} array 挿入される配列。
     * @param {Number} index 項目が挿入される、配列の位置インデックス。
     * @param {Array} items 挿入される項目配列。
     * @return {Array} 渡された配列。
     */
    insert: function (array, index, items) {
        return Ext.Array.replace(array, index, 0, items);
    },

    // }}}
    // {{{ lastIndexOf

    /**
     * "write it"
     *
     * @param {Array} array
     * @param {Mixed} item
     * @param {Number} from
     * @return {Number}
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
     * 配列の項目を置換します。
     * これは機能的にArrayオブジェクトのspliceメソッドと同等ですが、
     * IE8のspliceメソッドのバグを回避し、
     * また、挿入する項目を配列で指定することができるため、可変な引数リストを使用するより便利です。
     *
     * @param {Array} array 置換される配列。
     * @param {Number} index 置換を開始する配列内の位置インデックス
     * @param {Number} removeCount 指定した位置インデックスから削除する項目数
     * （0を指定することも可能です）。
     * @param {Array} insert 指定した位置インデックスへ挿入する配列。省略可能です。
     * @return {Array} 渡された配列。
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
     * 配列の一部の簡易コピーを返します。
     * これは、ネイティブの"Array.prototype.slice.call(array, begin, end)"を呼び出すことと同等です。
     * 引数オブジェクトはsliceメソッドを提供しませんが、
     * コンテキストオブジェクトはArray.prototype.sliceを使用することができますので、
     * 引数の「array」に引数オブジェクト「arguments」を指定する場合に、このメソッドはよく使用されます。
     *
     * @param {Array} array 配列（または引数オブジェクト）。
     * @param {Number} begin 開始する位置インデックス。
     * 負の値を設定した場合、配列の末尾からのオフセットです。
     * @param {Number} end 終了する位置インデックス。
     * 最後の項目は、コピーされる項目に含まれません。
     * 負の値を設定した場合、配列の末尾からのオフセットです。
     * この引数を省略した場合、配列の末尾までのすべての項目がコピーされます。
     * @return {Array} 元の配列の一部分がコピーされた配列。
     */
    slice: function(array, begin, end) {
        return Array.prototype.slice.call(array, begin, end);
    },

    // }}}
    // {{{ splice

    /**
     * 配列の項目を削除します。
     * これは機能的にArrayオブジェクトのspliceメソッドと同等ですが、
     * IE8のspliceメソッドのバグを回避します。
     * 第一引数に配列を指定する以外は、spliceメソッドと全く同等です。
     *
     * @param {Array} array 項目を削除される配列。
     * @param {Number} index 削除を開始する位置インデックス。
     * @param {Number} removeCount 削除を開始する位置インデックス。
     * @return {Array} 指定した位置インデックスから削除する項目数（0を指定することも可能です）。
     */

    splice: function(array) {
        return array.splice.apply(array, Ext.Array.slice(Ext.toArray(arguments), 1));
    },

    // }}}
    // {{{ toArray

    /**
     * 反復処理可能なもの（インデックスとlengthプロパティ）を本当の配列に変換します。
     *
     *     function test() {
     *         var args = Ext.Array.toArray(arguments),
     *             fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);
     *
     *         alert(args.join(' '));
     *         alert(fromSecondToLastArgs.join(' '));
     *     }
     *
     *     test('just', 'testing', 'here'); // alerts 'just testing here';
     *                                      // alerts 'testing here';
     *
     *     Ext.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array
     *     Ext.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']
     *     Ext.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']
     *
     * Ext.toArrayはExt.Array.toArrayのエイリアスです。
     *
     * @param {Mixed} iterable 配列に変換したい、反復可能なオブジェクト。
     * @param {Number} start (オプション)抜き出し開始位置を指定する、0から始まるインデックス。
     * デフォルトは0です。
     * @param {Number} end (オプション)抜き出し終了位置を指定する、0から始まるインデックス。
     * デフォルトは反復可能な値の最後のインデックスです。
     * @return {Array} 配列
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
