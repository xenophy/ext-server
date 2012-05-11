
require('../../../index.js');

var fs = require('fs');

Ext.createProxy({
    ssl: {
        key: fs.readFileSync('./ryans-key.pem'),
        cert: fs.readFileSync('./ryans-cert.pem')
    },
    servers: [
        '192.168.0.10:8124',
        '192.168.0.11:8124',
        '192.168.0.12:8124'
    ]
}).listen(5000);

