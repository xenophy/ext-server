第一引数で渡された関数を呼び出した後に、第二引数で渡された関数を呼び出すシーケンスを作成します。
結果は第一引数の関数の結果を返します。
第二引数の関数への引数は、第一引数の関数に渡された引数を使用します。

    var sayHi = function(name){
        alert('Hi, ' + name);
    }
    
    sayHi('Fred'); // alerts "Hi, Fred"
    
    var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
        alert('Bye, ' + name);
    });
    
    sayGoodbye('Fred'); // both alerts show
