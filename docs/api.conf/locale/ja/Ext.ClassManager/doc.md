Ext.ClassManagerは、すべてのクラスを管理し、フレームワーク全体に渡って実際のクラスオブジェクトに対しクラス名文字列をマッピングします。
直接ではなく、以下の便利なショートハンドを介してアクセスします。

- <a href="#/api/Ext-method-define" rel="Ext-method-define" class="docClass">Ext.define</a>
- <a href="#/api/Ext-method-create" rel="Ext-method-create" class="docClass">Ext.create</a>
- <a href="#/api/Ext-method-widget" rel="Ext-method-widget" class="docClass">Ext.widget</a>
- <a href="#/api/Ext-method-getClass" rel="Ext-method-getClass" class="docClass">Ext.getClass</a>
- <a href="#/api/Ext-method-getClassName" rel="Ext-method-getClassName" class="docClass">Ext.getClassName</a>

# 基本的な文法:

    Ext.define(className, properties);

`properties`は、クラスに適用されるプロパティを記述したオブジェクトです。
詳しくは
<a href="#!/api/Ext.ClassManager-method-create" rel="Ext.ClassManager-method-create" class="docClass">create</a>
をご覧ください。

    Ext.define('Person', {
         name: 'Unknown',

         constructor: function(name) {
             if (name) {
                 this.name = name;
             }

             return this;
         },

         eat: function(foodType) {
             alert("I'm eating: " + foodType);

             return this;
         }
    });

    var aaron = new Person("Aaron");
    aaron.eat("Sandwich"); // alert("I'm eating: Sandwich");

<a href="#!/api/Ext.Class" rel="Ext.Class" class="docClass">Ext.Class</a>
にはパワフルで拡張性のある
<a href="#!/api/Ext.Class-static-method-registerPreprocessor" rel="Ext.Class-static-method-registerPreprocessor" class="docClass">pre-processors</a>
がいくつかあります。
それらは、
インクルード(継承に限らず)、ミックスイン、コンフィグ、静的メンバなど、
クラス生成に関連する全てについて世話取りします。

# 継承:

    Ext.define('Developer', {
         extend: 'Person',

         constructor: function(name, isGeek) {
             this.isGeek = isGeek;

             // Apply a method from the parent class' prototype
             this.callParent([name]);

             return this;

         },

         code: function(language) {
             alert("I'm coding in: " + language);

             this.eat("Bugs");

             return this;
         }
    });

    var jacky = new Developer("Jacky", true);
    jacky.code("JavaScript"); // alert("I'm coding in: JavaScript");
                              // alert("I'm eating: Bugs");

スーパークラスのメソッドをコールする方法については、
<a href="#!/api/Ext.Base-method-callParent" rel="Ext.Base-method-callParent" class="docClass">Ext.Base.callParent</a>
を参照してください。

# ミックスイン:

    Ext.define('CanPlayGuitar', {
         playGuitar: function() {
            alert("F#...G...D...A");
         }
    });

    Ext.define('CanComposeSongs', {
         composeSongs: function() { ... }
    });

    Ext.define('CanSing', {
         sing: function() {
             alert("I'm on the highway to hell...")
         }
    });

    Ext.define('Musician', {
         extend: 'Person',

         mixins: {
             canPlayGuitar: 'CanPlayGuitar',
             canComposeSongs: 'CanComposeSongs',
             canSing: 'CanSing'
         }
    })

    Ext.define('CoolPerson', {
         extend: 'Person',

         mixins: {
             canPlayGuitar: 'CanPlayGuitar',
             canSing: 'CanSing'
         },

         sing: function() {
             alert("Ahem....");

             this.mixins.canSing.sing.call(this);

             alert("[Playing guitar at the same time...]");

             this.playGuitar();
         }
    });

    var me = new CoolPerson("Jacky");

    me.sing(); // alert("Ahem...");
               // alert("I'm on the highway to hell...");
               // alert("[Playing guitar at the same time...]");
               // alert("F#...G...D...A");

# コンフィグ:

    Ext.define('SmartPhone', {
         config: {
             hasTouchScreen: false,
             operatingSystem: 'Other',
             price: 500
         },

         isExpensive: false,

         constructor: function(config) {
             this.initConfig(config);

             return this;
         },

         applyPrice: function(price) {
             this.isExpensive = (price > 500);

             return price;
         },

         applyOperatingSystem: function(operatingSystem) {
             if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {
                 return 'Other';
             }

             return operatingSystem;
         }
    });

    var iPhone = new SmartPhone({
         hasTouchScreen: true,
         operatingSystem: 'iOS'
    });

    iPhone.getPrice(); // 500;
    iPhone.getOperatingSystem(); // 'iOS'
    iPhone.getHasTouchScreen(); // true;
    iPhone.hasTouchScreen(); // true

    iPhone.isExpensive; // false;
    iPhone.setPrice(600);
    iPhone.getPrice(); // 600
    iPhone.isExpensive; // true;

    iPhone.setOperatingSystem('AlienOS');
    iPhone.getOperatingSystem(); // 'Other'

# 静的メンバー:

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

静的メンバーへのアクセスについては
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass">Ext.Base.statics</a>
や
<a href="#!/api/Ext.Base-property-self" rel="Ext.Base-property-self" class="docClass">Ext.Base.self</a>
を参照してください。

