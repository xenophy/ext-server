このクラスのプロトタイプにメソッドやプロパティを追加します。

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
