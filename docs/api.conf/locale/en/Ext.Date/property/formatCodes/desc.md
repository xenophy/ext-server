The base format-code to formatting-function hashmap used by the format method.
Formatting functions are strings (or functions which return strings) which
will return the appropriate value when evaluated in the context of the Date object
from which the format method is called.

Add to / override these mappings for custom date formatting.

Note: Ext.Date.format() treats characters as literals if an appropriate mapping cannot be found.

Example:

    Ext.Date.formatCodes.x = "Ext.util.Format.leftPad(this.getDate(), 2, '0')";
    console.log(Ext.Date.format(new Date(), 'X'); // returns the current day of the month
