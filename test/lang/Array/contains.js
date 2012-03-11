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

describe('Ext.Array.contains', function() {

    it('配列に含まれているものを検査した時、trueを返すこと', function() {

        var o = {foo: 'bar'},
            a = [1, o, 'hoge'];

        Ext.Array.contains(a, 1).should.equal(true);
        Ext.Array.contains(a, 2).should.equal(false);
        Ext.Array.contains(a, o).should.equal(true);
        Ext.Array.contains(a, {}).should.equal(false);
        Ext.Array.contains(a, 'hoge').should.equal(true);
        Ext.Array.contains(a, 'piyo').should.equal(false);
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
