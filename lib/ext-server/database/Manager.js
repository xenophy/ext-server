/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.database.Manager

/**
 * @class Ext.database.Manager
 *
 * {Ext_database_Manager:doc-contents}
 */
Ext.define('Ext.database.Manager', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ connections

    connections: {},

    // }}}
    // {{{ get

    get: function(config) {

        var key = Ext.JSON.encode(config);

        return this.connections[key];
    },

    // }}}
    // {{{ set

    set: function(config, conn) {

        var key = Ext.JSON.encode(config);

        this.connections[key] = conn;
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
