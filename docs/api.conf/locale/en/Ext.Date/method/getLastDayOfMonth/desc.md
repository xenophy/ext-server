Get the last day of the current month, adjusted for leap year.  The returned value
is the numeric day index within the week (0-6) which can be used in conjunction with
the
<a href="#!/api/Ext.Date-property-monthNames" rel="Ext.Date-property-monthNames" class="docClass" >monthNames</a>
array to retrieve the textual day name.

Example:

    var dt = new Date('1/10/2007'),
    lastDay = Ext.Date.getLastDayOfMonth(dt);
    console.log(Ext.Date.dayNames[lastDay]); //output: 'Wednesday'
