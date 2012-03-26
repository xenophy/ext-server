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

describe('Ext.Date.parse', function() {

    it('日付をフォーマット形式に従って解析できること', function() {

        var dt = new Date();

        dt = Ext.Date.parse("2006", "Y");
        Ext.Date.format(dt, 'Y').should.equal('2006');

        dt = Ext.Date.parse("2011/01/01", "Y/m/d");
        Ext.Date.format(dt, 'Y/m/d').should.equal('2011/01/01');

        dt = Ext.Date.parse('00:01:00 m is month', "H:m:s \\m \\i\\s\ \\m\\o\\n\\t\\h");
        Ext.Date.format(dt, "H:m:s \\m \\i\\s\ \\m\\o\\n\\t\\h").should.equal('00:01:00 m is month');

        dt = Ext.Date.parse("2006-01-15", "Y-m-d");
        Ext.Date.format(dt, 'Y-m-d').should.equal('2006-01-15');

        dt = Ext.Date.parse("2006-01-15 3:20:01 PM", "Y-m-d g:i:s A");
        Ext.Date.format(dt, 'Y-m-d g:i:s A').should.equal('2006-01-15 3:20:01 PM');

        dt = Ext.Date.parse("2006-02-29 03:20:01", "Y-m-d H:i:s", true);
        require('assert').equal(dt, null);

        dt = Ext.Date.parse("2006-01-01 Sun", "Y-m-d D");
        Ext.Date.format(dt, 'Y-m-d D').should.equal('2006-01-01 Sun');

        dt = Ext.Date.parse("2006-01-01 Sunday", "Y-m-d l");
        Ext.Date.format(dt, 'Y-m-d l').should.equal('2006-01-01 Sunday');

        dt = Ext.Date.parse("2006 January", "Y F");
        Ext.Date.format(dt, 'Y F').should.equal('2006 January');

        dt = Ext.Date.parse("2006 Jan", "Y M");
        Ext.Date.format(dt, 'Y M').should.equal('2006 Jan');

        dt = Ext.Date.parse("2006", "o");
        Ext.Date.format(dt, 'o').should.equal('2006');

        dt = Ext.Date.parse("2006-01-01 12:43:12", "Y-m-d h:i:s");
        Ext.Date.format(dt, 'Y-m-d h:i:s').should.equal('2006-01-01 12:43:12');

        dt = Ext.Date.parse("2006-01-01 12:43:12 +02:00", "Y-m-d h:i:s P");
        Ext.Date.format(dt, 'Y-m-d h:i:s P').should.equal('2006-01-01 07:43:12 +09:00');

        dt = Ext.Date.parse("2006-01-01 12:43:12 +0200", "Y-m-d h:i:s O");
        Ext.Date.format(dt, 'Y-m-d h:i:s O').should.equal('2006-01-01 07:43:12 +0900');

        dt = Ext.Date.parse("2004-02-12T15:19:21+00:00", "c");
        Ext.Date.format(dt, 'c').should.equal('2004-02-13T00:19:21+09:00');

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
