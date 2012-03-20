A very commonly used method throughout the framework. It acts as a wrapper around another method
which originally accepts 2 arguments for `name` and `value`.
The wrapped function then allows "flexible" value setting of either:

- `name` and `value` as 2 arguments
- one single object argument with multiple key - value pairs

For example:

    var setValue = Ext.Function.flexSetter(function(name, value) {
        this[name] = value;
    });
    
    // Afterwards
    // Setting a single name - value
    setValue('name1', 'value1');
    
    // Settings multiple name - value pairs
    setValue({
        name1: 'value1',
        name2: 'value2',
        name3: 'value3'
    });
