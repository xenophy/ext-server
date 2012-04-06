/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Connect

/**
 * @class Ext.server.Connect
 *
 * {Ext_server_Connect:doc-contents}
 */
Ext.define('Ext.server.Connect', {

    // {{{ constructor

    constructor: function() {

        return Ext.apply(Ext.$dependencies.connect(), {

            // {{{ request

            request: function(path) {

                return Ext.create('Ext.server.Request', {
                    app: this,
                    path: path
                });

            },

            // }}}
            // {{{ static

            static: Ext.$dependencies.connect.static,

            // }}}

        });

    },

    // }}}
    // {{{ statics

    statics: {

        static:  Ext.$dependencies.connect.static

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