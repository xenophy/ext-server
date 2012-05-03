渡されたDateインスタンスの月の終了日の曜日を数値で取得します。閏年にも対応しています。
返される番号（0−6）は
<a href="#!/api/Ext.Date-property-monthNames" rel="Ext.Date-property-monthNames" class="docClass" >monthNames</a>
プロパティを使用して、テキストの曜日名を取得するために使用することができます。

例:

    var dt = new Date('1/10/2007'),
    lastDay = Ext.Date.getLastDayOfMonth(dt);
    console.log(Ext.Date.dayNames[lastDay]); // 'Wednesday' を出力します。
