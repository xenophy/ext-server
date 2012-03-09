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

describe('Ext.isFunction', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isFunction(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isFunction(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isFunction('Ext Server').should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isFunction(3000).should.equal(false);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isFunction(true).should.equal(false);
        Ext.isFunction(false).should.equal(false);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isFunction({}).should.equal(false);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isFunction([]).should.equal(false);
    });

    it('関数オブジェクトを判定してtrueであること', function() {
        Ext.isFunction((function(){})).should.equal(true);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isFunction(new Date()).should.equal(false);
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
