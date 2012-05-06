
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            nodeType: 'async',
            expanded: true,
            text: 'Ext Server',
            draggable: false,
            id: 'root'
        },
        proxy: {
            type: 'direct',
            directFn: Users.getNode,
            paramOrder: ['node']
        }
    });

    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        height: 350,
        width: 600,
        title: 'Tree Sample',
        renderTo: Ext.getBody()
    });
});

