静的メソッドのリストを設定します。 使用例:

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
