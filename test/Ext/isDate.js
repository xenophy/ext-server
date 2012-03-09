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

describe('Ext.isDate', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isDate(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isDate(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isDate('Ext Server').should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isDate(3000).should.equal(false);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isDate(true).should.equal(false);
        Ext.isDate(false).should.equal(false);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isDate({}).should.equal(false);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isDate([]).should.equal(false);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isDate((function(){})).should.not.equal(true);
    });

    it('日付オブジェクトを判定してtrueであること', function() {
        Ext.isDate(new Date()).should.equal(true);
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
