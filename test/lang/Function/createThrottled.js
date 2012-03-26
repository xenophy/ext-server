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

describe('Ext.Function.createThrottled', function() {

    it('実行から指定時間後に再度実行する関数を作成できること', function(done) {

        var i;
        var startTime = new Date();
        var cnt = 0;
        var nf = Ext.Function.createThrottled(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(100*cnt-1,1000);

            cnt++;

        }, 100);

        for(i=0; i<100; i++) {
            nf();
        }

        cnt.should.equal(1);
        done();

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
