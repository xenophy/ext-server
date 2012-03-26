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

describe('Ext.Date.between', function() {

    it('2011年5月16日が、2011年5月1日から2011年5月20の間であると判定できること', function() {

        Ext.Date.between(new Date('2011/05/16'), new Date('2011/05/01'), new Date('2011/05/20')).should.equal(true);

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
