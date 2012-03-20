Takes an object and converts it to an encoded query string.

Non-recursive:

    Ext.Object.toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
    Ext.Object.toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
    Ext.Object.toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
    Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
    Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"

Recursive:

    Ext.Object.toQueryString(
    {
        username : 'Jacky', dateOfBirth : {
            day : 1, month : 2, year : 1911
        },
        hobbies : ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
    }, true);
    // returns the following string (broken down and url-decoded for ease of reading purpose):
    // username=Jacky
    //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
    //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
