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

describe('Ext.util.Format.plural', function() {

    it('値から複数形テキストを作成できること', function() {

        var ret = Ext.util.Format.plural(1, "Comment");
        ret.should.equal('1 Comment');

        var ret = Ext.util.Format.plural(2, "Comment");
        ret.should.equal('2 Comments');

        var ret = Ext.util.Format.plural(2, "Comment", "Comment[S]");
        ret.should.equal('2 Comment[S]');

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
