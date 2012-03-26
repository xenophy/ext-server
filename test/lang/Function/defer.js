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

describe('Ext.Function.defer', function() {

    it('指定した関数オブジェクトを遅延させて実行させることができること', function() {

        var startTime = new Date();

        Ext.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);

        }, 10).should.not.equal(0);

    });

    it('指定した関数オブジェクトを0秒後(即時)実行させることができること', function() {

        var startTime = new Date();

        Ext.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,10000);

        }).should.equal(0);

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
