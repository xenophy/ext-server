Provides a convenient method for performing basic date arithmetic. This method
does not modify the Date instance being called - it creates and returns
a new Date instance containing the resulting date value.

Examples:

    // Basic usage:
    var dt = Ext.Date.add(new Date('10/29/2006'), Ext.Date.DAY, 5);
    console.log(dt); //returns 'Fri Nov 03 2006 00:00:00'
    
    // Negative values will be subtracted:
    var dt2 = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, -5);
    console.log(dt2); //returns 'Tue Sep 26 2006 00:00:00'
