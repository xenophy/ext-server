Converts any iterable (numeric indices and a length property) into a true array.

    function test() {
        var args = Ext.Array.toArray(arguments),
            fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);

        alert(args.join(' '));
        alert(fromSecondToLastArgs.join(' '));
    }
    
    test('just', 'testing', 'here'); // alerts 'just testing here';
                                     // alerts 'testing here';
    
    Ext.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array
    Ext.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']
    Ext.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']

{@link Ext#toArray Ext.toArray} is alias for {@link Ext.Array#toArray Ext.Array.toArray}
