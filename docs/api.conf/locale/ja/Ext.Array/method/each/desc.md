配列、または反復が可能な値を反復処理し、各項目に対して指定したコールバック関数を呼び出します。

    var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];

    Ext.Array.each(countries, function(name, index, countriesItSelf) {
        console.log(name);
    });

    var sum = function() {
        var sum = 0;

        Ext.Array.each(arguments, function(value) {
            sum += value;
        });

        return sum;
    };

sum(1, 2, 3); // 6を返す

コールバック関数でfalseを返すことで、反復処理を停止させることができます。

    Ext.Array.each(countries, function(name, index, countriesItSelf) {
        if (name === 'Singapore') {
            return false; // ここで処理停止
        }
    });

<a href="#!/api/Ext-method-each" rel="Ext-method-each" class="docClass">Ext.each</a>
は
<a href="#!/api/Ext.Array-method-each" rel="Ext.Array-method-each" class="docClass">Ext.Array.each</a>
のエイリアスです。
