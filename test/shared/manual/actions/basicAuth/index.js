
module.exports = function() {

    var me = this;

    me.basicAuth(function(id, pass) {
        if(id === 'admin' && pass === 'pass') {
        } else {
            me.unauthorized();
            // or
            me.forbidden();
        }
    });
};

// or

/*
module.exports = function() {

    // if asynchronise logic, previously call this.abort();
    this.abort();

    // some asynchronise logic....
    // With responsibility, please return a request.
    // Ext Server cancels rendering.

    // ex.) use json text.

        this.res.writeHead(200);
        this.res.end("custom");
};
*/
