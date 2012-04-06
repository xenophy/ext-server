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

describe('Ext.server.Connect.urlencoded', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.urlencoded());

    app.use(function(req, res) {
        res.end(JSON.stringify(req.body));
    });

    describe('connect.urlencoded()', function() {

        (function(o) {
            it('should default to {}', function(done) {
                o.request()
                .post('/')
                .end(function(res) {
                    res.body.should.equal('{}');
                    done();
                });
            });
        })(app);

        it('should support all http methods', function(done) {
            app.request()
            .get('/')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Content-Length', 'user=tobi'.length)
            .write('user=tobi')
            .end(function(res) {
                res.body.should.equal('{"user":"tobi"}');
                done();
            });
        });

        it('should parse x-www-form-urlencoded', function(done) {
            app.request()
            .post('/')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .write('user=tobi')
            .end(function(res) {
                res.body.should.equal('{"user":"tobi"}');
                done();
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
