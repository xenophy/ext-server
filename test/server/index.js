/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.server.*', function() {

    var port = Ext.Server.$port;

    it('should wrap in an http.Server', function(done){

        var app = Ext.create('Ext.server.Connect');

        app.use(function(req, res){
            res.end();
        });

        app.listen(++port, function() {
            app
            .request('/')
            .expect(200, done);
        });

    });

    it('Ext.server.Server.create onLaunch', function(done) {

        Ext.service({
            cluster : false,
            port    : ++port,
            onLaunch: function() {
                done();
            }
        });

    });

    it('Ext.server.Server.create static', function(done) {

        var fixtures = require('path').normalize(__dirname + '/../shared/fixtures');

        Ext.service({
            cluster : false,
            public: fixtures,
            port: ++port,
            onLaunch: function() {
                done();
            }
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
