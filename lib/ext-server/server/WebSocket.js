/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.WebSocket

/**
 * @class Ext.server.WebSocket
 *
 * {Ext_server_WebSocket:doc-contents}
 */
Ext.define('Ext.server.WebSocket', {

    // {{{ constructor

    constructor: function(o, config, ssl, next) {

        var me = this,
            fs = require('fs'),
            actionFile = config.app.paths.actions + '/' + config.app.files[ssl ? 'wss' : 'ws'];

        try {
            actionFile = fs.realpathSync(actionFile);
        } catch(e) {
            next();
            return;
        }

        Ext.apply(this, {
            sockets: o.sockets,
            actionFile: actionFile,
            onDisconnect: Ext.emptyFn,
            fireEvent: me.emit,
            events: []
        });

        fs.watchFile(actionFile, function (curr, prev) {
            Ext.moduleCacheClear(actionFile, curr.mtime);
            me.init.call(me, Ext.emptyFn);
        });

        me.init(next);

    },

    // }}}
    // {{{ init

    init: function(next) {

        var me = this;
        var sockets = me.sockets;

        me.actionsrc = require(me.actionFile);

        var onConnect = me.actionsrc.connect || Ext.emptyFn;
        var onDisconnect = me.actionsrc.disconnect || Ext.emptyFn;

        sockets.removeAllListeners('connection');

        me.sockets.on('connection', function(socket) {

            socket.on('disconnect', onDisconnect);

            Ext.iterate(me.actionsrc, function(key, method) {
                if(key.substr(0, 'on'.length) === 'on') {
                    socket.on(key.substr('on'.length), method);
                }
            });

//            me.events.indexOf()


        });
        sockets.on('connection', onConnect);

        next();
    },

    // }}}
    // {{{ emit

    emit: function() {

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
