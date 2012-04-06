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

describe('Ext.server.Connect.query', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.query());

    app.use(function(req, res) {
        res.end(JSON.stringify(req.query));
    });

    describe('connect.query()', function() {
        it('should parse the query-string', function(done) {
            app.request()
            .get('/?user[name]=tobi')
            .end(function(res) {
                res.body.should.equal('{"user":{"name":"tobi"}}');
                done();
            });
        })

        it('should default to {}', function(done) {
            app.request()
            .get('/')
            .end(function(res) {
                res.body.should.equal('{}');
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
