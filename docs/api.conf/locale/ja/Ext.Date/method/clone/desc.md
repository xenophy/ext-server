全く同じDateインスタンスを新たに生成します。
Dateインスタンスをただコピーしただけでは参照渡しとなるため、コピー先のDateインスタンスを変更すると、変更元のインスタンスの値も変更されます。
参照渡しではないコピーを作成する場合はクローンを生成する必要があります。

日付を正しくコピーする例:

    // 間違った方法:
    var orig = new Date('10/1/2006');
    var copy = orig;
    copy.setDate(5);
    console.log(orig);  // 'Thu Oct 05 2006'! を返します。

    // 正しい方法:
    var orig = new Date('10/1/2006'),
    copy = Ext.Date.clone(orig);
    copy.setDate(5);
    console.log(orig);  // 'Thu Oct 01 2006' を返します。
