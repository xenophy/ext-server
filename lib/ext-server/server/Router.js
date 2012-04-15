/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Router

/**
 * @class Ext.server.Router
 *
 * {Ext_server_Router:doc-contents}
 */
Ext.define('Ext.server.Router', {

    // {{{ requires

    requires: [
        'Ext.server.controller.Auto',
        'Ext.server.controller.Rest'
    ],

    // }}}
    // {{{ extend

    extend: 'Ext.app.Router',

    // }}}
    // {{{ attach

    attach: function(config, next) {

        config = config || {};

        var req = config.req;

        // restful url?
        this.isRest(req.url, function(rest) {

            var cls;

            if(rest) {

                // RestController
                cls = Ext.create('Ext.server.controller.Rest');

            } else {

                // AutoController
                cls = Ext.create('Ext.server.controller.Auto');

            }

            cls.dispatch(config, next);
        });

    },

    // }}}
    // {{{ isRest

    isRest: function(path, next) {

        var ret;

        // ルーティングテーブルを確認

        // マッチするコントローラーが存在するか確認

        ret = false;


        next.call(this, ret);
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
