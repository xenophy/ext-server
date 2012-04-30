このクラスに追加するクラスの一覧を設定します。 使用例:

    Ext.define('CanSing', {
         sing: function() {
             alert("I'm on the highway to hell...")
         }
    });

    Ext.define('Musician', {
         mixins: ['CanSing']
    })

この場合MusicianクラスはCanSingミックスインからsingメソッドを取得します。
しかしMusicianクラスにすでに`sing`メソッドがある場合はどうでしょうか。
または`sing`メソッドがある2つのミックスインを追加したら？
このような場合にはmixinsをオブジェクトとして定義します。
こうすると、それぞのミックスインに名前をつけられます。

    Ext.define('Musician', {
         mixins: {
             canSing: 'CanSing'
         },

         sing: function() {
             // delegate singing operation to mixin
             this.mixins.canSing.sing.call(this);
         }
    })

この場合ですと、Musicianのsingメソッドがミックスされた`sing`メソッドを上書きしてしまいます。しかし、`mixins`プロパティからオリジナルのミックスされたメソッドにアクセスすることができます。
