List of classes that have to be loaded before instantiating this class.
For example:

    Ext.define('Mother', {
        requires: ['Child'],
        giveBirth: function() {
            // we can be sure that child class is available.
            return new Child();
        }
    });
