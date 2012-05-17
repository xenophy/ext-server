/**
 * Ext JS / Sencha Touch Perfectday #008
 * Using Ext Direct with Sencha Touch 2
 * Sample Application
 * File:    app.js
 * Auther:  sunvisor
 * Date:    2012-03-10
 * Copyright (C) Sunvisor 2012 All right reserved.
**/
Ext.require('Ext.direct.*');

Ext.onReady(function() {
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});

Ext.application({
    name: 'AM',

    controllers: ['Users'],
    models: ['User'],
    stores: ['Users'],
    views: ['Main', 'List', 'Edit'],

    launch: function() {
        Ext.create('AM.view.Main');
    }
});
