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

describe('Ext.Array.include', function() {

    it('指定した項目が配列に含まれている場合、追加しないこと', function() {

        var arr;

        arr = [1,2,3,4,5];

        Ext.Array.include(arr, 3);
        arr.length.should.equal(5);
        arr[0].should.equal(1);
        arr[1].should.equal(2);
        arr[2].should.equal(3);
        arr[3].should.equal(4);
        arr[4].should.equal(5);

        Ext.Array.include(arr, 6);
        arr.length.should.equal(6);
    });

    it('指定した項目が配列に含まれていない場合、追加すること', function() {

        var arr;

        arr = [1,2,3,4,5];

        Ext.Array.include(arr, 6);

        arr.length.should.equal(6);
        arr[0].should.equal(1);
        arr[1].should.equal(2);
        arr[2].should.equal(3);
        arr[3].should.equal(4);
        arr[4].should.equal(5);
        arr[5].should.equal(6);
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
