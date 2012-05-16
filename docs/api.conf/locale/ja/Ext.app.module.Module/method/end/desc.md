MySQL使用時、クエリー実行後、任意のタイミングでこのメソッドを呼び出す必要があります。
そうしないと、コネクションがクローズしません。

例:

    lastId: function (cb) {
        var me = this;

        me.query('SELECT LAST_INSERT_ID()', function(err, ret) {
            me.end();
            cb(ret);
        });
    }

