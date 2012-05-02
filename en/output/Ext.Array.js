Ext.data.JsonP.Ext_Array({"parentMixins":[],"singleton":true,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Array.html#Ext-Array' target='_blank'>Array.js</a></div></pre><div class='doc-contents'><p><p>A set of useful static methods to deal with arrays; provide missing methods for older browsers.</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clean' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-clean' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-clean' class='name expandable'>clean</a>( <span class='pre'>Array array</span> ) : Array</div><div class='description'><div class='short'><p>Filter through an array and remove empty item a...</p> ...</div><div class='long'><p><p>Filter through an array and remove empty item as defined in <a href=\"#!/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\" id=\"ext-gen4633\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#!/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\" id=\"ext-gen3512\">filter</a>filter</a></p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>results</p></p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-clone' class='name expandable'>clone</a>( <span class='pre'>Array array</span> ) : Array</div><div class='description'><div class='short'><p>Clone a flat array without referencing the prev...</p> ...</div><div class='long'><p><p>Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method\nfor Array.prototype.slice.call(array)</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The array</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>The clone array</p></p>\n</div></li></ul></div></div></div><div id='method-contains' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-contains' class='name expandable'>contains</a>( <span class='pre'>Array array, Object item</span> ) : Boolean</div><div class='description'><div class='short'><p>Checks whether or not the given <code>array</code> contain...</p> ...</div><div class='long'><p><p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The array to check</p></p>\n</div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'><p><p>The item to look for</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><p>True if the array contains the item, false otherwise</p></p>\n</div></li></ul></div></div></div><div id='method-difference' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-difference' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-difference' class='name expandable'>difference</a>( <span class='pre'>Array arrayA, Array arrayB</span> ) : Array</div><div class='description'><div class='short'><p>Perform a set difference A-B by subtracting all...</p> ...</div><div class='long'><p><p>Perform a set difference A-B by subtracting all items in array B from array A.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrayA</span> : Array<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>arrayB</span> : Array<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>difference</p></p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-each' class='name expandable'>each</a>( <span class='pre'>Array/NodeList/Object iterable, Function fn, Object scope, Boolean reverse</span> ) : Boolean</div><div class='description'><div class='short'><p>Iterates an array or an iterable value and invo...</p> ...</div><div class='long'><p><p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#!/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a>\nis alias for\n<a href=\"#!/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iterable</span> : Array/NodeList/Object<div class='sub-desc'><p><p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p><p>The item at the current <code>index</code> in the passed <code>array</code></p></p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p><p>The current <code>index</code> within the <code>array</code></p></p>\n</div></li><li><span class='pre'>allItems</span> : Array<div class='sub-desc'><p><p>The <code>array</code> itself which was passed as the first argument</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><p>Return false to stop iteration.</p></p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p></p>\n</div></li><li><span class='pre'>reverse</span> : Boolean<div class='sub-desc'><p><p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><p>See description for the <code>fn</code> parameter.</p></p>\n</div></li></ul></div></div></div><div id='method-every' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-every' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-every' class='name expandable'>every</a>( <span class='pre'>Array array, Function fn, Object scope</span> ) : Boolean</div><div class='description'><div class='short'><p>Executes the specified function for each array ...</p> ...</div><div class='long'><p><p>Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is found, the function will return false immediately.\nOtherwise, it will return true.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>Callback function for each item</p></p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p><p>Callback function scope</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><p>True if no false value is returned by the callback function.</p></p>\n</div></li></ul></div></div></div><div id='method-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-from' class='name expandable'>from</a>( <span class='pre'>Array/Mixed value, Boolean newReference</span> ) : Array</div><div class='description'><div class='short'><p>Converts a value to an array if it's not alread...</p> ...</div><div class='long'><p><p>Converts a value to an array if it's not already an array; returns:</p>\n\n<ul>\n<li>An empty array if given value is <code>undefined</code> or <code>null</code></li>\n<li>Itself if given value is already an array</li>\n<li>An array copy if given value is <a href=\"#!/api/Ext-method-isIterable\" rel=\"Ext-method-isIterable\" class=\"docClass\">iterable</a> (arguments, NodeList and alike)</li>\n<li>An array with one item which is the given value, otherwise</li>\n</ul></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Array/Mixed<div class='sub-desc'><p><p>The value to convert to an array if it's not already is an array</p></p>\n</div></li><li><span class='pre'>newReference</span> : Boolean<div class='sub-desc'><p><p>(Optional) True to clone the given array and return a new reference if necessary,\ndefaults to false</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>array</p></p>\n</div></li></ul></div></div></div><div id='method-include' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-include' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-include' class='name expandable'>include</a>( <span class='pre'>Array array, Object item</span> )</div><div class='description'><div class='short'><p>Push an item into the array only if the array d...</p> ...</div><div class='long'><p><p>Push an item into the array only if the array doesn't contain it yet</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The array</p></p>\n</div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'><p><p>The item to include</p></p>\n</div></li></ul></div></div></div><div id='method-indexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>Array array, Object item, Number from</span> ) : Number</div><div class='description'><div class='short'><p>Get the index of the provided item in the given...</p> ...</div><div class='long'><p><p>Get the index of the provided item in the given array, a supplement for the missing arrayPrototype.indexOf in Internet Explorer.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The array to check</p></p>\n</div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'><p><p>The item to look for</p></p>\n</div></li><li><span class='pre'>from</span> : Number<div class='sub-desc'><p><p>(Optional) The index at which to begin the search</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p><p>The index of item in the array (or -1 if it is not found)</p></p>\n</div></li></ul></div></div></div><div id='method-insert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-insert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-insert' class='name expandable'>insert</a>( <span class='pre'>Array array, Number index, Array items</span> ) : Array</div><div class='description'><div class='short'><p>Inserts items in to an array.</p> ...</div><div class='long'><p><p>Inserts items in to an array.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The Array on which to replace.</p></p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p><p>The index in the array at which to operate.</p></p>\n</div></li><li><span class='pre'>items</span> : Array<div class='sub-desc'><p><p>The array of items to insert at index.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>The array passed.</p></p>\n</div></li></ul></div></div></div><div id='method-lastIndexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-lastIndexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-lastIndexOf' class='name expandable'>lastIndexOf</a>( <span class='pre'>Array array, Mixed item, Number from</span> ) : Number</div><div class='description'><div class='short'><p>&nbsp;</p> ...</div><div class='long'><p><p>&nbsp;</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>item</span> : Mixed<div class='sub-desc'><p></p>\n</div></li><li><span class='pre'>from</span> : Number<div class='sub-desc'><p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-replace' class='name expandable'>replace</a>( <span class='pre'>Array array, Number index, Number removeCount, Array insert</span> ) : Array</div><div class='description'><div class='short'><p>Replaces items in an array. This is functionall...</p> ...</div><div class='long'><p><p>Replaces items in an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and is often more convenient\nto call because it accepts an array of items to insert rather than use a variadic\nargument list.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The Array on which to replace.</p></p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p><p>The index in the array at which to operate.</p></p>\n</div></li><li><span class='pre'>removeCount</span> : Number<div class='sub-desc'><p>{Ext_Array:method-replace:param_removeCout}</p>\n</div></li><li><span class='pre'>insert</span> : Array<div class='sub-desc'><p><p>(optional) An array of items to insert at index.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>The array passed.</p></p>\n</div></li></ul></div></div></div><div id='method-slice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-slice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-slice' class='name expandable'>slice</a>( <span class='pre'>Array array, Number begin, Number end</span> ) : Array</div><div class='description'><div class='short'><p>Returns a shallow copy of a part of an array. T...</p> ...</div><div class='long'><p><p>Returns a shallow copy of a part of an array. This is equivalent to the native\ncall \"Array.prototype.slice.call(array, begin, end)\". This is often used when \"array\"\nis \"arguments\" since the arguments object does not supply a slice method but can\nbe the context object to Array.prototype.slice.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The array (or arguments object).</p></p>\n</div></li><li><span class='pre'>begin</span> : Number<div class='sub-desc'><p><p>The index at which to begin. Negative values are offsets from\nthe end of the array.</p></p>\n</div></li><li><span class='pre'>end</span> : Number<div class='sub-desc'><p><p>The index at which to end. The copied items do not include\nend. Negative values are offsets from the end of the array. If end is omitted,\nall items up to the end of the array are copied.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>The copied piece of the array.</p></p>\n</div></li></ul></div></div></div><div id='method-splice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-splice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-splice' class='name expandable'>splice</a>( <span class='pre'>Array array, Number index, Number removeCount</span> ) : Array</div><div class='description'><div class='short'><p>Replaces items in an array. This is equivalent ...</p> ...</div><div class='long'><p><p>Replaces items in an array. This is equivalent to the splice method of Array, but\nworks around bugs in IE8's splice method. The signature is exactly the same as the\nsplice method except that the array is the first argument. All arguments following\nremoveCount are inserted in the array at index.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p><p>The Array on which to replace.</p></p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p><p>The index in the array at which to operate.</p></p>\n</div></li><li><span class='pre'>removeCount</span> : Number<div class='sub-desc'><p>{Ext_Array:method-splice:removeCount}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>An array containing the removed items.</p></p>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Array'>Ext.Array</span><br/><a href='source/Array.html#Ext-Array-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Array-method-toArray' class='name expandable'>toArray</a>( <span class='pre'>Object iterable, Number start, Number end</span> ) : Array</div><div class='description'><div class='short'><p>Converts any iterable (numeric indices and a le...</p> ...</div><div class='long'><p><p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#!/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\" id=\"ext-gen4680\">Ext.toArray</a>\nis alias for \n<a href=\"#!/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\" id=\"ext-gen4679\">Ext.Array.toArray</a>\nExt.Array.toArray</a></p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iterable</span> : Object<div class='sub-desc'><p><p>the iterable object to be turned into a true Array.</p></p>\n</div></li><li><span class='pre'>start</span> : Number<div class='sub-desc'><p><p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p></p>\n</div></li><li><span class='pre'>end</span> : Number<div class='sub-desc'><p><p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><p>array</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"Array.html#Ext-Array","filename":"Array.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[{"owner":"Ext.Array","meta":{},"tagname":"method","name":"clean","id":"method-clean"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"clone","id":"method-clone"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"contains","id":"method-contains"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"difference","id":"method-difference"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"each","id":"method-each"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"every","id":"method-every"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"from","id":"method-from"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"include","id":"method-include"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"indexOf","id":"method-indexOf"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"insert","id":"method-insert"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"lastIndexOf","id":"method-lastIndexOf"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"replace","id":"method-replace"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"slice","id":"method-slice"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"splice","id":"method-splice"},{"owner":"Ext.Array","meta":{},"tagname":"method","name":"toArray","id":"method-toArray"}],"property":[],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Array","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Array","mixedInto":[],"extends":null});