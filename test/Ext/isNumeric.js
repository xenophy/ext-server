/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.isNumeric', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isNumeric(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isNumeric(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isNumeric('Ext Server').should.equal(false);
    });

    it('文字列の数字を判定してtrueであること', function() {
        Ext.isNumeric('3000').should.equal(true);
    });

    it('数値を判定してtrueであること', function() {
        Ext.isNumeric(3000).should.equal(true);
    });

    it('数値0を判定してtrueであること', function() {
        Ext.isNumeric(0).should.equal(true);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isNumeric(true).should.equal(false);
        Ext.isNumeric(false).should.equal(false);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isNumeric({}).should.equal(false);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isNumeric([]).should.equal(false);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isNumeric((function(){})).should.equal(false);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isNumeric(new Date()).should.equal(false);
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
