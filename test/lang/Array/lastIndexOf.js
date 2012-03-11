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

describe('Ext.Array.lastIndexOf', function() {

    it('引数に与えられた値の末尾からのインデックスを返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2);
        index.should.equal(3);
    });

    it('引数に与えられた値のが存在しない場合、-1を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 7);
        index.should.equal(-1);
    });

    it('検索開始場所は添え字3から2を検索し、インデックス3を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2, 3);
        index.should.equal(3);
    });

    it('検索開始場所は添え字2から2を検索し、インデックス0を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2, 2);
        index.should.equal(0);
    });

    it('検索開始場所は添え字-2(後ろから2番目)から2を検索し、インデックス0を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2, -2);
        index.should.equal(0);
    });

    it('検索開始場所は添え字-1(後ろから1番目)から2を検索し、インデックス3を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2, -1);
        index.should.equal(3);
    });

    it('検索開始場所は添え字10(配列長以上の添え字)から2を検索し、インデックス3を返すこと', function() {

        var array = [2, 5, 9, 2], index;

        index = Ext.Array.lastIndexOf(array, 2, 10);
        index.should.equal(3);
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
