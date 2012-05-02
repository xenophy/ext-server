require('ext-server').application();


Ext.application({
    name    : 'App',
    port    : 8124,
    cluster : false,
    onLaunch: Ext.emptyFn
    app     : {
    }
});
