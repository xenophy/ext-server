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
        this.errors     = config.errors || {};

        Ext.apply(this.paths, {
            public      : config.paths.public || './public',
            templates   : config.paths.templates || './templates'
        });

        Ext.iterate(this.paths, function(item) {
            try {
                me.paths[item] = node.fs.realpathSync(me.paths[item]);
            } catch(e) {};
        });

        Ext.applyIf(this.errors, {
            not_found: node.fs.readFileSync(process.ExtEnv.resourcedir + '/error/HTTP_NOT_FOUND.html').toString(),
            internal_server_error: node.fs.readFileSync(process.ExtEnv.resourcedir + '/error/HTTP_INTERNAL_SERVER_ERROR.html').toString()
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
