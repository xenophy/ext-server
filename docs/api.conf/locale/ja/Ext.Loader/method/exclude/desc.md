指定したファイルを明示的にロードしないようにします。
他の`require`や`exclude`メソッドとチェーンすることができます。例:

    Ext.exclude('Ext.data.*').require('*');

    Ext.exclude('widget.button*').require('widget.*');
