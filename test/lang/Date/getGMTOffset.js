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

describe('Ext.Date.getGMTOffset', function() {

    it('こと', function() {

        var dt = new Date('2012-01-10');
        var x = ((new Date).getTimezoneOffset() * -1)/0.6;

        if(x >= 0) {
            x = '+' + Ext.String.leftPad(x, 4, '0');
        } else {
            x = '-' + Ext.String.leftPad(x, 4, '0');
        }

        Ext.Date.getGMTOffset(dt).should.equal(x);

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
