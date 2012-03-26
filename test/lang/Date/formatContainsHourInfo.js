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

describe('Ext.Date.formatContainsHourInfo', function() {

    it('"Y-m-d h:i:s"形式を判定できること', function() {

        Ext.Date.formatContainsHourInfo('2006-01-01').should.equal(false);
        Ext.Date.formatContainsHourInfo('Y-m-d').should.equal(false);
        Ext.Date.formatContainsHourInfo('Y-m-d h:i:s').should.equal(true);

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
