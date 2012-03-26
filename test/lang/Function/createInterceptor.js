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

describe('Ext.Function.createInterceptor', function() {

    it('インターセプター関数が作成できること', function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        });

        require('assert').equal(sayHiToFriend('Fred'), null);
        sayHiToFriend('Brian').should.equal('Hi, Brian');
    });

    it('実行される前に実行される関数がnullを指定してもインターセプター関数が実行できること', function() {

        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = Ext.Function.createInterceptor(sayHi, null);

        sayHiToFriend('Fred').should.equal('Hi, Fred');
        sayHiToFriend('Brian').should.equal('Hi, Brian');
    });

    it('実行される前に実行されるの判定が、falseの場合に、"return test"が返却されること', function() {

        var returnValue = 'return test';
        var sayHi = function(name){
            return 'Hi, ' + name;
        }

        sayHi('Fred').should.equal('Hi, Fred');

        var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
            return name == 'Brian';
        }, this, returnValue);

        require('assert').equal(sayHiToFriend('Fred'), returnValue);
        sayHiToFriend('Brian').should.equal('Hi, Brian');
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
