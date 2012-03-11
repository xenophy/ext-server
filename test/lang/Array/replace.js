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

describe('Ext.Array.replace', function() {

    it('添え字2から2要素削除されること', function() {

        var ret = Ext.Array.replace([1,2,3,4,5], 2, 2);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(5);

    });

    it('添え字2から0要素削除され、添え字2の部分に[9, 10]が挿入されること', function() {

        var ret = Ext.Array.replace([1,2,3,4,5], 2, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(9);
        ret[3].should.equal(10);
        ret[4].should.equal(3);
        ret[5].should.equal(4);
        ret[6].should.equal(5);
    });

    it('添え字が配列の範囲外(8)で、0要素削除され、末尾に[9, 10]が挿入されること', function() {

        var ret = Ext.Array.replace([1,2,3,4,5], 8, 0, [9, 10]);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret[3].should.equal(4);
        ret[4].should.equal(5);
        ret[5].should.equal(9);
        ret[6].should.equal(10);
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
