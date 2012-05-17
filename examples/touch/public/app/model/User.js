/**
 * Ext JS / Sencha Touch Perfectday #008
 * Using Ext Direct with Sencha Touch 2
 * User Model
 * File:    User.js
 * Auther:  sunvisor
 * Date:    2012-03-10
 * Copyright (C) Sunvisor 2012 All right reserved.
 **/
Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    config:{
        fields: ['id', 'name', 'email', 'bio']
    }
});
