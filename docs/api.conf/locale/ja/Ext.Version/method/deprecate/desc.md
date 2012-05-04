非推奨のコードのためのクロージャーを生成します。

    // この例ではExt.oldMethodは4.0.0beta以前までしかサポートされません
    // Ext.getVersion('extjs')が'4.0.0beta'以降であると返したとき
    // (例えば4.0.0RC)には、クロージャーは実行されません。
    Ext.deprecate('extjs', '4.0.0beta', function() {
        Ext.oldMethod = Ext.newMethod;

        ...
    });
