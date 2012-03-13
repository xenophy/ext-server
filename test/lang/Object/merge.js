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

describe('Ext.Object.merge', function() {

    it('既存オブジェクトにキーと値を指定してマージできること', function() {

        var o = {foo: 'bar'};

        Ext.Object.merge(o, 'hoge', 123);

        o.foo.should.equal('bar');
        o.hoge.should.equal(123);
    });

    it('既存オブジェクトにキーと、オブジェクトを指定してマージできること', function() {

        var o = {foo: 'bar', hoge: {baz: 888}};

        Ext.Object.merge(o, 'hoge', {piyo: 999});

        o.foo.should.equal('bar');
        o.hoge.baz.should.equal(888);
        o.hoge.piyo.should.equal(999);
    });

    it('既存オブジェクトにキーと、関数オブジェクトを指定してマージできること', function() {

        var o = {foo: 'bar', hoge: {baz: 888}};

        Ext.Object.merge(o, 'hoge', {piyo: function() {
            return 'hoge func.';
        }});

        o.foo.should.equal('bar');
        o.hoge.baz.should.equal(888);
        o.hoge.piyo().should.equal('hoge func.');
    });

    it('既存オブジェクトにキーと、真偽値を指定してマージできること', function() {

        var o = {foo: 'bar', hoge: {baz: 888}};

        Ext.Object.merge(o, 'hoge', {piyo: false});

        o.foo.should.equal('bar');
        o.hoge.baz.should.equal(888);
        o.hoge.piyo.should.equal(false);
    });

    it('既存オブジェクトにキーと、数値を指定してマージできること', function() {

        var o = {foo: 'bar'};
        var a = {hoge: 123, piyo: 999};

        Ext.Object.merge(o, a);

        o.hoge.should.equal(123);
        o.piyo.should.equal(999);
    });

    it('既存オブジェクトにキーと、日付オブジェクトを指定してマージできること', function() {

        var o = {foo: 'bar', hoge: new Date()};

        Ext.Object.merge(o, 'hoge', {piyo: 999});

        o.hoge.piyo.should.equal(999);
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
