/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.config.Application

/**
 * @class Ext.server.config.Application
 *
 * {Ext_server_config_Application:doc-contents}
 */
Ext.define('Ext.server.config.Application', {

    // {{{ extend

    extend: 'Ext.app.config.Application',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var me, node;

        me = this;

        this.callParent(arguments);

        node = {
            fs: require('fs')
        };
        config = config || {};
        config.paths = config.paths || {};

        Ext.apply(this.paths, {
            public      : config.public || './public',
            templates   : config.templates || './templates'
        });

        Ext.iterate(this.paths, function(item) {
            try {
                me.paths[item] = node.fs.realpathSync(me.paths[item]);
            } catch(e) {};
        });

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
