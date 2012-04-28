/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.database.Database

/**
 * @class Ext.database.Database
 *
 * {Ext_database_Database:doc-contents}
 */
Ext.define('Ext.database.Database', {

    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, config);
        Ext.applyIf(this, {
        });

        this.callParent(arguments);

    },

    // }}}
    // {{{ connect

    connect: function(next) {
        next();
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
