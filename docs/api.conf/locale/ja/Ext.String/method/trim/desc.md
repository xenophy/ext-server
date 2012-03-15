文字列内のスペースはそのまま残し、文字列の両サイドのホワイトスペースを除去します。 例:

    var s = '  foo bar  ';
    alert('-' + s + '-');                   // alertで "-  foo bar  -" が表示されます
    alert('-' + Ext.String.trim(s) + '-');  // alertで "-foo bar-" が表示されます
