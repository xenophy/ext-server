Converts a query string back into an object.

Non-recursive:

<pre><code>Ext.Object.fromQueryString(foo=1&bar=2); // returns {foo: 1, bar: 2}
Ext.Object.fromQueryString(foo=&bar=2); // returns {foo: null, bar: 2}
Ext.Object.fromQueryString(some%20price=%24300); // returns {'some price': '$300'}
Ext.Object.fromQueryString(colors=red&colors=green&colors=blue); // returns {colors: ['red', 'green', 'blue']}
</code></pre>

Recursive:

<pre><code>Ext.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);

// returns
{
    username: 'Jacky',
    dateOfBirth: {
        day: '1',
        month: '2',
        year: '1911'
    },
    hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
}
</code></pre>
