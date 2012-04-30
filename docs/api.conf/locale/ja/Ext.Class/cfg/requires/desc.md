このクラスがインスタンス化される前に読み込まれなければならないクラスの一覧を設定します。 使用例:

    Ext.define('Mother', {
        requires: ['Child'],
        giveBirth: function() {
            // we can be sure that child class is available.
            return new Child();
        }
    });
