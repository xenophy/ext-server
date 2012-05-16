module.exports = {

    useTable: 'users',

    privateHandler: [
        '$addRec',
        '$updateRec',
        '$lastId'
    ],

    getAll: function(param, cb) {
        var me = this;

        me.query('SELECT * FROM users', function(err, rs) {
            me.end();
            if(rs) {
                cb({
                    success: true,
                    data: rs
                });
            }
        });
    },

    getRec: function(id, cb) {
        var me = this;

        me.query('SELECT * FROM users id=' + id, function(err, rs) {
            me.end();
            if(rs) {
                cb({
                    success: true,
                    data: rs
                });
            }
        });
    },

    addRec: function(params, cb) {
        var me = this,
            records = [], l;

        if( !Ext.isArray(params) ){
            params = [params];
        }
        l = params.length;
        Ext.iterate(params, function (param) {
            me.$addRec(param, function(record) {
                records.push(record);
                if( records.length === l ) {
                    cb(records);
                }
            });
        });
    },

    $addRec: function(param, cb) {
        var me =this, o;

        o = {
            name: param.name,
            email: param.email
        };
        me.insert(o, function(err) {
            me.end();
            // idを付加したオブジェクトを返す
            me.$lastId(function(ret){
                o.id = ret;
                cb(o);
            });
        });
    },

    $lastId: function (cb) {
        var me = this;

        me.query('SELECT LAST_INSERT_ID()', function(err, ret) {
            me.end();
            cb(ret);
        });
    },
    
    updateRec: function (params, cb) {
        var me = this,
            records = [], l;

        if( !Ext.isArray(params) ){
            params = [params];
        }
        l = params.length;
        Ext.iterate(params, function(param) {
            me.$updateRec(param, function(record) {
                records.push(record);
                if( records.length === l ) {
                    cb({data: records});
                }
            });
        });
        
    },

    $updateRec: function(param, cb) {
        var o, me = this;
        
        o = {
            'name': param.name,
            'email': param.email,
            '$where': {id: param.id}
        };

        me.update(o, function(err) {
            me.end();
            cb(param);
        });
    },

    removeRec: function(params, cb) {
        var me = this,
            records = [], l;

        if( !Ext.isArray(params) ){
            params = [params];
        }
        l = params.length;
        Ext.iterate(params, function(param) {
            me.$removeRec(param.id, function() {
                records.push(param.id);
                if( records.length === l ) {
                    cb(records);
                }
            });
        });
    },

    $removeRec: function(id, cb) {
        var me = this,
            o = {id: id};

        me.remove(o, function(err) {
            me.end();
            cb(id);
        });
    }

};
