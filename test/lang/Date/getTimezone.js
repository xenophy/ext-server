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

describe('Ext.Date.getTimezone', function() {

    it('タイムゾーンが取得できること', function() {

        Ext.Date.getTimezone('Tue Jan 23 2007 00:00:00 GMT+0900 (JST)').should.equal('JST');
        Ext.Date.getTimezone('Tue Jan 23 2007 00:00:00 GMT+0800 (WITA)').should.equal('WITA');

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
