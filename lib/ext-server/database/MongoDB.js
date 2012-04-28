/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.database.MongoDB

/**
 * @class Ext.database.MongoDB
 *
 * {Ext_database_MongoDB:doc-contents}
 */
Ext.define('Ext.database.MongoDB', {

    // {{{ extend

    extend: 'Ext.database.Database',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

    },

    // }}}
    // {{{ connect

    connect: function(fn) {

        var me = this,
        driver = me.driver,
        mongodb = me.driver.mongodb,
        server = me.driver.server,
        database = me.database;

        new mongodb.Db(database, server, {}).open(function (err, client) {

            if(err) {
                throw err;
            }

            driver.client = client;

            fn();

        });

    },

    // }}}
    // {{{ find

    find: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        return collection.find.apply(collection, args);
    },

    // }}}
    // {{{ insert

    insert: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        return collection.insert.apply(collection, args);
    },

    // }}}
    // {{{ update

    update: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        return collection.update.apply(collection, args);
    },

    // }}}
    // {{{ findAndModify

    findAndModify: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        return collection.findAndModify.apply(collection, args);
    },

    // }}}
    // {{{ save

    save: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        // upsertを設定
        Ext.apply(args['2'], {
            upsert:true
        });

        return collection.update.apply(collection, args);
    },

    // }}}
    // {{{ remove

    remove: function(table, args) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        var collection = new mongodb.Collection(client, table);

        return collection.findAndModify(args['0'], [['_id','asc']], {}, {remove:true}, args['1']);
    },

    // }}}
    // {{{ createDatabase

    createDatabase: function(dbname, fn) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        server = driver.server;

        var db = new mongodb.Db(dbname, server, {});
        db.open(function (err, client) {

            if(err) {
                throw err;
            }

            (function(callback) {

                var QueryCommand = require('mongodb').QueryCommand,
                DbCommand = require('mongodb').DbCommand,
                Db = require('mongodb').Db;

                var command;
                var selector = {
                    'dbstats': this.collectionName
                };

                callback = callback || function(err, docs) {};

                command = new DbCommand(
                    this,
                    this.databaseName + '.' + DbCommand.SYSTEM_COMMAND_COLLECTION,
                    QueryCommand.OPTS_NO_CURSOR_TIMEOUT,
                    0,
                    -1,
                    selector,
                    null
                );

                this.executeCommand(command, function(err, result) {

                    if(err == null && result.documents[0].ok == 1) {
                        callback(null, result.documents[0].results);
                    } else  {
                        err != null ? callback(err, null) : callback(new Error(result.documents[0].errmsg), null);
                    }

                });

            }).call(db, function() {
                fn();
            });

        });

    },

    // }}}
    // {{{ dropDatabase

    dropDatabase: function(dbname, fn) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        server = driver.server;

        var db = new mongodb.Db(dbname, server, {});
        db.open(function (err, client) {

            if(err) {
                throw err;
            }

            client.dropDatabase(function(err, result) {
                fn(err, result);
            });

        });

    },

    // }}}
    // {{{ createCollection

    createCollection: function(collname, fn) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        client.createCollection(collname, fn);


    },

    // }}}
    // {{{ dropCollection

    dropCollection: function(collname, fn) {

        var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

        client.createCollection(collname, fn);
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
