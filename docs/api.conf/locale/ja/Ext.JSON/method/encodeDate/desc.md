日付を変換します。
これはJSON文字列にリテラル表現として挿入される実際の文字列を返します。
返される値には、ダブルクォーテーション（"）が両サイドに付加されています。

<strong>戻り値のデフォルトフォーマットは "yyyy-mm-ddThh:mm:ss" です。</strong>

このメソッドをオーバーライドする:

    Ext.JSON.encodeDate = function(d) {
        return Ext.Date.format(d, '"Y-m-d"');
    };
