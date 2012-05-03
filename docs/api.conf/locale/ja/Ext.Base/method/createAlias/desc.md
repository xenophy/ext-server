既存のプロトタイプメソッドのエリアスを生成します。
例:

    Ext.define('My.cool.Class', {
        method1: function() { ... },
        method2: function() { ... }
    });
    
    var test = new My.cool.Class();
    
    My.cool.Class.createAlias({
        method3: 'method1',
        method4: 'method2'
    });
    
    test.method3(); // test.method1()
    
    My.cool.Class.createAlias('method5', 'method3');
    
    test.method5(); // test.method3() -> test.method1()

