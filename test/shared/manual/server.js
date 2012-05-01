
require('../../../index.js');

Ext.application({
    name: 'My',
    // cluster: true,
    app: {
        paths: {
            public: './public',
        }
    },
    db: {
        default: {
            adapter : 'mysql',
            host    : '127.0.0.1',
            user    : 'root',
            password: '',
            database: 'extserver2',
            port    : '3306'
        }
    },
    session: {
//        type: 'redis'
    },
});

