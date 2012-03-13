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

describe('Ext.Object.each', function() {

    it('単一キーオブジェクトの繰り返しが正常に行われること', function() {
        Ext.Object.each({foo: 'bar'}, function(key, v) {
            key.should.equal('foo');
            v.should.equal('bar');
        });
    });

    it('複数キーオブジェクトの繰り返しが正常に行われること', function() {
        var x = 0;
        Ext.Object.each({foo: 'bar', hoge: 123}, function(key, v) {

            if(x == 0) {
                key.should.equal('foo');
                v.should.equal('bar');
            }

            if(x == 1) {
                key.should.equal('hoge');
                v.should.equal(123);
            }

            x++;
        });
    });

    it('コールバック関数内でfalseを返却すると、繰り返しが中止されること', function() {

        var x = 0;
        Ext.Object.each({foo: 'bar', hoge: 123}, function(key, v) {

            if(x == 0) {
                return false;
            }

            x++;
        });

        x.should.equal(0);
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
