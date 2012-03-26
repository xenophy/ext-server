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

describe('Ext.Function.createBuffered', function() {

    it('デリゲート関数作成し、遅延実行できること', function(done) {

        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            done();
        };

        var startTime = new Date();
        Ext.Function.createBuffered(f, 50)();

    });

    it('引数を指定したデリゲート関数作成し実行できること', function(done) {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

            done();
        }

        var startTime = new Date();
        Ext.Function.createBuffered(f, 50, this, [4,5,6])();

    });

    it('関数オブジェクトのエイリアスを作成できること2', function(done) {

        var x = 0;
        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

            if(x > 0) {
                done();
            }
            x++;
        }

        var startTime = new Date();
        var buff = Ext.Function.createBuffered(f, 50, this, [4,5,6]);
        buff();
        buff();
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
