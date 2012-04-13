Converts a string expression to an array of matching class names. An expression can either refers to class aliases
or class names. Expressions support wildcards:

     // returns ['Ext.window.Window']
    var window = Ext.ClassManager.getNamesByExpression('widget.window');

    // returns ['widget.panel', 'widget.window', ...]
    var allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');

    // returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]
    var allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');
