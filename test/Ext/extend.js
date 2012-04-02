/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.extend', function() {

    it('継承したクラスを作成できること', function() {

        var ret = '', f, c;

        f = function() {
            ret = 'f called.';
        };

        c = Ext.extend(f, {
            constructor: function() {
                c.superclass.constructor.call(this);
                ret += ', c called.'
            }
        });

        new c();

        ret.should.equal('f called., c called.');

    });

    it('オブジェクト継承したクラスを作成できること', function() {

        var ret = '', c;

        c = Ext.extend(Object, {
            constructor: function() {
                ret += 'c called.'
            }
        });

        new c();

        ret.should.equal('c called.');

    });

    /*
    it('継承したクラスからさらに継承を作成できること', function() {

        var ret = '', f, g, c;

        f = function() {
            ret = 'f called.';
        };

        c = Ext.extend(f, {
            constructor: function() {
                c.superclass.constructor.call(this);
                ret += ', c called.'
            }
        });

        g = Ext.extend('Ext.test.g', c, {
            hoge: function() {
                return 'g.hoge called.';
            }
        });

        (new ()).hoge().should.equal('g.hoge called.');

    });
    */

    /*
    it('', function() {

        var ret = '', f, c, cls;

        f = function() {
        };

        c = Ext.extend(f, undefined);

    });
    */

    it('したクラスを作成し、インラインでオーバーライドできること', function() {

        var ret = '', f, c, cls;

        f = function() {
        };

        c = Ext.extend(f, {
            myfunc: function() {
                ret = 'call myfunc.';
            }
        });

        cls = new c();

        cls.myfunc();

        ret.should.equal('call myfunc.');

        cls.override({
            myfunc: function() {
                ret = 'call overrided myfunc.';
            }
        });

        cls.myfunc();

        ret.should.equal('call overrided myfunc.');

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
