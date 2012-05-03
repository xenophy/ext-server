エラーを発生させます。
可能であればエラーに関する情報を自動的にコンソールに出力(console.log)します。
文字列のエラーメッセージやmsgアトリビュートを持ったオブジェクトを渡すことができ、それによりエラーメッセージを表示することができます。
オブジェクトには他の名前／値ペアの属性(またはオブジェクト)を指定することができます。

エラーメッセージを表示した後に最終的にはエラーはスローされるので実行は停止することに注意してください。

Example usage:

    Ext.Error.raise('A simple string error message');
    
    // or...
    
    Ext.define('Ext.Foo', {
        doSomething: function(option) {
            if (someCondition === false) {
                Ext.Error.raise({
                    msg: 'You cannot do that!',
                    option: option,   // whatever was passed into the method
                    'error code': 100 // other arbitrary info
                });
            }
        }
    });
