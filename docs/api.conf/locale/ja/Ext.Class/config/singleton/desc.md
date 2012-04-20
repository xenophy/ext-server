trueを設定することで、クラスがシングルトンでインスタンス化されます。 使用例:

    Ext.define('Logger', {
        singleton: true,
        log: function(msg) {
            console.log(msg);
        }
    });

    Logger.log('Hello');
