<p>An object hash in which each property is a date formatting function. The property name is the
format string which corresponds to the produced formatted date string.</p>
<p>This object is automatically populated with date formatting functions as
date formats are requested for Ext standard formatting strings.</p>
<p>Custom formatting functions may be inserted into this object, keyed by a name which from then on
may be used as a format string to
<a href="#!/api/Ext.Date-method-format" rel="Ext.Date-method-format" class="docClass" id="ext-gen5592">format</a>.

Example:</p><pre><code>
Ext.Date.formatFunctions['x-date-format'] = myDateFormatter;
</code></pre>
<p>A formatting function should return a string representation of the passed Date object, and is passed the following parameters:<div class="mdetail-params"><ul>
<li><code>date</code> : Date<div class="sub-desc">The Date to format.</div></li>
</ul></div></p>
<p>To enable date strings to also be <i>parsed</i> according to that format, a corresponding
 parsing function must be placed into the
<a href="#!/api/Ext.Date-property-parseFunctions" rel="Ext.Date-property-parseFunctions" class="docClass" id="ext-gen5596">parseFunctions</a> property.
