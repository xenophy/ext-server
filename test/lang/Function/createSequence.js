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

describe('Ext.Function.createSequence', function() {

    it('新たなシーケンス関数が作成できること', function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
            ret += ' Bye, ' + name;
        });

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred Bye, Fred');
    });

    it('シーケンス関数にnullを指定しても実行できること', function() {

        var ret = '';
        var sayHi = function(name){
            ret = 'Hi, ' + name;
        }

        sayHi('Fred');
        ret.should.equal('Hi, Fred');

        var sayGoodbye = Ext.Function.createSequence(sayHi, null);

        sayGoodbye('Fred');

        ret.should.equal('Hi, Fred');
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
