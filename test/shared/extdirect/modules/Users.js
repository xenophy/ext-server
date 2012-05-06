/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Users.js

/**
 * SET NAMES utf8;
 * SET FOREIGN_KEY_CHECKS = 0;
 *
 * DROP TABLE IF EXISTS `users`;
 * CREATE TABLE `users` (
 *   `id` bigint(20) NOT NULL,
 *   `name` varchar(255) NOT NULL,
 *   PRIMARY KEY (`id`)
 * ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 *
 * BEGIN;
 * INSERT INTO `users` VALUES ('1', 'Kotsutsumi'), ('2', 'Jack'), ('3', 'Smith'), ('4', 'Bob'), ('5', 'New Person');
 * COMMIT;
 *
 * SET FOREIGN_KEY_CHECKS = 1;
 */
module.exports = {

    useTable: 'users',

    formHandler: [
        'writeForm'
    ],

    privateHandler: [
    //    'getList'
    ],

    getList: function(callback) {
        var me = this;
        me.query('SELECT * FROM users', function(err, rs) {
            callback(rs);
        });
    },

    getGridList : function(start, limit, sort, dir, query, callback) {

        var me = this;

        me.query('SELECT * FROM users', function(err, rs) {
            callback({users: rs});
        });
    },

    readForm: function(id, callback) {

        var ret = {success: false};

        this.query('SELECT * FROM users WHERE id = ' + id, function(err, rs) {
            if(rs[0]) {
                ret.success = true;
                ret.data = {
                    name: rs[0].name
                };
            }
            callback(ret);
        });
    },

    writeForm: function(v, callback) {

        var me = this;
        var ret = {success: true};

        if(v.isUpload == true) {

            var files = this.req.files;
            var src = files.photo.path;
            var dest = __dirname + '/../public/photo/' + files.photo.name;

            require('fs').rename(src, dest, function() {
                ret.isUpload = true;
                ret.imgpath = 'photo/' + files.photo.name;
                callback(ret);
            });

        } else {
            ret.msg = '[' + v.name + ']';
            callback(ret);
        }

    },

    getNode : function(id, callback) {

        var ret = [];

        if(id === 'root') {

            ret.push({id: 'sn1', text: 'サブノード1', leaf: false});
            ret.push({id: 'sn2', text: 'サブノード2', leaf: false});
            ret.push({id: 'sn3', text: 'サブノード3', leaf: false});

        } else if(id === 'sn1') {

            ret.push({id: 'ln1', text: 'リーフノード1', leaf: true});

        } else if(id === 'sn2') {

            ret.push({id: 'ln2', text: 'リーフノード2', leaf: true});

        } else if(id === 'sn3') {

            ret.push({id: 'ln3', text: 'リーフノード3', leaf: true});

        }

        callback(ret);

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
