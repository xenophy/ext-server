List of optional classes to load together with this class. These aren't neccessarily loaded before
this class is created, but are guaranteed to be available before Ext.onReady listeners are
invoked. For example:

    Ext.define('Mother', {
        uses: ['Child'],
        giveBirth: function() {
            // This code might, or might not work:
            // return new Child();

            // Instead use Ext.create() to load the class at the spot if not loaded already:
            return Ext.create('Child');
        }
    });
