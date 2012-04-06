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

describe('Ext.server.Connect.compress', function() {

    var fixtures = __dirname + '/../../shared/fixtures',
        app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.compress());
    app.use(Ext.server.Connect.static(fixtures));

    it('should gzip files', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .end(function(res){
            res.body.should.not.equal('- groceries');
            done();
        });
    });

    it('should set Content-Encoding', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .expect('Content-Encoding', 'gzip', done);
    });

    it('should support HEAD', function(done){
        app.request()
        .head('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .expect('', done);
    });

    it('should support conditional GETs', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .end(function(res){
            var date = res.headers['last-modified'];
            app.request()
            .get('/todo.txt')
            .set('Accept-Encoding', 'gzip')
            .set('If-Modified-Since', date)
            .expect(304, done);
        });
    });

    it('should set Vary', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .expect('Vary', 'Accept-Encoding', done);
    });

    it('should set Vary at all times', function(done){
        app.request()
        .get('/todo.txt')
        .expect('Vary', 'Accept-Encoding', done);
    });

    it('should transfer chunked', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .expect('Transfer-Encoding', 'chunked', done);
    });

    it('should remove Content-Length for chunked', function(done){
        app.request()
        .get('/todo.txt')
        .set('Accept-Encoding', 'gzip')
        .end(function(res){
            res.headers.should.not.have.property('content-length');
            done()
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
