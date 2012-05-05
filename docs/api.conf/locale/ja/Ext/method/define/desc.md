クラスまたはオーバーライドを定義します。基本的なクラスは次のように定義します。

    Ext.define('My.awesome.Class', {
        someProperty: 'something',
        someMethod: function() {
             alert(s + this.someProperty);
        }
        ...
    });
    
    var obj = new My.awesome.Class();
    
    obj.someMethod('Say '); // alerts 'Say something'

オーバーライドを定義するには、`override`プロパティを指定します。
overrideの中身は、拡張あるいは変更するクラスを指定します。
これにより簡単な設定で、デフォルトのプロパティ値や
メソッドを拡張／入替をすることができます。
またクラスの静的メソッドも拡張できます。

overrideの1つの用途は大きなクラスを管理しやすい部品に分解することです。

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

overrideの他の用途は独立して使用されるクラスのオプションのパーツを提供することです。
この場合は、クラスはまったくオーバーライドされたことに気づかないことさえあります。

     Ext.define('My.ux.CoolTip', {
         override: 'Ext.tip.ToolTip',

         constructor: function(config) {
             this.callParent(arguments); // calls Ext.tip.ToolTip's constructor
             //...
         }
     });

上記のオーバーライドは普通にrequireすることができます。

     Ext.define('My.app.App', {
         requires: [
             'My.ux.CoolTip'
         ]
     });

静的メソッドもオーバーライドできます。

     Ext.define('My.app.BarMod', {
         override: 'Ext.foo.Bar',

         statics: {
             method: function(x) {
                 return this.callParent([x * 2]); // call Ext.foo.Bar.method
             }
         }
     });

重要:
オーバーライドはrequireされたときに初めてビルドにインクルードされます。
そうでなければ、オーバーライドは対象クラスのようにインクルードされません。
