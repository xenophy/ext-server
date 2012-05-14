/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ index.js

module.exports = {

    uses: [
        'DBMySQL'
    ],

    execute: function(done) {

        var me = this;

        me.DBMySQL.func(function(fields) {
            me.DBMySQL.end();
            me.set('users', fields);
            done();
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
