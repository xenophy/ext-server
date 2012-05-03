グローバルにエラーをハンドリングします。
エラー毎にハンドリングを変えるカスタムロジックを提供することもできます。
関数がtrueを返すとエラーがスローされるのをバイパスし、
そうでなければ実行時にエラーが発生して実行は停止します。

使用例:

    Ext.Error.handle = function(err) {
        if (err.someProperty == 'NotReallyAnError') {
            // maybe log something to the application here if applicable
            return true;
        }
        // any non-true return value (including none) will cause the error to be thrown
    }
