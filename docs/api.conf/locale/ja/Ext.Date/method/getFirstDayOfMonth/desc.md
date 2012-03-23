Get the first day of the current month, adjusted for leap year.  The returned value
is the numeric day index within the week (0-6) which can be used in conjunction with
the {@link #monthNames} array to retrieve the textual day name.

Example:

    var dt = new Date('1/10/2007'),
    firstDay = Ext.Date.getFirstDayOfMonth(dt);
    console.log(Ext.Date.dayNames[firstDay]); //output: 'Monday'
