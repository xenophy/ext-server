/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.proxy.Reverse

/**
 * @class Ext.server.proxy.Reverse
 *
 * {Ext_server_proxy_Reverse:doc-contents}
 */
Ext.define('Ext.server.proxy.Reverse', {

    // {{{ statics

    statics: {

        // {{{ createInstance

        createInstance: function(config) {
            return new Ext.server.proxy.Reverse(config || {});
        }

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        var me = this,
            rotate = 0,
            server, getTarget, httpProxy, url;

        httpProxy = Ext.$dependencies['http-proxy'];
        url = require('url');

        Ext.apply(this, config);
        Ext.applyIf(this, {
            servers: []
        });

        process.on('uncaughtException', function(err) {
            console.log("%s ERROR: %s", new Date().toFormat('YYYY-MM-DD HH24:MI:SS'), err);
        });

        getTarget = function() {

            if(me.servers.length > 0) {

                rotate = ++rotate % me.servers.length;

                var target = me.servers[rotate];

                return {
                    host: target.host,
                    port: target.port
                };

            }
        }

        if(!config.ssl) {

            server = require('http').createServer(function(req, res) {

                var proxy = new httpProxy.HttpProxy({ target: getTarget() });

                req.headers['X-Forwarded-proto'] = 'http';

                proxy.proxyRequest(req, res);
            });

            server.on('upgrade',function(req, socket, head) {

                var proxy = new httpProxy.HttpProxy({ target: getTarget() });

                req.headers['X-Forwarded-proto'] = 'http';

                proxy.proxyWebSocketRequest(req, socket, head);
            });

            return server;

        } else {

            server = require('https').createServer(config.ssl, function(req, res) {

                var proxy = new httpProxy.HttpProxy({ target: getTarget() });

                req.headers['X-Forwarded-HTTPS'] = 'on';
                req.headers['X-Forwarded-proto'] = 'https';

                console.log(req);
                proxy.proxyRequest(req, res);
            });

            server.on('upgrade',function(req, socket, head) {

                var proxy = new httpProxy.HttpProxy({ target: getTarget() });

                req.headers['X-Forwarded-HTTPS'] = 'on';
                req.headers['X-Forwarded-proto'] = 'https';

                proxy.proxyWebSocketRequest(req, socket, head);
            });

            return server;

        }

    }

    // }}}

}, function() {

    Ext.apply(Ext, {

        // {{{ createProxy

        createProxy: Ext.server.proxy.Reverse.createInstance

        // }}}

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
