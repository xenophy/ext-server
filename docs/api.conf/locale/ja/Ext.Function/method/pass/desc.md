Create a new function from the provided `fn`, the arguments of which are pre-set to `args`.
New arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.
This is especially useful when creating callbacks.

For example:

    var originalFunction = function(){
        alert(Ext.Array.from(arguments).join(' '));
    };
    
    var callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);
    
    callback(); // alerts 'Hello World'
    callback('by Me'); // alerts 'Hello World by Me'

<a href="#!/api/Ext-method-pass" rel="Ext-method-pass" class="docClass">Ext.pass</a> is alias for <a href="#!/api/Ext.Function-method-pass" rel="Ext.Function-method-pass" class="docClass">Ext.Function.pass</a>
