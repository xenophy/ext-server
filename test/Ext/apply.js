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

describe('Ext.apply', function() {

    it('空のオブジェクトに値が適用されること', function() {

        var src = {}, ret;

        ret = Ext.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');

    });

    it('デフォルト値が適用されること', function() {

        var src = {}, config, defaults, ret;

        config = {
            foo: 'bar'
        };

        defaults = {
            foo     : 'default value',
            hoge    : 'piyo'
        };

        ret = Ext.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');

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
