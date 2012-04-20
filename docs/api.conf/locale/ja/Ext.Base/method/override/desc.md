プロトタイプメンバーをオーバーライドします。 オーバーライドされたメソッドは、
<a href="#!/api/Ext.Base-method-callParent" rel="Ext.Base-method-callParent" class="docClass" id="ext-gen1623">callParent</a>.
で呼び出すことができます。

    Ext.define('My.Cat', {
        constructor: function() {
            alert("I'm a cat!");
        }
    });

    My.Cat.override({
        constructor: function() {
            alert("I'm going to be a cat!");

            this.callParent(arguments);

            alert("Meeeeoooowwww");
        }
    });

    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
                              // alerts "I'm a cat!"
                              // alerts "Meeeeoooowwww"

4.1以降はこのメソッドを使うことを非推奨です。代わりに
<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" id="ext-gen1625">Ext.define</a>
を使ってください。

    Ext.define('My.CatOverride', {
        override: 'My.Cat',
        constructor: function() {
            alert("I'm going to be a cat!");

            this.callParent(arguments);

            alert("Meeeeoooowwww");
        }
    });

上記は同じ目的ですが、
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass" id="ext-gen1627">Ext.Loader</a>
で管理できます。
Loaderは、対象となるクラスを適切な順番でオーバーライドし、
ビルドプロセスにおいて、対象クラスの依存情報を元にしてどのオーバーラードが必要かを特定することができます。
