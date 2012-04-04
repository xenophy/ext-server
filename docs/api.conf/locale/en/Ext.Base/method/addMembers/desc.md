Add methods / properties to the prototype of this class.

    Ext.define('My.awesome.Cat', {
        constructor: function() {
            ...
        }
    });

     My.awesome.Cat.implement({
         meow: function() {
            alert('Meowww...');
         }
     });

     var kitty = new My.awesome.Cat;
     kitty.meow();
