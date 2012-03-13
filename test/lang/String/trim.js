/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.String.trim', function() {

    it('""が""に変換されること', function() {
        Ext.String.trim('').should.equal('');
    });

    it('"foo"が"foo"に変換されること', function() {
        Ext.String.trim('foo').should.equal('foo');
    });

    it('"    "が""に変換されること', function() {
        Ext.String.trim('    ').should.equal('');
    });

    it('"  bar  "が"bar"に変換されること', function() {
        Ext.String.trim('  bar  ').should.equal('bar');
    });

    it('"foo   "が"foo"に変換されること', function() {
        Ext.String.trim('foo   ').should.equal('foo');
    });

    it('"   bar"が"bar"に変換されること', function() {
        Ext.String.trim('   bar').should.equal('bar');
    });

    it('"   bar"が"bar"に変換されること', function() {
        Ext.String.trim('foo bar').should.equal('foo bar');
    });

    it('"  foo bar baz   "が"foo bar baz"に変換されること', function() {
        Ext.String.trim('  foo bar baz   ').should.equal('foo bar baz');
    });

    it('"\tfoo"が"foo"に変換されること', function() {
        Ext.String.trim('\tfoo').should.equal('foo');
    });

    it('"\ttext    "が"text"に変換されること', function() {
        Ext.String.trim('\ttext    ').should.equal('text');
    });

    it('"text　"(全角スペース)が"text"に変換されること', function() {
        Ext.String.trim('text　').should.equal('text');
    });

    it('"　text "(全角スペース)が"text"に変換されること', function() {
        Ext.String.trim('　text ').should.equal('text');
    });

    it('"　text\t"(全角スペース)が"text"に変換されること', function() {
        Ext.String.trim('　text\t').should.equal('text');
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
