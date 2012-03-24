基本的な日付の演算を行うための便利なメソッドを提供します。
このメソッドは渡されるDateインスタンスを変更せず、新しいDateインスタンスを生成して返します。

例:

Examples:

    // 一般的な使用方法:
    var dt = Ext.Date.add(new Date('10/29/2006'), Ext.Date.DAY, 5);
    console.log(dt); //returns 'Fri Nov 03 2006 00:00:00'
    
    // 負の値で引き算:
    var dt2 = Ext.Date.add(new Date('10/1/2006'), Ext.Date.DAY, -5);
    console.log(dt2); //returns 'Tue Sep 26 2006 00:00:00'
