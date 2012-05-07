現在のメソッドの"親の"メソッドをコールします。
派生やオーバーライドによって上書きされる前の状態のメソッドをコールします。
(<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" >Ext.define</a>
を参照)

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

これは次のようにオーバーライドできます。

     Ext.define('My.DerivedOverride', {
         override: 'My.Derived',

         constructor: function(x) {
             this.callParent([x*2]); // オリジナルのMy.Derivedのconstructorを呼び出す
         }
     });

     var obj = new My.Derived();

     alert(obj.x);  // now alerts 42

また、静的メソッドでも動作します。

     Ext.define('My.Derived2', {
         extend: 'My.Base',

         statics: {
             method: function(x) {
                 return this.callParent([x*2]); // My.Base.methodを呼び出す
             }
         }
     });

     alert(My.Base.method(10);     // alerts 10
     alert(My.Derived2.method(10); // alerts 20

静的メソッドをオーバーライドしても動作します。

     Ext.define('My.Derived2Override', {
         override: 'My.Derived2',

         statics: {
             method: function(x) {
                 return this.callParent([x*2]); // My.Derived2.methodを呼び出す
             }
         }
     });

     alert(My.Derived2.method(10); // now alerts 40


