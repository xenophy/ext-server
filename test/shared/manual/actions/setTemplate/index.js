
module.exports = function() {
    this.setTemplate('hoge.html');
    this.set('result', '123');

//    this.res.writeHead(200);
//    this.res.end("custom");
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
