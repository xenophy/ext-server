Globally handle any Ext errors that may be raised, optionally providing custom logic to
handle different errors individually. Return true from the function to bypass throwing the
error to the browser, otherwise the error will be thrown and execution will halt.

Example usage:

    Ext.Error.handle = function(err) {
        if (err.someProperty == 'NotReallyAnError') {
            // maybe log something to the application here if applicable
            return true;
        }
        // any non-true return value (including none) will cause the error to be thrown
    }
