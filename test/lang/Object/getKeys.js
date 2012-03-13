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

describe('Ext.Object.getKeys', function() {

    it('オブジェクトのキーが全て取得できること', function() {

        var o = {
            foo: 'bar',
            hoge: 'piyo',
            fee: 'baz'
        };

        var ret = Ext.Object.getKeys(o);

        ret[0].should.equal('foo');
        ret[1].should.equal('hoge');
        ret[2].should.equal('fee');
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
