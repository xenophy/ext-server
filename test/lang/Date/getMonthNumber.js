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

describe('Ext.Date.getMonthNumber', function() {

    it('略記で月番号を取得できることこと', function() {

        Ext.Date.getMonthNumber('Jan').should.equal(0);
        Ext.Date.getMonthNumber('Feb').should.equal(1);
        Ext.Date.getMonthNumber('Mar').should.equal(2);
        Ext.Date.getMonthNumber('Apr').should.equal(3);
        Ext.Date.getMonthNumber('May').should.equal(4);
        Ext.Date.getMonthNumber('Jun').should.equal(5);
        Ext.Date.getMonthNumber('Jul').should.equal(6);
        Ext.Date.getMonthNumber('Aug').should.equal(7);
        Ext.Date.getMonthNumber('Sep').should.equal(8);
        Ext.Date.getMonthNumber('Oct').should.equal(9);
        Ext.Date.getMonthNumber('Nov').should.equal(10);
        Ext.Date.getMonthNumber('Dec').should.equal(11);

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
