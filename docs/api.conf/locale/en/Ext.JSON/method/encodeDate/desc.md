Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.
<strong>The returned value includes enclosing double quotation marks.</strong>

The default return format is "yyyy-mm-ddThh:mm:ss".

To override this:

    Ext.JSON.encodeDate = function(d) {
        return Ext.Date.format(d, '"Y-m-d"');
    };
