/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.config.Database

/**
 * @class Ext.app.config.Database
 *
 * {Ext_app_config_Database:doc-contents}
 */
Ext.define('Ext.app.config.Database', {

    // {{{ extend

    extend: 'Ext.app.config.Config',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        Ext.apply(this, config);
        Ext.applyIf(this, {
            dbClasses: {
                'mysql'     : 'Ext.database.MySQL',
                'mongo'     : 'Ext.database.MongoDB',
                'mongodb'   : 'Ext.database.MongoDB'
            }
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
