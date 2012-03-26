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

describe('Ext.Date.getElapsed', function() {

    it('2011年01月15日から2011年01月17日の間を172800000(ミリ秒)で取得できること', function() {

        var dt = new Date('2011-01-15');
        var dt2 = new Date('2011-01-17');

        Ext.Date.getElapsed(dt, dt2).should.equal(172800000);

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
