
Ext.onReady(function() {

    Ext.app.REMOTING_API.enableBuffer = 100;
    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    var form = new Ext.form.FormPanel({

        // API設定
        api: {
            load: Users.readForm,
            submit: Users.writeForm
        },

        // パラメータ順
        paramOrder: ['id'],

        padding: 20,

        // ファイルアップロード設定
        fileUpload: true,

        // アイテム設定
        items: [{
            xtype: 'fileuploadfield',
            anchor: '100%',
            emptyText: '画像を選択してください。',
            fieldLabel: '写真',
            name: 'photo',
            buttonText: '参照...',
        },{
            id: 'uploaded',
            title: 'アップロードされた写真',
            anchor: '100%',
            height: 932,
            autoScroll: true,
            html: 'アップロードされていません。'
        }],

        // ボタン設定
        buttons: [{
            text: 'アップロード',
            handler : function() {
                form.getForm().submit({
                    success: function(form, action) {

                        console.log(arguments);
                        var cmp = Ext.getCmp('uploaded');
                        cmp.update('<img src="' + action.result.imgpath + '" width="100%" />');

                    }
                });

            }
        }],

        title: 'Direct Form',
        width: 800,
        renderTo: Ext.getBody()
    });

});

