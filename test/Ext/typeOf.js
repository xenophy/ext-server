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

describe('Ext.typeOf', function() {

    it('型を判定して文字列として取得できること', function() {

        Ext.typeOf(null).should.equal('null');
        Ext.typeOf(undefined).should.equal('undefined');
        Ext.typeOf('abc').should.equal('string');
        Ext.typeOf(123).should.equal('number');
        Ext.typeOf(true).should.equal('boolean');

        Ext.typeOf([]).should.equal('array');
        Ext.typeOf((new Date())).should.equal('date');
        Ext.typeOf((new Boolean(true))).should.equal('boolean');
        Ext.typeOf((new Number(456))).should.equal('number');
        Ext.typeOf((new RegExp("DEF", "i"))).should.equal('regexp');
        Ext.typeOf(function() {}).should.equal('function');
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
