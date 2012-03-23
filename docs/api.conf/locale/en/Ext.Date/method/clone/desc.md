Creates and returns a new Date instance with the exact same date value as the called instance.
Dates are copied and passed by reference, so if a copied date variable is modified later, the original
variable will also be changed.  When the intention is to create a new variable that will not
modify the original instance, you should create a clone.

Example of correctly cloning a date:

    //wrong way:
    var orig = new Date('10/1/2006');
    var copy = orig;
    copy.setDate(5);
    console.log(orig);  //returns 'Thu Oct 05 2006'!

    //correct way:
    var orig = new Date('10/1/2006'),
    copy = Ext.Date.clone(orig);
    copy.setDate(5);
    console.log(orig);  //returns 'Thu Oct 01 2006'
