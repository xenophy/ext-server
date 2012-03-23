Parses the passed string using the specified date format.

Note that this function expects normal calendar dates, meaning that months are 1-based (i.e. 1 = January).
The {@link #defaults} hash will be used for any date value (i.e. year, month, day, hour, minute, second or millisecond)
which cannot be found in the passed string. If a corresponding default date value has not been specified in the {@link #defaults} hash,
the current date's year, month, day or DST-adjusted zero-hour time value will be used instead.
Keep in mind that the input date string must precisely match the specified format string
in order for the parse operation to be successful (failed parse operations return a null value).

Example:

    //dt = Fri May 25 2007 (current date)
    var dt = new Date();
    
    //dt = Thu May 25 2006 (today&#39;s month/day in 2006)
    dt = Ext.Date.parse("2006", "Y");
    
    //dt = Sun Jan 15 2006 (all date parts specified)
    dt = Ext.Date.parse("2006-01-15", "Y-m-d");
    
    //dt = Sun Jan 15 2006 15:20:01
    dt = Ext.Date.parse("2006-01-15 3:20:01 PM", "Y-m-d g:i:s A");
    
    // attempt to parse Sun Feb 29 2006 03:20:01 in strict mode
    dt = Ext.Date.parse("2006-02-29 03:20:01", "Y-m-d H:i:s", true); // returns null
