Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each
token must be unique, and must increment in the format {0}, {1}, etc.  Example usage:
<pre><code>var cls = 'my-class', text = 'Some text';
var s = Ext.String.format('&lt;div class="{0}">{1}&lt;/div>', cls, text);
// s now contains the string: '&lt;div class="my-class">Some text&lt;/div>'
</code></pre>
