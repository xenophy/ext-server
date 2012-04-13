When set to true, the class will be instantiated as singleton.  For example:

    Ext.define('Logger', {
        singleton: true,
        log: function(msg) {
            console.log(msg);
        }
    });

    Logger.log('Hello');
