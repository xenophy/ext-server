Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.
Can be chained with more `require` and `exclude` methods, eg:

    Ext.exclude('Ext.data.*').require('*');

    Ext.exclude('widget.button*').require('widget.*');
