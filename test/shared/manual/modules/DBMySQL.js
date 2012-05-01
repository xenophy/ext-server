/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ DBMySQL.js

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

    func: function(done) {
        this.find({}, function(err, fields) {
            done(fields);
        });
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
