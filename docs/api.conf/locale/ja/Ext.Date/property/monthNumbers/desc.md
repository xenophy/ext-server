0から始まるJavaScriptの月番号のオブジェクトハッシュ
(短い月名をキーに設定。注意:キーは大文字小文字を区別します。)。
その国の短い月名に変更したい場合、このプロパティをオブジェクトでオーバーライドします。例:

Ext.Date.monthNumbers = {
    'ShortJanNameInYourLang':0,
    'ShortFebNameInYourLang':1,
    ...
};
