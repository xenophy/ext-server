現在のクラス定義へアクセスするオブジェクトを取得します。
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass" >statics</a>,
とは違い、`this.self`スコープに依存し、動的な継承に利用されます。
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass" >statics</a>,
を参照して違いを確認してください。

    Ext.define('My.Cat', {
        statics: {
            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
        },

        constructor: function() {
            alert(this.self.speciesName); // dependent on 'this'
        },

        clone: function() {
            return new this.self();
        }
    });


    Ext.define('My.SnowLeopard', {
        extend: 'My.Cat',
        statics: {
            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
        }
    });

    var cat = new My.Cat();                     // alerts 'Cat'
    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'

    var clone = snowLeopard.clone();
    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'

