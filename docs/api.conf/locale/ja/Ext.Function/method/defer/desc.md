指定したミリ秒後に、渡された関数を設定されたスコープで呼び出します。 使用例:

    var sayHi = function(name){
        alert('Hi, ' + name);
    }

    // すぐに実行:
    sayHi('Fred');

    // 2秒後に実行:
    Ext.Function.defer(sayHi, 2000, this, ['Fred']);

    // この構文は、匿名関数を遅らせて
    // 実行する場合に便利です:
    Ext.Function.defer(function(){
        alert('Anonymous');
    }, 100);

<a href="#/api/Ext-method-defer" rel="Ext-method-defer" class="docClass" >Ext.defer</a> は <a href="#/api/Ext.Function-method-defer" rel="Ext.Function-method-defer" class="docClass" >Ext.Function.defer</a>のエイリアスです。
