オブジェクトをクエリストリングに変換します。

非再起的:

    Ext.Object.toQueryString({foo: 1, bar: 2}); // "foo=1&bar=2" を返します
    Ext.Object.toQueryString({foo: null, bar: 2}); // "foo=&bar=2" を返します
    Ext.Object.toQueryString({'some price': '$300'}); // "some%20price=%24300" を返します
    Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // "date=%222011-01-01T00%3A00%3A00%22" を返します
    Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // "colors=red&colors=green&colors=blue" を返します

再帰的:

    Ext.Object.toQueryString(
      {
          username: 'Jacky',
          dateOfBirth: {
              day: 1,
              month: 2,
              year: 1911
          },
          hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
      }, true
    );

    // 以下のクエリストリングを返します。（読みやすくするため、改行等を入れて形式を崩しています）
    // username=Jacky
    //     &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
    //     &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
