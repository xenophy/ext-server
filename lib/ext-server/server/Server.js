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

    create: function(o) {

        var app, port;


        app = Ext.create('Ext.server.Connect');

        port = o.port || Ext.server.Server.$port;

        o.onLaunch = o.onLaunch || Ext.emptyFn;

        /*
        app.use(function(req, res){
            res.end();
        });
        */

        app.listen(port, function() {
            o.onLaunch();
        });

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
