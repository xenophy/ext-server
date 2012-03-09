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

describe('Ext.isBoolean', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isBoolean(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isBoolean(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isBoolean('Ext Server').should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isBoolean(3000).should.equal(false);
    });

    it('真偽値を判定してtrueであること', function() {
        Ext.isBoolean(true).should.equal(true);
        Ext.isBoolean(false).should.equal(true);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isBoolean({}).should.equal(false);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isBoolean([]).should.equal(false);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isBoolean((function(){})).should.equal(false);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isBoolean(new Date()).should.equal(false);
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
