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

describe('Ext.util.Format.number', function() {

    it('数値をフォーマットできること', function() {

        Ext.util.Format.number(500).should.equal(500);
        Ext.util.Format.number('a', '0.00').should.equal('');
        Ext.util.Format.number(500, '0.00').should.equal('500.00');
        Ext.util.Format.number(500, '0.00/i').should.equal('500.00');
        Ext.util.Format.number(500, '000/i').should.equal('500');
        Ext.util.Format.number(-500, '000/i').should.equal('-500');

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
