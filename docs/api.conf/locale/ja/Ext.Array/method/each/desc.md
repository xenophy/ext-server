Iterates an array or an iterable value and invoke the given callback function for each item.

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
    
    sum(1, 2, 3); // returns 6

The iteration can be stopped by returning false in the function callback.

    Ext.Array.each(countries, function(name, index, countriesItSelf) {
        if (name === 'Singapore') {
            return false; // break here
        }
    });

{@link Ext#each Ext.each} is alias for {@link Ext.Array#each Ext.Array.each}
