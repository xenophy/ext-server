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

describe('Ext.Date.getDayOfYear', function() {

    it('2011-01-15が14であること', function() {

        var dt = new Date('2011-01-15');
        Ext.Date.getDayOfYear(dt).should.equal(14);

    });

    it('2011-11-11が314であること', function() {

        var dt = new Date('2011-11-11');
        Ext.Date.getDayOfYear(dt).should.equal(314);

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
