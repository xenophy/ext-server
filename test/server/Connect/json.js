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

describe('Ext.server.Connect.json', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.json());

    app.use(function(req, res) {
        res.end(JSON.stringify(req.body));
    });

    app.use(function(err, req, res, next) {
        res.statusCode = err.status;
        res.end(err.message);
    });

    (function(o){
        it('should default to {}', function(done) {
            o.request()
            .post('/')
            .end(function(res){
                res.body.should.equal('{}');
                done();
            })
        })
    })(app);

    it('should parse JSON', function(done){
        app.request()
        .post('/')
        .set('Content-Type', 'application/json')
        .write('{"user":"tobi"}')
        .end(function(res){
            res.body.should.equal('{"user":"tobi"}');
            done();
        });
    });

    it('should fail gracefully', function(done){
        app.request()
        .post('/')
        .set('Content-Type', 'application/json')
        .write('{"user"')
        .end(function(res){
            res.body.should.equal('Unexpected end of input');
            done();
        });
    });

    it('should 400 on malformed JSON', function(done){
        var app = Ext.create('Ext.server.Connect');
        app.use(Ext.server.Connect.json());

        app.use(function(req, res){
            res.end(JSON.stringify(req.body));
        });

        app.request()
        .post('/')
        .set('Content-Type', 'application/json')
        .write('{"foo')
        .expect(400, done);
    });

    it('should support all http methods', function(done) {

        var app = Ext.create('Ext.server.Connect');

        app.use(Ext.server.Connect.json());

        app.use(function(req, res) {
            res.end(JSON.stringify(req.body));
        });

        app.request()
        .get('/')
        .set('Content-Type', 'application/json')
        .set('Content-Length', '["foo"]'.length)
        .write('["foo"]')
        .expect('["foo"]', done);
    });

    describe('when strict is false', function() {

        it('should parse primitives', function(done) {

            var app = Ext.create('Ext.server.Connect');
            app.use(Ext.server.Connect.json({ strict: false }));

            app.use(function(req, res){
                res.end(JSON.stringify(req.body));
            });

            app.request()
            .post('/')
            .set('Content-Type', 'application/json')
            .write('true')
            .expect('true', done);
        });

    });

    describe('by default', function() {
        it('should 400 on primitives', function(done) {
            var app = Ext.create('Ext.server.Connect');
            app.use(Ext.server.Connect.json());

            app.use(function(req, res){
                res.end(JSON.stringify(req.body));
            });

            app.request()
            .post('/')
            .set('Content-Type', 'application/json')
            .write('true')
            .expect(400, done);
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
