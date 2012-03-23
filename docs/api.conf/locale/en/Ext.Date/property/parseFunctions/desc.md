<p>An object hash in which each property is a date parsing function. The property name is the
format string which that function parses.</p>
<p>This object is automatically populated with date parsing functions as
date formats are requested for Ext standard formatting strings.</p>
<p>Custom parsing functions may be inserted into this object, keyed by a name which from then on
may be used as a format string to {@link #parse}.<p>
<p>Example:</p><pre><code>
Ext.Date.parseFunctions['x-date-format'] = myDateParser;
</code></pre>

<p>A parsing function should return a Date object, and is passed the following parameters:<div class="mdetail-params"><ul>
<li><code>date</code> : String<div class="sub-desc">The date string to parse.</div></li>
<li><code>strict</code> : Boolean<div class="sub-desc">True to validate date strings while parsing
(i.e. prevent javascript Date "rollover") (The default must be false).
Invalid date strings should return null when parsed.</div></li>
</ul></div></p>
<p>To enable Dates to also be <i>formatted</i> according to that format, a corresponding
formatting function must be placed into the {@link #formatFunctions} property.
