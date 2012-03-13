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

describe('Ext.Number.snap', function() {

    it('2以上、10以下の範囲で1で割り切れる5に最も近い数値は、5であると判定されること', function() {
        Ext.Number.snap(5, 1, 2, 10).should.equal(5);
    });

    it('2以上、10以下の範囲で2で割り切れる5に最も近い数値は、6であると判定されること', function() {
        Ext.Number.snap(5, 2, 2, 10).should.equal(6);
    });

    it('2以上、10以下の範囲で3で割り切れる5に最も近い数値は、6であると判定されること', function() {
        Ext.Number.snap(5, 3, 2, 10).should.equal(6);
    });

    it('割る値をnullに指定した場合、5が返却されること', function() {
        Ext.Number.snap(5, null, 2, 10).should.equal(5);
    });

    it('2以上、10以下の範囲で6で割り切れる2に最も近い数値は、2であると判定されること', function() {
        Ext.Number.snap(2, 6, 2, 10).should.equal(2);
    });

    it('2以上、10以下の範囲で6で割り切れる3に最も近い数値は、6であると判定されること', function() {
        Ext.Number.snap(3, 6, 2, 10).should.equal(6);
    });

    it('2以上、10以下の範囲で-6で割り切れる3に最も近い数値は、2であると判定されること', function() {
        Ext.Number.snap(3, -6, 2, 10).should.equal(2);
    });

    it('2以上、10以下の範囲で6で割り切れる-3に最も近い数値は、2であると判定されること', function() {
        Ext.Number.snap(-3, 6, 2, 10).should.equal(2);
    });

    it('2以上、10以下の範囲で-6で割り切れる-3に最も近い数値は、2であると判定されること', function() {
        Ext.Number.snap(-3, -6, 2, 10).should.equal(2);
    });

    it('2以上、10以下の範囲で-6で割り切れる-6に最も近い数値は、2であると判定されること', function() {
        Ext.Number.snap(-6, -6, 2, 10).should.equal(2);
    });

    it('10以上、100以下の範囲で48で割り切れる-50に最も近い数値は、10であると判定されること', function() {
        Ext.Number.snap(-50, 48, 10, 100).should.equal(10);
    });

    it('0以上、100以下の範囲で26で割り切れる-50に最も近い数値は、0であると判定されること', function() {
        Ext.Number.snap(-50, 26, 0, 100).should.equal(0);
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
