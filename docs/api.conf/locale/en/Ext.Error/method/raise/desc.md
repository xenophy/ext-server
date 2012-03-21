Raise an error that can include additional data and supports automatic console logging if available.
You can pass a string error message or an object with the `msg` attribute which will be used as the
error message. The object can contain any other name-value attributes (or objects) to be logged
along with the error.

Note that after displaying the error message a JavaScript error will ultimately be thrown so that
execution will halt.

Example usage:

    Ext.Error.raise('A simple string error message');
    
    // or...
    
    Ext.define('Ext.Foo', {
        doSomething: function(option) {
            if (someCondition === false) {
                Ext.Error.raise({
                    msg: 'You cannot do that!',
                    option: option,   // whatever was passed into the method
                    'error code': 100 // other arbitrary info
                });
            }
        }
    });
