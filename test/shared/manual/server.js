
require('../../../index.js');

Ext.application({
    name: 'My',
    // cluster: true,
    app: {
        paths: {
            public: './public',
        },
        // template_engine: 'ejs',
        session: {
            type: 'redis',
            redis: {
                //host: '',
                //port: '',
                //db: '',
                //pass: '',
                //prefix: 'session:'
            }
        }
    },
    db: {
        default: {
            adapter : 'mysql',
            host    : '127.0.0.1',
            user    : 'root',
            password: '',
            database: 'extserver',
            port    : '3306'
        },
        conn2: {
            adapter : 'mongodb',
            host    : '127.0.0.1',
//            user    : 'root',
//            password: '',
            database: 'extserver'
        }
    },
    smtp: {
    },
    ssl: {
        // enable access to https://localhost:8125/
        port: 8125,
        key: require('fs').readFileSync('ssl.key/ryans-key.pem'),
        cert: require('fs').readFileSync('ssl.key/ryans-cert.pem')
    },

    // socket.io settings for http
    ws: {
        //'log level': 0,
        'browser client minification': true
    },

    // socket.io settings for https
    wss: {
        //'log level': 0,
        'browser client minification': true
    }
});

