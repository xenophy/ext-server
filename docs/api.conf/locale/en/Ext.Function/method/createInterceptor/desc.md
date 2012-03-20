Creates an interceptor function. The passed function is called before the original one. If it returns false,
the original one is not called. The resulting function returns the results of the original function.
The passed function is called with the parameters of the original function. Example usage:

    var sayHi = function (name){
        alert('Hi, ' + name);
    }
    sayHi('Fred');
    // alerts "Hi, Fred"
    // create a new function that validates input without
    // directly modifying the original function:
    var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function (name){
        return name == 'Brian';
    });
    sayHiToFriend('Fred');
    // no alert
    sayHiToFriend('Brian');
    // alerts "Hi, Brian"
