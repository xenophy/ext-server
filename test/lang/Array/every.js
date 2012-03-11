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

describe('Ext.Array.every', function() {

    it('関数の返す値がfalseになるまで繰り返すこと', function() {

        var isBigEnough, passed, x;

        isBigEnough = function(element, index, array) {
            x++;
            return (element >= 10);
        }
        x = 0;
        passed = Ext.Array.every([12, 5, 8, 130, 44], isBigEnough);
        passed.should.equal(false);
        x.should.equal(2);

        x = 0;
        passed = Ext.Array.every([12, 54, 18, 130, 44], isBigEnough);
        passed.should.equal(true);
        x.should.equal(5);
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
