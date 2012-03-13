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

describe('Ext.Object.toQueryString', function() {

    it('{foo: "bar"}を渡して、"foo=bar"に変換されること', function() {
        Ext.Object.toQueryString({foo: 'bar'}).should.equal('foo=bar');
    });

    it('{foo: "bar", hoge: 123}を渡して、"foo=bar&hoge=123"に変換されること', function() {
        Ext.Object.toQueryString({foo: 'bar', hoge: 123}).should.equal('foo=bar&hoge=123');
    });

    it('{foo: 1, bar: 2}を渡して、"foo=1&bar=2"に変換されること', function() {
        Ext.Object.toQueryString({foo: 1, bar: 2}).should.equal("foo=1&bar=2");
    });

    it('{foo: null, bar: 2}を渡して、"foo=&bar=2"に変換されること', function() {
        Ext.Object.toQueryString({foo: null, bar: 2}).should.equal("foo=&bar=2");
    });

    it('"some price": "$300"を渡して、"some%20price=%24300"に変換されること', function() {
        Ext.Object.toQueryString({'some price': '$300'}).should.equal("some%20price=%24300");
    });

    it('{date: new Date(2011, 0, 1)}を渡して、"date=2011-01-01T00%3A00%3A00"に変換されること', function() {
        Ext.Object.toQueryString({date: new Date(2011, 0, 1)}).should.equal("date=2011-01-01T00%3A00%3A00");
    });

    it('{colors: ["red", "green", "blue"]}を渡して、"colors=red&colors=green&colors=blue"に変換されること', function() {
        Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}).should.equal("colors=red&colors=green&colors=blue");
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
