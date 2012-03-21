オブジェクトを反復処理し、各要素に対して指定したコールバック関数を呼び出します。 コールバック関数がfalseを返した場合、その時点で反復処理は停止されます。 例:

    var person = {
        name: 'Jacky',
        hairColor: 'black',
        loves: ['food', 'sleeping', 'wife']
    };

    Ext.Object.each(person, function(key, value, myself) {
        console.log(key + ":" + value);

        if (key === 'hairColor') {
            return false; // 反復処理停止
        }
    });
