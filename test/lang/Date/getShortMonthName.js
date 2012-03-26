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

describe('Ext.Date.getShortMonthName', function() {

    it('月番号から略記を取得できること', function() {

        Ext.Date.getShortMonthName(0).should.equal('Jan');
        Ext.Date.getShortMonthName(1).should.equal('Feb');
        Ext.Date.getShortMonthName(2).should.equal('Mar');
        Ext.Date.getShortMonthName(3).should.equal('Apr');
        Ext.Date.getShortMonthName(4).should.equal('May');
        Ext.Date.getShortMonthName(5).should.equal('Jun');
        Ext.Date.getShortMonthName(6).should.equal('Jul');
        Ext.Date.getShortMonthName(7).should.equal('Aug');
        Ext.Date.getShortMonthName(8).should.equal('Sep');
        Ext.Date.getShortMonthName(9).should.equal('Oct');
        Ext.Date.getShortMonthName(10).should.equal('Nov');
        Ext.Date.getShortMonthName(11).should.equal('Dec');

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
