require('../../../index.js');

Ext.application({
    app: {
        vhost: [
            { hostname: 'foo.com',  path: 'foo'},
            { hostname: 'bar.com',  path: 'bar'},
            { hostname: '*',        path: 'www'}
        ]
    },
    db: {
        default: {
            adapter : 'mysql',
            host    : '127.0.0.1',
            user    : 'root',
            password: '',
            database: 'extserver',
            port    : '3306'
        }
    }
});

