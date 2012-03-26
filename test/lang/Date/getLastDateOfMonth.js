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

describe('Ext.Date.getLastDateOfMonth', function() {

    it('2012年1月10日の月終わりの日付オブジェクトを取得できること', function() {

        var dt = new Date('2012-01-10');

        Ext.Date.getLastDateOfMonth(dt).getFullYear().should.equal(2012);
        Ext.Date.getLastDateOfMonth(dt).getMonth().should.equal(0);
        Ext.Date.getLastDateOfMonth(dt).getDate().should.equal(31);

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
