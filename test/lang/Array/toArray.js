/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.Array.toArray', function() {

    it('添え字2から2要素(指定した3-1個)の配列が返されること', function() {

        var arr = [1,2,3,4,5], ret;

        ret = Ext.Array.toArray(arr, 2, 4);

        ret.length.should.equal(2);
        ret[0].should.equal(3);
        ret[1].should.equal(4);
    });

    it('文字列だけを指定すると、1文字配列の要素に格納されて返されること', function() {

        var ret = Ext.Array.toArray('abc');

        ret[0].should.equal('a');
        ret[1].should.equal('b');
        ret[2].should.equal('c');
    });

    it('添え字1から1要素(2-1)の配列が返されること', function() {

        var ret = Ext.Array.toArray('abc', 1, 2);

        ret[0].should.equal('b');
    });

    it('イテレート不可能なundefinedを指定した場合、空配列が返されること', function() {

        var ret = Ext.Array.toArray(undefined);

        ret.length.should.equal(0);
    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
