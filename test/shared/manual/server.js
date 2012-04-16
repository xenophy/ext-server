
require('../../../index.js');

Ext.application({
    name: 'My',
    // cluster: true,
    app: {
        public: './public',
    },
    session: {
//        type: 'redis'
    },
});

