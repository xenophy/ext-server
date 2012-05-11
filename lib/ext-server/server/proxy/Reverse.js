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

        var me = this, rotate = 0;

        Ext.apply(this, config);
        Ext.applyIf(this, {
            servers: []
        });


        var rotation = function() {

            if(me.servers.length > 0) {
                rotate = ++rotate % me.servers.length;
            }

        };

        if(!config.ssl) {

            return require('http').createServer(
                function(req, res) {
                    me.$listener.call(me, req, res, {
                        ssl: true,
                        rotate: rotate
                    });
                    rotation();
                }
            );

        } else {

            return require('https').createServer(
                config.ssl,
                function(req, res) {
                    me.$listener.call(me, req, res, {
                        ssl: true,
                        rotate: rotate
                    });
                    rotation();
                }
            );

        }

        process.on('uncaughtException', function(err) {
            console.log("%s ERROR: %s", new Date().toFormat('YYYY-MM-DD HH24:MI:SS'), err);
        });

    },

    // }}}
    // {{{ $listener

    $listener: function(req, res, opts) {

        var httpProxy, url, proxy, server, o;

        httpProxy = Ext.$dependencies['http-proxy'];
        url = require('url');
        proxy = new httpProxy.RoutingProxy();
        server = this.servers[opts.rotate];
        o = Ext.applyIf(url.parse('http://' + server), {
            port: 80
        });

        proxy.proxyRequest(req, res, {
            host : o.hostname,
            port : o.port
        });

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
