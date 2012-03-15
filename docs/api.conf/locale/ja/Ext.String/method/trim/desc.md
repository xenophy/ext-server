Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:

<pre><code>var s = '  foo bar  ';
alert('-' + s + '-');         //alerts "- foo bar -"
alert('-' + Ext.String.trim(s) + '-');  //alerts "-foo bar-"
</code></pre>
