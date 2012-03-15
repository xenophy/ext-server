Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each
token must be unique, and must increment in the format {0}, {1}, etc.  Example usage:
<pre><code>var cls = 'my-class', text = 'Some text';
var s = Ext.String.format('&lt;div class="{0}">{1}&lt;/div>', cls, text);
// s now contains the string: '&lt;div class="my-class">Some text&lt;/div>'
</code></pre>

トークン化された文字列を定義し、トークンと置換する任意の引数を渡して文字列を生成します。 トークンは一意である必要があり、{0},{1},{2}のように増加させる必要があります。 使用例:

    var cls = 'my-class',
        text = 'Some text';

    var s = Ext.String.format('<div class="{0}">{1}</div>', cls, text);
    // 変数sに含まれる文字列: '<div class="my-class">Some text</div>'
