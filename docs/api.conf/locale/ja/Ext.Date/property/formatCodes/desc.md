フォーマット設定関数formatで使用する、デフォルトの形式を含んだハッシュマップ。
フォーマット設定関数は文字列（もしくは文字列を返す関数）を渡すと、設定された形式の日付を返します。

独自の日付フォーマットを使用したい場合、このマッピングに追加します。

注意：適切なマッピングが見つからない場合、Ext.Date.format()は渡された文字列をそのまま返します。

例:

    Ext.Date.formatCodes.x = "Ext.util.Format.leftPad(this.getDate(), 2, '0')";
    console.log(Ext.Date.format(new Date(), 'X')); // 今月の、現在の日を返します。

