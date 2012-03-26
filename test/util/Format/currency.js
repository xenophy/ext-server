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

describe('Ext.util.Format.currency', function() {

    it('通貨形式に変換できること', function() {

        var ret = Ext.util.Format.currency(1000, "¥", -1);

        ret.should.equal('¥1,000');

        var ret = Ext.util.Format.currency(1000, '', -1);

        ret.should.equal('$1,000');

        var ret = Ext.util.Format.currency(-1000, '', -1);

        ret.should.equal('-$1,000');

        var ret = Ext.util.Format.currency(1000, '', 5);

        ret.should.equal('$1,000.00000');

        var ret = Ext.util.Format.currency(1000, "円", -1, true);

        ret.should.equal('1,000円');
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
