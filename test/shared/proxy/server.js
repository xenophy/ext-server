
require('../../../index.js');

var fs = require('fs');

Ext.createProxy({
    ssl: {
        key: fs.readFileSync('./ryans-key.pem'),
        cert: fs.readFileSync('./ryans-cert.pem')
    },
    servers: [
        { host: '192.168.0.1', port: '8124' },
        { host: '192.168.0.2', port: '8124' },
        { host: '129.168.0.3', port: '8124' }
    ]
}).listen(5000);

