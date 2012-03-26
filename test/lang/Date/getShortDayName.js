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

describe('Ext.Date.getShortDayName', function() {

    it('日番号から略記を取得できること', function() {

        Ext.Date.getShortDayName(0).should.equal('Sun');
        Ext.Date.getShortDayName(1).should.equal('Mon');
        Ext.Date.getShortDayName(2).should.equal('Tue');
        Ext.Date.getShortDayName(3).should.equal('Wed');
        Ext.Date.getShortDayName(4).should.equal('Thu');
        Ext.Date.getShortDayName(5).should.equal('Fri');
        Ext.Date.getShortDayName(6).should.equal('Sat');

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
