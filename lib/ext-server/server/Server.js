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

            middleware  = ['BodyParser', 'Compress', 'Static'];
            app         = Ext.create('Ext.server.Connect');
            port        = config.port || Ext.server.Server.$port;
            onLaunch    = config.onLaunch || Ext.emptyFn;

            // ミドルウェア登録
            middleware.forEach(function(name) {

                var f;

                f = Ext.create(
                    Ext.String.format('Ext.server.{0}', name)
                ).init(config);

                if(f) {
                    app.use(f);
                }

            });

            // Listen開始
            app.listen(port, function() {
                onLaunch();
            });

        };

        config = config || {};

        if(config.cluster === false) {
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

}, function() {

    Ext.apply(Ext, {

        // {{{ service

        service: Ext.server.Server.create

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
