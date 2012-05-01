/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.module.Module

/**
 * @class Ext.app.module.Module
 *
 * {Ext_app_module_Module:doc-contents}
 */
Ext.define('Ext.app.module.Module', {

    // {{{ config

    config: {

        connName: 'default'

    },

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, config);
        Ext.applyIf(this, {
            useTable: false
        });
    },

    // }}}
    // {{{ init

    init: function(config, next) {

        if(this.useTable) {

            var dbconf, classes;

            classes = config.config.db.dbClasses;
            dbconf  = config.config.db[this.getConnName()];

            if(!dbconf) {
                // TODO: ERROR unknown connection error
                next();
                return;
            }

            // create database class
            var cls;

            cls = classes[dbconf.adapter.toLowerCase()];
            this.conn = Ext.create(cls, dbconf);


            /*
        // 自動接続
        if(conf.autoConnect === true) {

            me.conn.connect(fn);

        } else {

            fn();

        }
             */




            next();


        } else {
            next();
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
