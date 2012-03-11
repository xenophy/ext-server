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

describe('Ext.Array.indexOf', function() {

    it('引数に与えられた値のインデックスを返すこと', function() {

        var array = [2, 5, 9], index;

        index = Ext.Array.indexOf(array, 2);
        index.should.equal(0);
    });

    it('配列内に存在しない値の場合、-1を返すこと', function() {

        var array = [2, 5, 9], index;

        index = Ext.Array.indexOf(array, 7);
        index.should.equal(-1);
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
