トークン化された文字列を定義し、トークンと置換する任意の引数を渡して文字列を生成します。
トークンは一意である必要があり、{0}, {1}, のように増加させる必要があります。 使用例:
<pre><code>var cls = 'my-class', text = 'Some text';
var s = Ext.String.format('&lt;div class="{0}">{1}&lt;/div>', cls, text);
// 変数sに含まれる文字列: '&lt;div class="my-class">Some text&lt;/div>'
</code></pre>
