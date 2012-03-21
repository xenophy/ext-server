ソースコード参照from( Mixed value, Number defaultValue ) : Number
値が数値かをチェックし、必要に応じて数値型に変換して返します。 数値に変換できない場合、第二引数のデフォルト値を返します。

    Ext.Number.from('1.23', 1); // 1.23を返します
    Ext.Number.from('abc', 1); // 1を返します
