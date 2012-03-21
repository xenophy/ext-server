インターセプター関数を作成します。 第一引数で渡された関数が実行される前に、第二引数で渡された関数が実行されます。 この関数がfalseを返した場合、第一引数で渡された関数は呼び出されません。 このような場合、作成された関数はnull、もしくはreturnValueで設定した値を返します。 そうでない場合は第一引数の関数の実行結果が返されます。 使用例:

    var sayHi = function (name){
        alert('Hi, ' + name);
    }
    sayHi('Fred');
    // alerts "Hi, Fred"
    // create a new function that validates input without
    // directly modifying the original function:
    var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function (name){
        return name == 'Brian';
    });
    sayHiToFriend('Fred');
    // no alert
    sayHiToFriend('Brian');
    // alerts "Hi, Brian"
