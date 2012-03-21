name - valueのペアになったオブジェクトの配列に変換します。 ネスト構造もサポートします。 これはクエリストリングを生成する際に便利です。 例:

    var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
    
    // objectsに保存される値は、以下の配列です:
    [
        { name: 'hobbies', value: 'reading' },
        { name: 'hobbies', value: 'cooking' },
        { name: 'hobbies', value: 'swimming' },
    ];
    
    var objects = Ext.Object.toQueryObjects('dateOfBirth', {
        day: 3,
        month: 8,
        year: 1987,
        extra: {
            hour: 4
            minute: 30
        }
    }, true); // Recursive
    
    // objectsに保存される値は、以下の配列です:
    [
        { name: 'dateOfBirth[day]', value: 3 },
        { name: 'dateOfBirth[month]', value: 8 },
        { name: 'dateOfBirth[year]', value: 1987 },
        { name: 'dateOfBirth[extra][hour]', value: 4 },
        { name: 'dateOfBirth[extra][minute]', value: 30 },
    ];
