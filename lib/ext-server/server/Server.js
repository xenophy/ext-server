/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Server

/**
 * @class Ext.server.Server
 *
 * {Ext_server_Server:doc-contents}
 */
Ext.define('Ext.server.Server', {

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

    // }}}
    // {{{ requires

    requires: [
        'Ext.server.Connect',
        'Ext.server.Router',
        'Ext.server.config.Application',
        'Ext.server.config.Database',
        'Ext.server.config.Route',
        'Ext.server.config.Session',
        'Ext.server.config.Smtp'
    ],

    // }}}
    // {{{ alias

    alternateClassName: 'Ext.Server',

    // }}}
    // {{{ $port

    $port: 8124,

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var me = this,
            cluster, init;

        config = config || {};

        config.ws   = config.ws || true;
        config.wss  = config.wss || (config.ssl ? true : false)

        Ext.apply(this, {
            config: {}
        });

        init = function() {

            var app, port, middleware, onLaunch, debug, env;

            middleware  = [
                'Favicon',
                //'BodyParser',
                'Compress',
                'CookieParser',
                //'Multipart',
                'Session'
            ];
            app         = Ext.create('Ext.server.Connect');
            port        = config.port || this.$port;
            onLaunch    = config.onLaunch || Ext.emptyFn;

//            debug       = Ext.$dependencies.debug('connect:dispatcher');
//            env         = process.env.NODE_ENV || 'development';

            // init configs
            [
                { key: 'app',   name: 'Application' },
                { key: 'db',    name: 'Database' },
                { key: 'route', name: 'Route' },
                { key: 'smtp',  name: 'Smtp' }

            ].forEach(function(item) {

                var key, name;

                key  = item.key;
                name = item.name;
                config[key] = config[key] || {};

                me.config[key] = Ext.create(
                    Ext.String.format('Ext.server.config.{0}', name),
                    config[key]
                );

            });

            // Router create.
            this.router = Ext.create('Ext.server.Router');

            app.use(Ext.server.Connect.bodyParser());

            // vhost setting
            app.use(function(req, res, next) {

                var host, vhost, paths, stack, prefix;

                host    = req.headers['x-forwarded-host'] || req.headers['host'];
                vhost   = me.config.app.vhost;
                paths   = me.config.app.$paths;
                stack   = [];
                prefix  = '';

                if(Ext.isFunction(vhost)) {

                    var ret = vhost(host.split(':')[0]);

                    if(Ext.isString(ret)) {
                        prefix = ret + '/';
                    }

                } else {
                    if(vhost.length > 0) {
                        Ext.iterate(vhost, function(o) {

                            var hostname = o.hostname;
                            var path = o.path;
                            var regexp = new RegExp('^' + hostname.replace(/[*]/g, '(.*?)') + '$', 'i');

                            if(regexp.test(host.split(':')[0])) {
                                prefix = path + '/';
                                return false;
                            }

                        });
                    }
                };

                Ext.iterate(paths, function(key, value) {

                    var path = prefix + value;

                    stack.push(function() {
                        require('fs').realpath(path, function(err, realpath) {
                            me.config.app.paths[key] = realpath;
                            if(stack.length > 0) {
                                stack.shift()();
                            } else {
                                next();
                            }
                        });
                    });
                });

                // run
                stack.shift()();

            });

            // setting headers
            app.use(function(req, res, next) {

                if(req.method === 'GET') {
                    // Ext Server version
                    res.setHeader(
                        'X-Powered-By',
                        Ext.String.format('Ext Server {0}', Ext.getVersion('server').toString())
                    );
                }

                next();
            });

            // register middlewares
            middleware.forEach(function(name) {

                var f;

                f = Ext.create(
                    Ext.String.format('Ext.server.{0}', name)
                ).init(config);

                if(f) {
                    app.use(f);
                }

            });

            // setting router
            app.use(function(req, res, next) {

                // routing
                me.router.attach.call(
                    me.router,
                    {
                        req     : req,
                        res     : res,
                        name    : config.name,
                        config  : me.config
                    },
                    next
                );

            });

            var http = require('http'),
                https = require('https');

            var httpServer = http.createServer(app);
                httpServer.listen(port);

            if(config.ws) {
                Ext.io.listen(httpServer, Ext.isSimpleObject(config.ws) ? config.ws : {});
            }

            if(config.ssl) {

                var httpsServer = https.createServer({
                    key: config.ssl.key,
                    cert: config.ssl.cert
                }, app);
                httpsServer.listen(config.ssl.port || 443);

                if(config.wss) {
                    Ext.io.listen(httpServer, Ext.isSimpleObject(config.wss) ? config.wss : {});
                }
            }

            onLaunch();

        };

        config = config || {};

        if(!config.cluster) {
            init.call(me);
            return;
        }

        cluster = require('cluster');

        if(!Ext.isSimpleObject(config.cluster)) {
            config.cluster = {};
            Ext.apply(config.cluster, {
                cpu: true
            });
        }

        if(config.cluster.cpu === true) {
            config.cluster.cpu = require('os').cpus().length;
        }

        if(cluster.isMaster) {

            for(var i = 0; i < config.cluster.cpu; i++) {
                cluster.fork();
            }

            cluster.on('death', function(worker) {
                console.log('worker ' + worker.pid + ' died');
            });

        } else {
            init.call(me);
        }

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
