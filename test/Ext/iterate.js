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

describe('Ext.iterate', function() {

    it('オブジェクトを繰り返して値をコピーできること', function() {

        var dest = {},
            src = {
                key1: 'value1',
                key2: 'value2',
                key3: 'value3',
                key4: 'value4',
                key5: 'value5'
            };

        Ext.iterate(src, function(key, v, o) {
            dest[key] = v;
        });

        dest.key1.should.equal('value1');
        dest.key2.should.equal('value2');
        dest.key3.should.equal('value3');
        dest.key4.should.equal('value4');
        dest.key5.should.equal('value5');
    });

    it('undefinedを指定した場合、繰り返しを行わず終了すること', function() {

        var dest = {}, assert = require('assert');

        Ext.iterate(undefined, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');
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
