

Ext.define('My.mixins.Test', {
    mixins: [
        'My.mixins.Mix1',
        'My.mixins.Mix2'
    ],
    foo: function() {
        return 'My.mixins.Test.foo';
    },
    bar: function() {
        return 'My.mixins.Test.bar';
    }
});




