
require('../../../index.js');

Ext.application({
    name: 'My',
    // cluster: true,
    app: {
        paths: {
            public: './public',
        },
        // template_engine: 'ejs'
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
    session: {
//        type: 'redis'
    },
});

