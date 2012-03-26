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

describe('Ext.util.Format.nl2br', function() {

    it('改行を<br />に変換できること', function() {

        var tpl, ret;

        tpl = [
            'line1',
            'line2'
        ].join("\n");

        ret = Ext.util.Format.nl2br(tpl);

        ret.should.equal('line1<br />line2');
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
