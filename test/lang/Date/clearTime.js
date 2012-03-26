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

describe('Ext.Date.clearTime', function() {

    it('年月日以外が0に初期化されること', function() {

        var dt = Ext.Date.clearTime(new Date('2011/05/16 09:12:54'));

        dt.getFullYear().should.equal(2011);
        dt.getMonth().should.equal(4);
        dt.getDate().should.equal(16);
        dt.getHours().should.equal(0);
        dt.getMinutes().should.equal(0);
        dt.getSeconds().should.equal(0);

    });

    it('初期化前と後で、オブジェクトが別であること', function() {

        var dt = new Date('2011/05/16 09:12:54');

        dt.getFullYear().should.equal(2011);
        dt.getMonth().should.equal(4);
        dt.getDate().should.equal(16);
        dt.getHours().should.equal(9);
        dt.getMinutes().should.equal(12);
        dt.getSeconds().should.equal(54);

        var dt2 = Ext.Date.clearTime(dt, true);

        dt2.getFullYear().should.equal(2011);
        dt2.getMonth().should.equal(4);
        dt2.getDate().should.equal(16);
        dt2.getHours().should.equal(0);
        dt2.getMinutes().should.equal(0);
        dt2.getSeconds().should.equal(0);

        dt2.should.not.equal(dt);

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
