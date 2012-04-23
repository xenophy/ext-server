/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.config.Application

/**
 * @class Ext.app.config.Application
 *
 * {Ext_app_config_Application:doc-contents}
 */
Ext.define('Ext.app.config.Application', {

    // {{{ extend

    extend: 'Ext.app.config.Config',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};
        config.files = config.files || {};
        config.paths = config.paths || {};
        config.dirs  = config.dirs || {};

        Ext.apply(this, {
            dirs: {
                special: config.dirs.special || '/(-_-)v/'
            },
            files: {
                global: config.files.global || 'global.action.js',
                extent: config.files.extent || 'extent.action.js'
            },
            paths: {
                actions     : config.actions || './actions',
                modules     : config.modules || './modules'
            },
            template_exts: ['html', 'htm']
        });

        Ext.applyIf(this, {
            actionName: 'index',
            directoryIndex: ['index.html', 'index.htm']
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
