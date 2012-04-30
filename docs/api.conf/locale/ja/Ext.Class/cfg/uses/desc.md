このクラスを読み込むクラスの一覧を設定します。 これらはこのクラスがインスタンス化される前に読み込まれているという保証はありません。 使用例:

    Ext.define('Mother', {
        uses: ['Child'],
        giveBirth: function() {
            // This code might, or might not work:
            // return new Child();

            // Instead use Ext.create() to load the class at the spot if not loaded already:
            return Ext.create('Child');
        }
    });
