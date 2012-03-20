Creates a delegate function, optionally with a bound scope which, when called, buffers
the execution of the passed function for the configured number of milliseconds.
If called again within that period, the impending invocation will be canceled, and the
timeout period will begin again.
