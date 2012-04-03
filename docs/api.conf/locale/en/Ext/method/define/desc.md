Defines a class or override. A basic class is defined like this:

    Ext.define('My.awesome.Class', {
        someProperty: 'something',
        someMethod: function() {
             alert(s + this.someProperty);
        }
        ...
    });
    
    var obj = new My.awesome.Class();
    
    obj.someMethod('Say '); // alerts 'Say something'

To defines an override, include the `override` property. The content of an
override is aggregated with the specified class in order to extend or modify
that class. This can be as simple as setting default property values or it can
extend and/or replace methods. This can also extend the statics of the class.

One use for an override is to break a large class into manageable pieces.

     // File: /src/app/Panel.js

     Ext.define('My.app.Panel', {
         extend: 'Ext.panel.Panel',
         requires: [
             'My.app.PanelPart2',
             'My.app.PanelPart3'
         ]

         constructor: function(config) {
             this.callParent(arguments); // calls Ext.panel.Panel's constructor
             //...
         },

         statics: {
             method: function() {
                 return 'abc';
             }
         }
     });

     // File: /src/app/PanelPart2.js
     Ext.define('My.app.PanelPart2', {
         override: 'My.app.Panel',

         constructor: function(config) {
             this.callParent(arguments); // calls My.app.Panel's constructor
             //...
         }
     });

Another use of overrides is to provide optional parts of classes that can be
independently required. In this case, the class may even be unaware of the
override altogether.

     Ext.define('My.ux.CoolTip', {
         override: 'Ext.tip.ToolTip',

         constructor: function(config) {
             this.callParent(arguments); // calls Ext.tip.ToolTip's constructor
             //...
         }
     });

The above override can now be required as normal.

     Ext.define('My.app.App', {
         requires: [
             'My.ux.CoolTip'
         ]
     });

Overrides can also contain statics:

     Ext.define('My.app.BarMod', {
         override: 'Ext.foo.Bar',

         statics: {
             method: function(x) {
                 return this.callParent([x * 2]); // call Ext.foo.Bar.method
             }
         }
     });

IMPORTANT: An override is only included in a build if the class it overrides is
required. Otherwise, the override, like the target class, is not included.

