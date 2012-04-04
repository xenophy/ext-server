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

describe('Ext.Base', function() {

    beforeEach(function() {
        Ext.ClassManager.enableNamespaceParseCache = false;
    });

    afterEach(function() {

        global.Test = undefined;

        try {
            delete global.Test;
        } catch (e) {}

        Ext.ClassManager.enableNamespaceParseCache = true;
    });

    describe("borrow", function() {

        beforeEach(function() {
            Ext.define("Test.Foo", {
                a: function() {
                    return 'foo a';
                },
                b: function() {
                    return 'foo b';
                },
                c: function() {
                    return 'foo c';
                }
            });
            Ext.define("Test.Bar", {
                a: function() {
                    return 'bar a';
                }
            });
        });

        it("should borrow methods", function() {
            Test.Bar.borrow(Test.Foo, ['b', 'c']);

            var bar = new Test.Bar();
            bar.a().should.equal('bar a');
            bar.b().should.equal('foo b');
            bar.c().should.equal('foo c');
        });

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
