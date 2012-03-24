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

describe('Ext.JSON.encodeDate', function() {

    it('"yyyy-mm-ddThh:mm:ss"形式を返すこと', function() {
        Ext.JSON.encodeDate(new Date(1999, 11, 31, 23, 59, 59)).should.equal('"1999-12-31T23:59:59"');
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
