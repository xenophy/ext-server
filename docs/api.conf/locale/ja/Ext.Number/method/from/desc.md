Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if
it is not.

    Ext.Number.from('1.23', 1); // returns 1.23
    Ext.Number.from('abc', 1); // returns 1
