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

describe('Ext.Date.format', function() {

    it('"Y-m-d"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'Y-m-d').should.equal('2007-01-11');

    });

    it('"F j, Y, g:i a"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'F j, Y, g:i a').should.equal('January 11, 2007, 6:05 am');

    });

    it('"l, \\t\\he jS \\of F Y h:i:s A"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A').should.equal('Thursday, the 11th of January 2007 06:05:01 AM');

    });

    it('"c"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'c').should.equal('2007-01-11T06:05:01+09:00');

    });

    it('"MS"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'MS').should.equal("\\/Date(1168463101000)\\/");

    });

    it('"D"形式で出力できること', function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
        Ext.Date.format(dt, 'D').should.equal('Thu');

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
