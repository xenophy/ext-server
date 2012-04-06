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

describe('Ext.server.Connect.responseTime', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.responseTime());

    app.use(function(req, res) {
        setTimeout(function() {
            res.end();
        }, 30);
    });

    describe('connect.responseTime()', function() {
        it('should set X-Response-Time', function(done) {
            app.request()
            .get('/')
            .end(function(res) {
                var n = parseInt(res.headers['x-response-time']);
                n.should.be.above(20);
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
