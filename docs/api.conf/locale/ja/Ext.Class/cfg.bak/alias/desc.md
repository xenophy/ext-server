クラス名の短いエイリアス一覧を設定します。 ウィジェットのためにxtypeを設定することに最も役立ちます。

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

"widget"におけるxtypeの他に、"feature"のftypeや"plugin"のptypeなどもあります。
