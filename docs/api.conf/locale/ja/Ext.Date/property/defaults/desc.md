An object hash containing default date values used during date parsing.
The following properties are available:

<div class="mdetail-params"><ul>
   <li><code>y</code> : Number<div class="sub-desc">The default year value. (defaults to undefined)</div></li>
   <li><code>m</code> : Number<div class="sub-desc">The default 1-based month value. (defaults to undefined)</div></li>
   <li><code>d</code> : Number<div class="sub-desc">The default day value. (defaults to undefined)</div></li>
   <li><code>h</code> : Number<div class="sub-desc">The default hour value. (defaults to undefined)</div></li>
   <li><code>i</code> : Number<div class="sub-desc">The default minute value. (defaults to undefined)</div></li>
   <li><code>s</code> : Number<div class="sub-desc">The default second value. (defaults to undefined)</div></li>
   <li><code>ms</code> : Number<div class="sub-desc">The default millisecond value. (defaults to undefined)</div></li>
</ul></div>

Override these properties to customize the default date values used by the {@link #parse} method.
<b>Note: In countries which experience Daylight Saving Time (i.e. DST), the <tt>h</tt>, <tt>i</tt>, <tt>s</tt>
and <tt>ms</tt> properties may coincide with the exact time in which DST takes effect.
It is the responsiblity of the developer to account for this.</b>

Example Usage:

    // set default day value to the first day of the month
    Ext.Date.defaults.d = 1;
    
    // parse a February date string containing only year and month values.
    // setting the default day value to 1 prevents weird date rollover issues
    // when attempting to parse the following date string on, for example, March 31st 2009.
    Ext.Date.parse('2009-02', 'Y-m'); // returns a Date object representing February 1st 2009
