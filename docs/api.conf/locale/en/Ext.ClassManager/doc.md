Ext.ClassManager manages all classes and handles mapping from string class name to
actual class objects throughout the whole framework. It is not generally accessed directly, rather through
these convenient shorthands:

- <a href="#/api/Ext-method-define" rel="Ext-method-define" class="docClass">Ext.define</a>
- <a href="#/api/Ext-method-create" rel="Ext-method-create" class="docClass">Ext.create</a>
- <a href="#/api/Ext-method-widget" rel="Ext-method-widget" class="docClass">Ext.widget</a>
- <a href="#/api/Ext-method-getClass" rel="Ext-method-getClass" class="docClass">Ext.getClass</a>
- <a href="#/api/Ext-method-getClassName" rel="Ext-method-getClassName" class="docClass">Ext.getClassName</a>

# Basic syntax:

    Ext.define(className, properties);

in which `properties` is an object represent a collection of properties that apply to the class. See
<a href="#!/api/Ext.ClassManager-method-create" rel="Ext.ClassManager-method-create" class="docClass">create</a>
for more detailed instructions.

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
Ext.Class has a powerful set of extensible
<a href="#!/api/Ext.Class-static-method-registerPreprocessor" rel="Ext.Class-static-method-registerPreprocessor" class="docClass">pre-processors</a>
which takes care of
everything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.

# Inheritance:

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

See
<a href="#!/api/Ext.Base-method-callParent" rel="Ext.Base-method-callParent" class="docClass">Ext.Base.callParent</a>
for more details on calling superclass' methods

# Mixins:

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

# Config:

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

# Statics:

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

Also see
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass">Ext.Base.statics</a>
and
<a href="#!/api/Ext.Base-property-self" rel="Ext.Base-property-self" class="docClass">Ext.Base.self</a>
for more details on accessing
static properties within class methods

