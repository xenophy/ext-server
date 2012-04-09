/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Server

/**
 * @class Ext.Server
 *
 * {Ext_Server:doc-contents}
 *
 * @singleton
 */
Ext.define('Ext.server.Server', {

    // {{{ requires

    requires: [
        'Ext.server.Connect'
    ],

    // }}}
    // {{{ alias

    alternateClassName: 'Ext.Server',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ $port

    $port: 8124,

    // }}}
    // {{{ create

    create: function(config) {

        var cluster, init;

        init = function() {

            var app, port, public, path, onLaunch;

            middleware  = [
                'BodyParser',
                'Compress',
                'CookieParser',
                'Multipart',
                'Session'
                //'Static'
            ];
            app         = Ext.create('Ext.server.Connect');
            port        = config.port || Ext.server.Server.$port;
            onLaunch    = config.onLaunch || Ext.emptyFn;

            // setting headers
            app.use(function(req, res, next) {

                // Ext Server version
                res.setHeader(
                    'X-Powered-By',
                    Ext.String.format('Ext Server {0}', Ext.getVersion('server').toString())
                );

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
                var router = Ext.create('Ext.server.Router', config);
                router.dispatch.call(router, req, res, next);
            });


            // TODO: HTTP/HTTPSの設定




            // start server!
            app.listen(port, function() {
                onLaunch();
            });

        };

        config = config || {};

        if(!config.cluster) {
            init();
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
            init();
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
