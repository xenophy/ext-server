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

describe('Ext.Loader.require', function() {

    it('require pattern1', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var ret = Ext.Loader.require('My.Test');
        var ret = Ext.Loader.require('My.Test2');

        cls = new My.Test();
        cls.foo().should.equal('My.Test.foo');

        cls = new My.Test2();
        cls.foo().should.equal('My.Test2.foo');

    });

    it('test require#pattern2', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var cls = Ext.create('My.extend.Test2');
        cls.foo().should.equal('My.extend.Test2.foo');
        cls.bar().should.equal('My.extend.Test.bar');

    });

    it('test require#pattern3', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var cls = Ext.create('My.extend2.Test3');
        cls.foo().should.equal('My.extend2.Test3.foo');
        cls.bar().should.equal('My.extend2.Test2.bar');
        cls.baz().should.equal('My.extend2.Test.baz');

    });

    // }}}
    // {{{ test require#pattern4

    it('test require#pattern4', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var cls = Ext.create('My.mixins.Test');

        cls.foo().should.equal('My.mixins.Test.foo');
        cls.bar().should.equal('My.mixins.Test.bar');
        cls.mix1().should.equal('My.mixins.Mix1.mix1');
        cls.mix2().should.equal('My.mixins.Mix2.mix2');

    });

    // }}}
    // {{{ test require#pattern5

    if('test require#pattern5', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var cls = Ext.create('My.requires.Test');
        cls.foo().should.equal('My.requires.Req1.req1');
        cls.bar().should.equal('My.requires.Req2.req2');

    });

    // }}}
    // {{{ test require#pattern6

    it('test require#pattern6', function() {

        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../../shared/src/Loader/'
            }
        });

        var cls = Ext.create('My.requires2.Test');
        cls.foo().should.equal('My.requires2.Req1.req1');

    });

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

