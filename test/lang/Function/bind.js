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

describe('Ext.Function.bind', function() {

    it('設定した関数オブジェクトから新しい関数オブジェクトを作成できること', function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        Ext.Function.bind(f, this, [4,5,6], true)().should.equal('4:5:6');

    });

    it('指定した位置へ引数を設定して実行できること', function() {

        var f = function(arg1, arg2, arg3) {
            return arg1 + ':' + arg2 + ':' + arg3;
        }

        f(1,2).should.equal('1:2:undefined');

        Ext.Function.bind(f, this, [6], 1)(5,7).should.equal('5:6:7');

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
