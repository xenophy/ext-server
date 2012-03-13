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

describe('Ext.Object.getSize', function() {

    it('オブジェクトのキー数を取得できること', function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        Ext.Object.getSize(o).should.equal(3);
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
