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

describe('Ext.isDefined', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isDefined(undefined).should.equal(false);
    });

    it('nullを判定してtrueであること', function() {
        Ext.isDefined(null).should.equal(true);
    });

    it('文字列を判定してtrueであること', function() {
        Ext.isDefined('Ext Server').should.equal(true);
    });

    it('数値を判定してtrueであること', function() {
        Ext.isDefined(3000).should.equal(true);
    });

    it('真偽値を判定してtrueであること', function() {
        Ext.isDefined(true).should.equal(true);
        Ext.isDefined(false).should.equal(true);
    });

    it('オブジェクトを判定してtrueであること', function() {
        Ext.isDefined({}).should.equal(true);
    });

    it('配列を判定してtrueであること', function() {
        Ext.isDefined([]).should.equal(true);
    });

    it('関数オブジェクトを判定してtrueであること', function() {
        Ext.isDefined((function(){})).should.equal(true);
    });

    it('日付オブジェクトを判定してtrueであること', function() {
        Ext.isDefined(new Date()).should.equal(true);
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
