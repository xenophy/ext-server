渡されたDateインスタンスの月の開始日の曜日を数値で取得します。閏年にも対応しています。
返される番号（0−6）はdayNamesプロパティを使用して、テキストの曜日名を取得するために使用することができます。

例:


    var dt = new Date('1/10/2007'),
    firstDay = Ext.Date.getFirstDayOfMonth(dt);
    console.log(Ext.Date.dayNames[firstDay]); // 'Monday' を出力します。
