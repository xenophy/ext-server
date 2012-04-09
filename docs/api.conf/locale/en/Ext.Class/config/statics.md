List of static methods for this class. For example:

    Ext.define('Computer', {
         statics: {
             factory: function(brand) {
                 // 'this' in static methods refer to the class itself
                 return new this(brand);
             }
         },

         constructor: function() { ... }
    });

    var dellComputer = Computer.factory('Dell');
