require('../../lib/ext-server');

Ext.application({
    db: {
        default: {
            adapter : 'mysql',
            host    : '127.0.0.1',
            user    : 'root',
            password: '',
            database: 'test_db',
            port    : '3306'
        }
    }
});
