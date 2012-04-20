インスタンス化されたオブジェクトの参照を取得します。


<a href="#!/api/Ext.Base-property-self" rel="Ext.Base-property-self" class="docClass" id="ext-gen1639">self</a>
とは違い、 `this.statics()`のスコープは独立しています。 実行時の`this`に関係なく、いつも呼び出されたクラスが返却されます。

    Ext.define('My.Cat', {
        statics: {
            totalCreated: 0,
            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
        },

        constructor: function() {
            var statics = this.statics();

            alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
                                            // equivalent to: My.Cat.speciesName

            alert(this.self.speciesName);   // dependent on 'this'

            statics.totalCreated++;
        },

        clone: function() {
            var cloned = new this.self;                      // dependent on 'this'

            cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName

            return cloned;
        }
    });


    Ext.define('My.SnowLeopard', {
        extend: 'My.Cat',

        statics: {
            speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
        },

        constructor: function() {
            this.callParent();
        }
    });

    var cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'

    var snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'

    var clone = snowLeopard.clone();
    alert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'
    alert(clone.groupName);                 // alerts 'Cat'

    alert(My.Cat.totalCreated);             // alerts 3


