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

describe('Ext.isPrimitive', function() {

    it('undefinedを判定してfalseであること', function() {
        Ext.isPrimitive(undefined).should.equal(false);
    });

    it('nullを判定してfalseであること', function() {
        Ext.isPrimitive(null).should.equal(false);
    });

    it('文字列を判定してtrueであること', function() {
        Ext.isPrimitive('Ext Server').should.equal(true);
    });

    it('数値を判定してtrueであること', function() {
        Ext.isPrimitive(3000).should.equal(true);
    });

    it('真偽値を判定してtrueであること', function() {
        Ext.isPrimitive(true).should.equal(true);
        Ext.isPrimitive(false).should.equal(true);
    });

    it('オブジェクトを判定してfalseであること', function() {
        Ext.isPrimitive({}).should.equal(false);
    });

    it('配列を判定してfalseであること', function() {
        Ext.isPrimitive([]).should.equal(false);
    });

    it('関数オブジェクトを判定してfalseであること', function() {
        Ext.isPrimitive((function(){})).should.equal(false);
    });

    it('日付オブジェクトを判定してfalseであること', function() {
        Ext.isPrimitive(new Date()).should.equal(false);
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
