require('../../../index.js');

Ext.application({
    app: {
        vhost: function(host) {

            console.log(
            host.substr(0 - 'xeadexpress.com'.length)
            );

            if(host === 'foo.com') {
                return 'foo';
            }

            if(host === 'bar.com') {
                return 'bar';
            }

            return 'www';
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
        }
    }
});

