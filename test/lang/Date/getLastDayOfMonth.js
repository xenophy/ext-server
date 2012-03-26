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

describe('Ext.Date.getLastDayOfMonth', function() {

    it('2007年1月の最後の週が水曜日であると判定できること', function() {

        var dt = new Date('1/10/2007'),

        lastDay = Ext.Date.getLastDayOfMonth(dt);

        Ext.Date.dayNames[lastDay].should.equal('Wednesday');
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
