
module.exports = {

//    directrouter: true

    execute: function() {

        var res = this.res;

        res.writeHead(200, {
            'Content-Type': 'application/javascript'
        });
        res.end("console.log(123);");

    }
};
