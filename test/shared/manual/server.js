
require('../../../index.js');

Ext.application({
    name: 'My',
    //cluster: true,
    public: './public', // TODO:あとでテンプレートバインドできてからよく考える
    session: {
//        type: 'redis'
    },
});

