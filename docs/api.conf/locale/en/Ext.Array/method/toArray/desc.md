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

<a href="#!/api/Ext-method-toArray" rel="Ext-method-toArray" class="docClass" id="ext-gen4680">Ext.toArray</a>
is alias for 
<a href="#!/api/Ext.Array-method-toArray" rel="Ext.Array-method-toArray" class="docClass" id="ext-gen4679">Ext.Array.toArray</a>
Ext.Array.toArray</a>
