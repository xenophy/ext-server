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

describe('Ext.Number.contains', function() {

    it('2以上、10以下の範囲で5を判定した場合、5が返されること', function() {
        Ext.Number.constrain(5, 2, 10).should.equal(5);
    });

    it('2以上、4以下の範囲で5を判定した場合、4が返されること', function() {
        Ext.Number.constrain(5, 2, 4).should.equal(4);
    });

    it('2以上、4以下の範囲で1を判定した場合、2が返されること', function() {
        Ext.Number.constrain(1, 2, 4).should.equal(2);
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
