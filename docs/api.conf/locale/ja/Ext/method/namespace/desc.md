Creates namespaces to be used for scoping variables and classes so that they are not global.
Specifying the last node of a namespace implicitly creates all other nodes. Usage:

    Ext.namespace('Company', 'Company.data');

    // equivalent and preferable to the above syntax
    Ext.ns('Company.data');

    Company.Widget = function() { ... };

    Company.data.CustomStore = function(config) { ... };

