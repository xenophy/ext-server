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

describe('Ext.Array.difference', function() {

    it('配列Aから、配列Bに存在する項目を取り除いた配列を返すこと', function() {

        var arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            arrayB = [2, 3, 5, 8, 9, 10],
            ret;

        ret = Ext.Array.difference(arrayA, arrayB);

        ret.length.should.equal(4);
        ret[0].should.equal(1);
        ret[1].should.equal(4);
        ret[2].should.equal(6);
        ret[3].should.equal(7);
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
