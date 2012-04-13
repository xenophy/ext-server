Call the "parent" method of the current method. That is the method previously
overridden by derivation or by an override (see
<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" id="ext-gen1602">Ext.define</a>
).

     Ext.define('My.Base', {
         constructor: function(x) {
             this.x = x;
         },

         statics: {
             method: function(x) {
                 return x;
             }
         }
     });

     Ext.define('My.Derived', {
         extend: 'My.Base',

         constructor: function() {
             this.callParent([21]);
         }
     });

     var obj = new My.Derived();

     alert(obj.x);  // alerts 21

This can be used with an override as follows:

     Ext.define('My.DerivedOverride', {
         override: 'My.Derived',

         constructor: function(x) {
             this.callParent([x*2]); // calls original My.Derived constructor
         }
     });

     var obj = new My.Derived();

     alert(obj.x);  // now alerts 42

This also works with static methods.

     Ext.define('My.Derived2', {
         extend: 'My.Base',

         statics: {
             method: function(x) {
                 return this.callParent([x*2]); // calls My.Base.method
             }
         }
     });

     alert(My.Base.method(10);     // alerts 10
     alert(My.Derived2.method(10); // alerts 20

Lastly, it also works with overridden static methods.

     Ext.define('My.Derived2Override', {
         override: 'My.Derived2',

         statics: {
             method: function(x) {
                 return this.callParent([x*2]); // calls My.Derived2.method
             }
         }
     });

     alert(My.Derived2.method(10); // now alerts 40


