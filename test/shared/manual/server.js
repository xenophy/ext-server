
require('../../../index.js');

Ext.application({
    name: 'My',
    // cluster: true,
    app: {
        paths: {
            public: './public',
        }
    },
    session: {
//        type: 'redis'
    },
});

