ソースコード参照fromQueryString( String queryString, Boolean recursive ) : Object
クエリストリングをオブジェクトに変換します。

非再起的:

    Ext.Object.fromQueryString("foo=1&bar=2"); // {foo: 1, bar: 2} を返します
    Ext.Object.fromQueryString("foo=&bar=2"); // {foo: null, bar: 2} を返します
    Ext.Object.fromQueryString("some%20price=%24300"); // {'some price': '$300'} を返します
    Ext.Object.fromQueryString("colors=red&colors=green&colors=blue"); // {colors: ['red', 'green', 'blue']} を返します

再帰的:

    Ext.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);

    // 以下のオブジェクトを返します
    // {
    //     username: 'Jacky',
    //     dateOfBirth: {
    //         day: '1',
    //         month: '2',
    //         year: '1911'
    //     },
    //     hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
    // }
