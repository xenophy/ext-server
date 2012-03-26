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

describe('Ext.Function.pass', function() {

    it('あらかじめ指定された引数で実行する関数を作成できること', function() {

        var sayHi = function(name) {
            return 'Hi, ' + name;
        }

        var f = Ext.Function.pass(sayHi, 'Fred');

        f().should.equal('Hi, Fred');
    });

    it('定義時に引数指定がなくても、実行できること', function() {

        var sayHi = function(t, h) {
            return t + ':' + h;
        }

        var f = Ext.Function.pass(sayHi);
        f('test', 'hoge').should.equal('test:hoge');
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
