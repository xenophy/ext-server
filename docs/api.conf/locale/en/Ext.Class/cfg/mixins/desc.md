List of classes to mix into this class. For example:

    Ext.define('CanSing', {
         sing: function() {
             alert("I'm on the highway to hell...")
         }
    });

    Ext.define('Musician', {
         mixins: ['CanSing']
    })

In this case the Musician class will get a `sing` method from CanSing mixin.

But what if the Musician already has a `sing` method? Or you want to mix
in two classes, both of which define `sing`?  In such a cases it's good
to define mixins as an object, where you assign a name to each mixin:

    Ext.define('Musician', {
         mixins: {
             canSing: 'CanSing'
         },

         sing: function() {
             // delegate singing operation to mixin
             this.mixins.canSing.sing.call(this);
         }
    })

In this case the `sing` method of Musician will overwrite the
mixed in `sing` method. But you can access the original mixed in method
through special `mixins` property.
