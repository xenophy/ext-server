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

describe('Ext.applyIf', function() {

    it('未定義のキーに新たなキーを追加することができること', function() {

        var src, ret;

        src = {
            hoge: 'piyo'
        };

        ret = Ext.applyIf(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');

    });

    it('既に定義されているキーが上書きされないこと', function() {

        var src, config, ret;

        src = {
            foo: 'original'
        };

        config = {
            foo: 'bar'
        };

        ret = Ext.applyIf(src, config);

        src.should.equal(ret);
        src.foo.should.equal('original');

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
