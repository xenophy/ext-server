Create a combined function call sequence of the original function + the passed function.
The resulting function returns the results of the original function.
The passed function is called with the parameters of the original function. Example usage:

    var sayHi = function(name){
        alert('Hi, ' + name);
    }
    
    sayHi('Fred'); // alerts "Hi, Fred"
    
    var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
        alert('Bye, ' + name);
    });
    
    sayGoodbye('Fred'); // both alerts show
