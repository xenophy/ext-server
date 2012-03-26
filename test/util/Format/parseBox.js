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

describe('Ext.util.Format.parseBox', function() {

    it('CSSマージンスタイルを解析できること', function() {

        var ret = Ext.util.Format.parseBox('10 10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = Ext.util.Format.parseBox('10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = Ext.util.Format.parseBox('10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = Ext.util.Format.parseBox('10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = Ext.util.Format.parseBox(10);
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

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
