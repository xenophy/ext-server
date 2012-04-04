Initialize configuration for this class. a typical example:

    Ext.define('My.awesome.Class', {
        // The default config
        config: {
            name: 'Awesome',
            isAwesome: true
        },

        constructor: function(config) {
            this.initConfig(config);
        }
    });

    var awesome = new My.awesome.Class({
        name: 'Super Awesome'
    });

    alert(awesome.getName()); // 'Super Awesome'
