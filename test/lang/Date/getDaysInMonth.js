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

describe('Ext.Date.getDaysInMonth', function() {

    it('2011年01月の日数は31であること', function() {

        var dt = new Date('2011-01-15');
        Ext.Date.getDaysInMonth(dt).should.equal(31);

    });

    it('2012年02月の日数は31であること', function() {

        var dt = new Date('2012-02-15');
        Ext.Date.getDaysInMonth(dt).should.equal(29);

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
