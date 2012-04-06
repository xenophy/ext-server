/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ test

function test(app, signature) {

    describe(signature, function(){

        describe('when missing Authorization', function() {
            it('should respond with 401 and WWW-Authenticate', function(done) {
                app.request()
                .get('/')
                .end(function(res) {
                    res.statusCode.should.equal(401);
                    res.headers['www-authenticate'].should.equal('Basic realm="Authorization Required"');
                    done();
                });
            });
        });

        /*
        describe('when valid', function(){
            it('should next()', function(done){
                app.request()
                .get('/')
                .set('Authorization', 'Basic dGo6dG9iaQ==')
                .end(function(res){
                    res.statusCode.should.equal(200);
                    res.body.should.equal('secret!');
                    done();
                });
            });
        });

        /*
        describe('when invalid', function(){
            it('should respond with 401', function(done){
                app.request()
                .get('/')
                .set('Authorization', 'Basic dGo69iaQ==')
                .end(function(res){
                    res.statusCode.should.equal(401);
                    res.headers['www-authenticate'].should.equal('Basic realm="Authorization Required"');
                    res.body.should.equal('Unauthorized');
                    done();
                });
            });
        });
        */
    });
};

// }}}
// {{{ describe

describe('Ext.server.Connect.basicAuth', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.basicAuth('tj', 'tobi'));

    app.use(function(req, res, next) {
        req.user.should.equal('tj');
        res.end('secret!');
    });

    test(app, 'connect.basicAuth(user, pass)');

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
