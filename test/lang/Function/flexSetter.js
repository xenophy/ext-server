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

describe('Ext.Function.flexSetter', function() {

    it('引数のキーと値を設定できる関数オブジェクトを作成できること', function() {

        var cnt = 1;
        var f = Ext.Function.flexSetter(function(key, v) {
            key.should.equal('key' + cnt);
            v.should.equal('v' + cnt);
            cnt++;
        });

        var o = {key1: 'v1', key2: 'v2'};

        f(o);

    });

    it('引数にnullを指定してもできること', function() {

        var ret = false;
        var f = Ext.Function.flexSetter(function(key, v) {
            ret = true;
        });

        f(null);

        ret.should.be.not.ok;
    });

    it('オブジェクトではなくプリミティブ値をカンマ区切りで指定して、実行できること', function() {

        var ret = '';
        var f = Ext.Function.flexSetter(function(key, v) {
            ret = key + ':' + v;
        });

        f('hoge', 'foo');

        ret.should.equal('hoge:foo');
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
