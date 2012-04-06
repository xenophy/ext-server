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

describe('Ext.server.Connect.vhost', function() {

    var http = require('http');

    it('should route by Host', function(done){

        var app = Ext.create('Ext.server.Connect'),
            tobi = Ext.create('Ext.server.Connect'),
            loki = Ext.create('Ext.server.Connect');

        app.use(Ext.server.Connect.vhost('tobi.com', tobi));
        app.use(Ext.server.Connect.vhost('loki.com', loki));

        tobi.use(function(req, res){ res.end('tobi') });
        loki.use(function(req, res){ res.end('loki') });

        app.request()
        .get('/')
        .set('Host', 'tobi.com')
        .expect('tobi', done);

    });

    it('should support http.Servers', function(done) {
        var app = Ext.create('Ext.server.Connect'),
            tobi = http.createServer(function(req, res){ res.end('tobi') }),
            loki = http.createServer(function(req, res){ res.end('loki') });

            app.use(Ext.server.Connect.vhost('tobi.com', tobi));
            app.use(Ext.server.Connect.vhost('loki.com', loki));

        app.request()
            .get('/')
            .set('Host', 'loki.com')
            .expect('loki', done);
    });

    it('should support wildcards', function(done) {
        var app = Ext.create('Ext.server.Connect'),
            tobi = http.createServer(function(req, res){ res.end('tobi') }),
            loki = http.createServer(function(req, res){ res.end('loki') });

        app.use(Ext.server.Connect.vhost('*.ferrets.com', loki));
        app.use(Ext.server.Connect.vhost('tobi.ferrets.com', tobi));

        app.request()
        .get('/')
        .set('Host', 'loki.ferrets.com')
        .expect('loki', done);
    });

    it('should 404 unless matched', function(done) {

        var app = Ext.create('Ext.server.Connect'),
            tobi = http.createServer(function(req, res){ res.end('tobi') }),
            loki = http.createServer(function(req, res){ res.end('loki') });

        app.use(Ext.server.Connect.vhost('tobi.com', tobi));
        app.use(Ext.server.Connect.vhost('loki.com', loki));

        app.request()
        .get('/')
        .set('Host', 'ferrets.com')
        .expect(404, done);
    });

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
