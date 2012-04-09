The parent class that this class extends. For example:

    Ext.define('Person', {
        say: function(text) { alert(text); }
    });

    Ext.define('Developer', {
        extend: 'Person',
        say: function(text) { this.callParent(["print "+text]); }
    });
