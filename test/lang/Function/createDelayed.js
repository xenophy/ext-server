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

describe('Ext.Function.createDelayed', function() {

    it('指定時間後に実行するコールバック関数を作成できること', function(done) {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);

            done();
        };

        var df = Ext.Function.createDelayed(f, 10);
        df();

    });

    it('スコープを切り替えることができること', function(done) {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            this.foo.should.equal('bar');

            done();
        };

        var df = Ext.Function.createDelayed(f, 10, {foo: 'bar'});
        df();

    });

    it('引数を指定した指定時間後に実行するコールバック関数を作成できること', function(done) {

        var startTime = new Date();
        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            arg1.should.equal(1);
            arg2.should.equal(2);
            arg3.should.equal(3);

            done();
        };

        var df = Ext.Function.createDelayed(f, 10, {foo: 'bar'}, [1, 2, 3], true);
        df();
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
