/**
 * Usersストア
 * File:    Users.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/

Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: false,
    
    proxy: {
        type: 'direct',
//        directFn: 'Users.getAll',
        api: {
            create: 'Users.addRec',
            read: 'Users.getAll',
            update: 'Users.updateRec',
            destroy: 'Users.removeRec'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});
