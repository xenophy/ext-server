継承する親クラスを設定します。 使用例:

    Ext.define('Person', {
        say: function(text) { alert(text); }
    });

    Ext.define('Developer', {
        extend: 'Person',
        say: function(text) { this.callParent(["print "+text]); }
    });
