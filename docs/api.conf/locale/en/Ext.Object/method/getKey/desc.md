Returns the first matching key corresponding to the given value.
If no matching value is found, null is returned.

    var person = {
        name: 'Jacky',
        loves: 'food'
    };

    alert(Ext.Object.getKey(person, 'food')); // alerts 'loves'
