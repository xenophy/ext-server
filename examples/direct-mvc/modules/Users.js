module.exports = {

    useTable: 'users',

    privateHandler: [
        '$addRec',
        '$updateRec',
        '$lastId'
    ],

    getAll: function(param, cb) {
        this.query('SELECT * FROM users', function(err, rs) {
            if(rs) {
                cb({
                    success: true,
                    data: rs
                });
            }
        });
    },

    getRec: function(id, cb) {
        this.query('SELECT * FROM users id=' + id, function(err, rs) {
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
        // 非同期で複数レコード挿入するのってどうすんだろ
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
            // idを付加したオブジェクトを返す
            me.$lastId(function(ret){
                o.id = ret;
                cb(o);
            });
        });
    },

    $lastId: function (cb) {
        this.query('SELECT LAST_INSERT_ID()', function(err, ret) {
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
        var o = {
            'name': param.name,
            'email': param.email,
            '$where': {id: param.id}
        };

        this.update(o, function(err) {
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
        var o = {id: id};

        this.remove(o, function(err) {
            cb(id);
        });
    }

};
