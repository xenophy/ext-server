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

describe('Ext.server.Connect.server', function() {

    it('should inherit from event emitter', function(done) {
        var app = Ext.create('Ext.server.Connect');
        app.on('foo', done);
        app.emit('foo');
    });

    it('should not obscure FQDNs', function(done) {
        var app = Ext.create('Ext.server.Connect');

        app.use(function(req, res) {
            res.end(req.url);
        });

        app.request()
        .get('http://example.com/foo')
        .expect('http://example.com/foo', done);
    })

    it('should allow old-style constructor middleware', function() {

        var app = Ext.create('Ext.server.Connect');

        app.use(Ext.server.Connect.json());
        app.use(Ext.server.Connect.multipart());
        app.use(Ext.server.Connect.urlencoded());
        app.stack.should.have.length(3);
    });

    it('should escape the 404 response body', function(done) {

        var app = Ext.create('Ext.server.Connect');

        app.request()
        .get('/foo/<script>stuff</script>')
        .expect('Cannot GET /foo/&lt;script&gt;stuff&lt;/script&gt;', done);
    });

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
