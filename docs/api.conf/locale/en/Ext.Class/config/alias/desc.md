List of short aliases for class names.  Most useful for defining xtypes for widgets:

    Ext.define('MyApp.CoolPanel', {
        extend: 'Ext.panel.Panel',
        alias: ['widget.coolpanel'],
        title: 'Yeah!'
    });

    // Using Ext.create
    Ext.create('widget.coolpanel');

    // Using the shorthand for defining widgets by xtype
    Ext.widget('panel', {
        items: [
            {xtype: 'coolpanel', html: 'Foo'},
            {xtype: 'coolpanel', html: 'Bar'}
        ]
    });

Besides "widget" for xtype there are alias namespaces like "feature" for ftype and "plugin" for ptype.
