渡された関数を、あらかじめ指定された引数で実行する関数を作成します。
この関数に引数を指定して呼び出した場合、その引数はあらかじめ設定された引数の後に追加されます。
コールバック関数を作成したいときに役立ちます。

使用例:

    var originalFunction = function(){
        alert(Ext.Array.from(arguments).join(' '));
    };

    var callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);

    callback(); // alertで 'Hello World' と表示されます
    callback('by Me'); // alertで 'Hello World by Me' と表示されます。

<a href="#!/api/Ext-method-pass" rel="Ext-method-pass" class="docClass">Ext.pass</a>
は
<a href="#!/api/Ext.Function-method-pass" rel="Ext.Function-method-pass" class="docClass">Ext.Function.pass</a>
のエイリアスです。
