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

describe('Ext.isObject', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isObject(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isObject(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isObject('Ext Server').should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isObject(3000).should.equal(false);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isObject(true).should.equal(false);
        Ext.isObject(false).should.equal(false);
    });

    it('オブジェクトを判定してtrueであること', function() {
        Ext.isObject({}).should.equal(true);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isObject([]).should.equal(false);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isObject((function(){})).should.equal(false);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isObject(new Date()).should.equal(false);
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
