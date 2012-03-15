Utility function that allows you to easily switch a string between two alternating values.  The passed value
is compared to the current string, and if they are equal, the other value that was passed in is returned.  If
they are already different, the first value passed in is returned.  Note that this method returns the new value
but does not change the current string.
<pre><code>// alternate sort directions
sort = Ext.String.toggle(sort, 'ASC', 'DESC');

// instead of conditional logic:
sort = (sort == 'ASC' ? 'DESC' : 'ASC');
</code></pre>
