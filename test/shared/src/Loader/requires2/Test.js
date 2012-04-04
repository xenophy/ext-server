

Ext.define('My.requires2.Test', {
    requires: 'My.requires2.Req1',
    foo: function() {
        var cls = new My.requires2.Req1();
        return cls.req1();
    }
});




