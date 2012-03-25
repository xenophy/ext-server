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

describe('Ext.Date.add', function() {

    it('2006年10月29日に5日追加すると2006年11月3日になること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006'), Ext.Date.DAY, 5);

        dt.getFullYear().should.equal(2006);
        dt.getDate().should.equal(3);
        dt.getMonth().should.equal(10);
    });

    it('2006年10月29日に5日引くと2006年9月26日になること', function() {

        var dt = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, -5);

        dt.getFullYear().should.equal(2006);
        dt.getDate().should.equal(26);
        dt.getMonth().should.equal(8);
    });

    it('intervalにnullを指定すると、演算されないこと', function() {

        var dt = Ext.Date.add(new Date('10/1/2006'), null, -5);

        dt.getFullYear().should.equal(2006);
        dt.getDate().should.equal(1);
        dt.getMonth().should.equal(9);
    });

    it('5ミリ秒追加できること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.MILLI, 5);

        dt.getMilliseconds().should.equal(5);
    });

    it('5秒追加できること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.SECOND, 5);

        dt.getSeconds().should.equal(5);
    });

    it('5分追加できること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.MINUTE, 5);

        dt.getMinutes().should.equal(5);
    });

    it('5時間追加できること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.HOUR, 5);

        dt.getHours().should.equal(5);
    });

    it('5ヶ月追加できること', function() {

        var dt = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.MONTH, 5);

        dt.getFullYear().should.equal(2007);
        dt.getMonth().should.equal(2);
    });

    it('5年追加できること', function() {

        var dt9 = Ext.Date.add(new Date('10/29/2006 00:00:00'), Ext.Date.YEAR, 5);

        dt9.getFullYear().should.equal(2011);
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
