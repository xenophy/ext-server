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

describe('Ext.Date.getWeekOfYear', function() {

    it('2012年2月1日が5週目であると判定できること', function() {

        var dt = new Date('2012-02-01');
        Ext.Date.getWeekOfYear(dt).should.equal(5);

        var dt = new Date('2013-01-01');
        Ext.Date.getWeekOfYear(dt).should.equal(1);

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
