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

describe('Ext.isIterable', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isIterable(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isIterable(null).should.equal(false);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isIterable('Ext Server').should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isIterable(3000).should.equal(false);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isIterable(true).should.equal(false);
        Ext.isIterable(false).should.equal(false);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isIterable({}).should.equal(false);
    });

    it('配列を判定してtrueであること', function() {
        Ext.isIterable([]).should.equal(true);
    });

    it('関数オブジェクトを判定してtrueであること', function() {
        Ext.isIterable((function(){})).should.equal(true);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isIterable(new Date()).should.equal(false);
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
