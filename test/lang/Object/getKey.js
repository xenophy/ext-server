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

describe('Ext.Object.getKey', function() {

    it('指定した位置のキーが、取得できること', function() {

        var o = {
            key1: 1,
            key2: 2,
            key3: 3
        };

        Ext.Object.getKey(o, 1).should.equal('key1');
        Ext.Object.getKey(o, 2).should.equal('key2');
        Ext.Object.getKey(o, 3).should.equal('key3');
    });

    it('範囲外の位置が指定された場合、nullを返すこと', function() {

        var o = {
            key1: 1,
            key2: 2,
            key3: 3
        };

        require('assert').equal(Ext.Object.getKey(o, 5), null);
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
