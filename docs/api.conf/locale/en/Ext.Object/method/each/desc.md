Iterates through an object and invokes the given callback function for each iteration.
The iteration can be stopped by returning `false` in the callback function. For example:

<pre><code>var person = {
    name: 'Jacky'
    hairColor: 'black'
    loves: ['food', 'sleeping', 'wife']
};

Ext.Object.each(person, function(key, value, myself) {
    console.log(key + ":" + value);

    if (key === 'hairColor') {
        return false; // stop the iteration
    }
});
</code></pre>
