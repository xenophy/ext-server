Ext.data.JsonP.Ext_JSON({"singleton":true,"statics":{"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[]},"parentMixins":[],"html_meta":{},"mixins":[],"code_type":"assignment","inheritable":false,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/JSON.html#Ext-JSON' target='_blank'>JSON.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-decode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-decode' class='name expandable'>decode</a>( <span class='pre'>String json, Boolean safe</span> ) : Object</div><div class='description'><div class='short'<p>Decodes (parses) a JSON string to an object. If...</p></div><div class='long'><p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : String<div class='sub-desc'><p>The JSON string\n</p>\n</div></li><li><span class='pre'>safe</span> : Boolean<div class='sub-desc'><p>(optional) Whether to return null or throw an exception if the JSON is invalid.\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The resulting object</p>\n</div></li></ul></div></div></div><div id='method-encode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encode' class='name expandable'>encode</a>( <span class='pre'>Object o</span> ) : String</div><div class='description'><div class='short'<p>Encodes an Object, Array or other value</p></div><div class='long'><p>Encodes an Object, Array or other value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The variable to encode\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The JSON string</p>\n</div></li></ul></div></div></div><div id='method-encodeDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encodeDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encodeDate' class='name expandable'>encodeDate</a>( <span class='pre'>Date d</span> ) : String</div><div class='description'><div class='short'<p>Encodes a Date. This returns the actual string ...</p></div><div class='long'><p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<strong>The returned value includes enclosing double quotation marks.</strong></p>\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n<p>To override this:</p>\n\n<pre><code>Ext.JSON.encodeDate = function(d) {\n    return Ext.Date.format(d, '\"Y-m-d\"');\n};\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d</span> : Date<div class='sub-desc'><p>The Date to encode\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The string literal to use in a JSON string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"aliases":{},"members":{"property":[],"css_var":[],"event":[],"method":[{"owner":"Ext.JSON","meta":{},"name":"decode","id":"method-decode","tagname":"method"},{"owner":"Ext.JSON","meta":{},"name":"encode","id":"method-encode","tagname":"method"},{"owner":"Ext.JSON","meta":{},"name":"encodeDate","id":"method-encodeDate","tagname":"method"}],"css_mixin":[],"cfg":[]},"superclasses":[],"component":false,"name":"Ext.JSON","inheritdoc":null,"tagname":"class","extends":null,"id":"class-Ext.JSON","mixedInto":[],"alternateClassNames":[],"requires":[],"files":[{"href":"JSON.html#Ext-JSON","filename":"JSON.js"}]});