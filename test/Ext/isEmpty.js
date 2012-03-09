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

describe('Ext.isEmpty', function() {

    it('undefinedを判定してtrueであること', function() {
        Ext.isEmpty(undefined).should.equal(true);
    });

    it('nullを判定してtrueであること', function() {
        Ext.isEmpty(null).should.equal(true);
    });

    it('文字列を判定してfalseであること', function() {
        Ext.isEmpty('Ext Server').should.equal(false);
    });

    it('空文字列を判定してtrueであること', function() {
        Ext.isEmpty('').should.equal(true);
    });

    it('allowEmptyStringにtrueを指定し、空文字列を判定してfalseであること', function() {
        Ext.isEmpty('', true).should.equal(false);
    });

    it('数値を判定してfalseであること', function() {
        Ext.isEmpty(3000).should.equal(false);
    });

    it('真偽値を判定してfalseであること', function() {
        Ext.isEmpty(true).should.equal(false);
        Ext.isEmpty(false).should.equal(false);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isEmpty({}).should.equal(false);
    });

    it('配列を判定してtrueであること', function() {
        Ext.isEmpty([]).should.equal(true);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isEmpty((function(){})).should.equal(false);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isEmpty(new Date()).should.equal(false);
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
