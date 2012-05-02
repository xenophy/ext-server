module.exports = {
    uses: [
        'MyModule'
    ],
    execute: function(done) {
        var me = this;
        this.MyModule.func(function(result) {
            me.set('users', result);
            done();
        });
    }
};
