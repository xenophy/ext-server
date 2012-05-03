Insert this pre-processor at a specific position in the stack, optionally relative to
any existing pre-processor. For example:

    Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {
        // Your code here

        if(fn) {
            fn.call(this, cls, data);
        }
    }).setDefaultPreprocessorPosition('debug', 'last');
