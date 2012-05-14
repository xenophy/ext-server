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

        /**
         * @cfg {String} connName
         * {Ext_app_module_Module:cfg-connName:desc}
         */
        connName: 'default'

    },


    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, config);
        Ext.applyIf(this, {
            /**
             * @cfg {String} useTable
             * {Ext_app_module_Module:cfg-useTable:desc}
             */
            useTable: null,

            /**
             * @cfg {String} autoConnect
             * {Ext_app_module_Module:cfg-autoConnect:desc}
             */
            autoConnect: true
        });

        // スーパークラスメソッドコール
        this.callParent(arguments);
    },

    // }}}
    // {{{ init

    /**
     * @private
     * @param config
     * @param next
     */
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

            // auto connect
            if(this.autoConnect) {
                this.conn.connect(next);
            } else {
                next();
            }

        } else {
            next();
        }

    },

    // }}}
    // {{{ beginTrans

    /**
     * {Ext_app_module_Module:method-beginTrans:desc}
     * 
     * @param fn {Ext_app_module_Module:method-beginTrans:param_fn}
     */
    beginTrans: function(fn) {

        if(this.conn.beginTrans) {
            this.conn.beginTrans(fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'beginTrans' is not support driver");
        }

    },

    // }}}
    // {{{ commit

    /**
     * {Ext_app_module_Module:method-commit:desc}
     * 
     * @param fn {Ext_app_module_Module:method-commit:param_fn}
     */
    commit: function(fn) {

        if(this.conn.commit) {
            this.conn.commit(fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'commit' is not support driver");
        }

    },

    // }}}
    // {{{ createCollection

    /**
     * {Ext_app_module_Module:method-createCollection:desc}
     * 
     * @param name {Ext_app_module_Module:method-createCollection:param_name}
     * @param fn {Ext_app_module_Module:method-createCollection:param_fn}
     */
    createCollection: function(name, fn) {

        if(this.conn.createCollection) {

            if(this.conn.adapter === 'mongodb') {
                return me.conn.createCollection.call(this, name, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'createCollection' is not support driver");
        }

    },

    // }}}
    // {{{ createDatabase

    /**
     * {Ext_app_module_Module:method-createDatabase:desc}
     * 
     * @param name {Ext_app_module_Module:method-createDatabase:param_name}
     * @param fn {Ext_app_module_Module:method-createDatabase:param_fn}
     */
    createDatabase: function(name, fn) {

        if(this.conn.createDatabase) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.createDatabase.call(this, name, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'createDatabase' is not support driver");
        }

    },


    // }}}
    // {{{ dropCollection

    /**
     * {Ext_app_module_Module:method-dropCollection:desc}
     * 
     * @param name {Ext_app_module_Module:method-dropCollection:param_name}
     * @param fn {Ext_app_module_Module:method-dropCollection:param_fn}
     */
    dropCollection: function(name, fn) {

        if(this.conn.dropCollection) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.dropCollection.call(this, name, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'dropCollection' is not support driver");
        }
    },

    // }}}
    // {{{ dropDatabase

    /**
     * {Ext_app_module_Module:method-dropDatabase:desc}
     * 
     * @param name {Ext_app_module_Module:method-dropDatabase:param_name}
     * @param fn {Ext_app_module_Module:method-dropDatabase:param_fn}
     */
    dropDatabase: function(dbname, fn) {

        if(this.conn.dropDatabase) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.dropDatabase.call(this, dbname, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'createDatabase' is not support driver");
        }

    },

    // }}}
    // {{{ find

    /**
     * {Ext_app_module_Module:method-find:desc}
     * 
     * @param o {Ext_app_module_Module:method-find:param_o}
     * @param fn {Ext_app_module_Module:method-find:param_fn}
     */
    find: function(o, fn) {

        if(this.conn.find) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.find.call(this, this.useTable, arguments);
            } else {
                this.conn.find(this.useTable, o, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'find' is not support driver");
        }

    },

    // }}}
    // {{{ findAndModify

    /**
     * {Ext_app_module_Module:method-findAndModify:desc}
     * 
     * @param o {Ext_app_module_Module:method-findAndModify:param_o}
     * @param fn {Ext_app_module_Module:method-findAndModify:param_fn}
     */
    findAndModify: function(o, fn) {

        if(this.conn.findAndModify) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.findAndModify.call(this, this.useTable, arguments);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'findAndModify' is not support driver");
        }

    },

    // }}}
    // {{{ insert

    /**
     * {Ext_app_module_Module:method-insert:desc}
     * 
     * @param o {Ext_app_module_Module:method-insert:param_o}
     * @param fn {Ext_app_module_Module:method-insert:param_fn}
     */
    insert: function(o, fn) {

        if(this.conn.insert) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.insert.call(this, this.useTable, arguments);
            } else {
                this.conn.insert(this.useTable, o, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'insert' is not support driver");
        }

    },

    // }}}
    // {{{ query

    /**
     * {Ext_app_module_Module:method-query:desc}
     * 
     * @param sql {Ext_app_module_Module:method-query:param_sql}
     * @param fn {Ext_app_module_Module:method-query:param_fn}
     */
    query: function(sql, fn) {

        if(this.conn.query) {
            this.conn.query(sql, fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'query' is not support driver");
        }

    },

    // }}}
    // {{{ remove

    /**
     * {Ext_app_module_Module:method-remove:desc}
     * 
     * @param o {Ext_app_module_Module:method-remove:param_o}
     * @param fn {Ext_app_module_Module:method-remove:param_fn}
     */
    remove: function(o, fn) {
        var me = this;

        if(me.conn.remove) {
            if(me.conn.adapter === 'mongodb') {
                return me.conn.remove.call(me, me.useTable, arguments);
            } else {
                me.conn.remove(me.useTable, o, fn);
            }

        } else {

            // このドライバーでは実装されていないことを通知
            throw new Error("'remove' is not support driver");
        }

    },

    // }}}
    // {{{ rollback

    /**
     * {Ext_app_module_Module:method-rollback:desc}
     * 
     * @param fn {Ext_app_module_Module:method-rollback:param_fn}
     */
    rollback: function(fn) {

        if(this.conn.rollback) {
            this.conn.rollback(fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'rollback' is not support driver");
        }

    },

    // }}}
    // {{{ save

    /**
     * {Ext_app_module_Module:method-save:desc}
     * 
     * @param o {Ext_app_module_Module:method-save:param_o}
     * @param fn {Ext_app_module_Module:method-save:param_fn}
     */
    save: function(o, fn) {

        if(this.conn.save) {
            if(this.conn.adapter === 'mongodb') {
                return this.conn.save.call(this, this.useTable, arguments);
            }
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'save' is not support driver");
        }

    },

    // }}}
    // {{{ set

    /**
     * {Ext_app_module_Module:method-set:desc}
     * 
     * @param o {Ext_app_module_Module:method-set:param_o}
     * @param fn {Ext_app_module_Module:method-set:param_fn}
     */
    set: function(o, fn) {

        if(this.conn.set) {
            this.conn.set(this.useTable, o, fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'set' is not support driver");
        }

    },

    // }}}
    // {{{ update

    /**
     * {Ext_app_module_Module:method-update:desc}
     * 
     * @param o {Ext_app_module_Module:method-update:param_o}
     * @param fn {Ext_app_module_Module:method-update:param_fn}
     */
    update: function(o, fn) {

        if(this.conn.update) {
            if(this.conn.adapter === 'mongodb') {
                return this.conn.update.call(this, this.useTable, arguments);
            } else {
                this.conn.update(this.useTable, o, fn);
            }
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'update' is not support driver");
        }

    },

    // }}}
    // {{{ end

    /**
     * {Ext_app_module_Module:method-end:desc}
     *
     * @param o {Ext_app_module_Module:method-end:param_o}
     * @param fn {Ext_app_module_Module:method-end:param_fn}
     */
    end: function(o, fn) {

        if(this.conn.end) {

            if(this.conn.adapter === 'mysql') {
                this.conn.end();
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'end' is not support driver");
        }

    },

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
