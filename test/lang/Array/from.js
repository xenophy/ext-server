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

describe('Ext.Array.from', function() {

    it('オブジェクトを指定して、配列にして返されること', function() {

        var o = {
            a: 1,
            b: 2,
            c: 3
        }, ret;

        ret = Ext.Array.from(o);

        ret.length.should.equal(1);
        ret[0].a.should.equal(1);
        ret[0].b.should.equal(2);
        ret[0].c.should.equal(3);
    });

    it('引数オブジェクトを指定して、配列にして返されること', function() {

        var f = function() {
            var ret = Ext.Array.from(arguments);

            ret.length.should.equal(3);
            ret[0].should.equal(1);
            ret[1].should.equal(2);
            ret[2].should.equal(3);
        };

        f(1,2,3);
    });

    it('数値を指定して、配列にして返されること', function() {

        var ret = Ext.Array.from(1);

        ret[0].should.equal(1);
        ret.length.should.equal(1);
    });

    it('undefinedを指定して、空配列にして返されること', function() {

        var ret = Ext.Array.from(undefined);

        ret.length.should.equal(0);
    });

    it('nullを指定して、空配列にして返されること', function() {

        var ret = Ext.Array.from(null);

        ret.length.should.equal(0);
    });

    it('配列を指定して、別配列にして返されること', function() {

        var a = [1,2,3], ret;

        ret = Ext.Array.from(a, true);
        ret.length.should.equal(3);
        ret[0].should.not.equal(a);
        ret.should.not.equal(a);
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
