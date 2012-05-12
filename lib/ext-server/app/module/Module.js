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
            useTable: null,
            autoConnect: true
        });

        // スーパークラスメソッドコール
        this.callParent(arguments);
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

    beginTrans: function(next) {

        if(this.conn.beginTrans) {
            this.conn.beginTrans(next);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'beginTrans' is not support driver");
        }

    },

    // }}}
    // {{{ commit

    commit: function(next) {

        if(this.conn.commit) {
            this.conn.commit(next);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'commit' is not support driver");
        }

    },

    // }}}
    // {{{ createCollection

    createCollection: function(name, next) {

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

    createDatabase: function(dbname, fn) {

        if(this.conn.createDatabase) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.createDatabase.call(this, dbname, fn);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'createDatabase' is not support driver");
        }

    },

    // }}}
    // {{{ delete

    delete: function(o, fn) {

        var me = this;

        if(me.conn.delete) {
            me.conn.delete(me.useTable, o, fn);
        } else {
            // このドライバーでは実装されていないことを通知
            throw new error("'delete' is not support driver");
        }
    },

    // }}}
    // {{{ dropCollection

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

    find: function(o, next) {

        if(this.conn.find) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.find.call(this, this.useTable, arguments);
            } else {
                this.conn.find(this.useTable, o, next);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'find' is not support driver");
        }

    },

    // }}}
    // {{{ findAndModify

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

    remove: function(o, fn) {

        if(this.conn.remove) {

            if(this.conn.adapter === 'mongodb') {
                return this.conn.remove.call(this, this.useTable, arguments);
            }

        } else {
            // このドライバーでは実装されていないことを通知
            throw new Error("'remove' is not support driver");
        }

    },

    // }}}
    // {{{ rollback

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
