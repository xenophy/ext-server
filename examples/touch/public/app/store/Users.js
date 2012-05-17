/**
 * Ext JS / Sencha Touch Perfectday #008
 * Using Ext Direct with Sencha Touch 2
 * Users Store
 * File:    Users.js
 * Auther:  sunvisor
 * Date:    2012-03-10
 * Copyright (C) Sunvisor 2012 All right reserved.
 **/
Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    requires: [ 'Ext.data.proxy.Direct'],

    config: {
        model: 'AM.model.User',
        autoLoad: false,

        proxy: {
            type: 'direct',
            api: {
                create: 'Users.addRec',
                read: 'Users.getAll',
                update: 'Users.updateRec',
                destroy: 'Users.removeRec'
            },
            reader: {
                type: 'json',
                rootProperty: 'data',
                successProperty: 'success'
            }
        }
    }
});
