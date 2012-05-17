/**
 * アプリケーション
 * File:    app.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/
Ext.require('Ext.direct.*');

Ext.onReady(function() {
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'AM',
    autoCreateViewport: true,

    requires: ['Ext.data.proxy.Direct'],
    models: ['User'],
    views: ['user.Edit', 'user.List'],

    controllers: [
        'Users'
    ],

    launch: function() {
    }
});
