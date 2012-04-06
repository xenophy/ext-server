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

describe('Ext.server.Connect.patch', function() {

    describe('"header" event', function() {
        describe('with .setHeader()', function() {
            it('should be emitted', function(done) {
                var app = Ext.create('Ext.server.Connect');

                app.use(function(req, res, next) {
                    res.on('header', function() {
                        res.setHeader('bar', 'baz');
                    });

                    next();
                });

                app.use(function(req, res) {
                    res.setHeader('foo', 'bar');
                    res.end();
                });

                app.request()
                .get('/')
                .end(function(res) {
                    res.should.have.header('foo', 'bar');
                    res.should.have.header('bar', 'baz');
                    done();
                });
            });
        });

        describe('with .writeHead()', function() {
            it('should be emitted', function(done) {
                var app = Ext.create('Ext.server.Connect');

                app.use(function(req, res, next) {
                    res.on('header', function() {
                        res.setHeader('bar', 'baz');
                    });

                    next();
                });

                app.use(function(req, res) {
                    res.writeHead(200, { foo: 'bar' });
                    res.end();
                });

                app.request()
                .get('/')
                .end(function(res) {
                    res.should.have.header('foo', 'bar');
                    res.should.have.header('bar', 'baz');
                    done();
                });
            });
        });

        describe('with .end() only', function() {
            it('should be emitted', function(done) {
                var app = Ext.create('Ext.server.Connect');

                app.use(function(req, res, next) {
                    res.on('header', function() {
                        res.setHeader('bar', 'baz');
                    });

                    next();
                });

                app.use(function(req, res) {
                    res.end();
                });

                app.request()
                .get('/')
                .end(function(res) {
                    res.should.have.header('bar', 'baz');
                    done();
                });
            });
        });

    });

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
