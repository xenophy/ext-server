Add / override static properties of this class.

    Ext.define('My.cool.Class', {
        ...
    });

    My.cool.Class.addStatics({
        someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'
        method1: function() { ... },    // My.cool.Class.method1 = function() { ... };
        method2: function() { ... }     // My.cool.Class.method2 = function() { ... };
    });
