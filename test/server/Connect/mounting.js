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

describe('Ext.server.Connect.mounting', function() {

    var app, http = require('http');

    beforeEach(function() {
        app = Ext.create('Ext.server.Connect');
    });

    describe('with a connect app', function() {
        it('should mount', function(done) {
            var blog = Ext.create('Ext.server.Connect');

            blog.use(function(req, res) {
                req.url.should.equal('/');
                res.end('blog');
            });

            app.use('/blog', blog);

            app.request()
            .get('/blog')
            .expect('blog', done);
        });

        it('should retain req.originalUrl', function(done) {

            var app = Ext.create('Ext.server.Connect');

            app.use('/blog', function(req, res) {
                res.end(req.originalUrl);
            });

            app.request()
            .get('/blog/post/1')
            .expect('/blog/post/1', done);
        });

        it('should adjust req.url', function(done) {

            var app = Ext.create('Ext.server.Connect');

            app.use('/blog', function(req, res) {
                res.end(req.url);
            });

            app.request()
            .get('/blog/post/1')
            .expect('/post/1', done);
        });

        it('should strip trailing slash', function(done) {
            var blog = Ext.create('Ext.server.Connect');

            blog.use(function(req, res) {
                req.url.should.equal('/');
                res.end('blog');
            });

            app.use('/blog/', blog);

            app.request()
            .get('/blog')
            .expect('blog', done);
        });

        it('should set .route', function() {
            var blog = Ext.create('Ext.server.Connect');
            var admin = Ext.create('Ext.server.Connect');
            app.use('/blog', blog);
            blog.use('/admin', admin);
            app.route.should.equal('/');
            blog.route.should.equal('/blog');
            admin.route.should.equal('/admin');
        });

        it('should not add trailing slash to req.url', function(done) {

            var app = Ext.create('Ext.server.Connect');

            app.use('/admin', function(req, res, next) {
                next();
            });

            app.use(function(req, res, next) {
                res.end(req.url);
            });

            app.request()
            .get('/admin')
            .expect('/admin', done);
        });
    });

    describe('with a node app', function() {
        it('should mount', function(done) {
            var blog = http.createServer(function(req, res) {
                req.url.should.equal('/');
                res.end('blog');
            });

            app.use('/blog', blog);

            app.request()
            .get('/blog')
            .expect('blog', done);
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
