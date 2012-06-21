/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.database.MySQL', function() {

    var db, table;

    beforeEach(function() {
        db = Ext.create('Ext.database.MySQL', {
            // config
            database: 'extserver',
            host: '127.0.0.1',
            user: 'root',
            password: '',
            port: '3306'
        });
        table = 'users';

    });

    it("find id=1 がkotsutsumiであること", function(){
        var where = { id: 1 };

        db.connect(function(){
            assert.equal('a', 'b');
            db.find(table, where, function(ret){
                ret.name.should.equal('kotsutsumi');
                db.end();
            });
        });
    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

