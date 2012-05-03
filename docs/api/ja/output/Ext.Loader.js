Ext.data.JsonP.Ext_Loader({"parentMixins":[],"singleton":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Loader.html#Ext-Loader' target='_blank'>Loader.js</a></div></pre><div class='doc-contents'><p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-disableCaching' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-disableCaching' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-disableCaching' class='name expandable'>disableCaching</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-disableCachingParam' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-disableCachingParam' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-disableCachingParam' class='name expandable'>disableCachingParam</a><span> : String</span></div><div class='description'><div class='short'>The get parameter name for the cache buster's timestamp. ...</div><div class='long'><p>The get parameter name for the cache buster's timestamp.</p>\n<p>Defaults to: <code>&quot;_dc&quot;</code></p></div></div></div><div id='cfg-enabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-enabled' class='name expandable'>enabled</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-garbageCollect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-garbageCollect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-garbageCollect' class='name expandable'>garbageCollect</a><span> : Boolean</span></div><div class='description'><div class='short'>True to prepare an asynchronous script tag for garbage collection (effective only\nif preserveScripts is false) ...</div><div class='long'><p>True to prepare an asynchronous script tag for garbage collection (effective only\nif <a href=\"#!/api/Ext.Loader-cfg-preserveScripts\" rel=\"Ext.Loader-cfg-preserveScripts\" class=\"docClass\">preserveScripts</a> is false)</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-paths' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-paths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-paths' class='name expandable'>paths</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<p>Defaults to: <code>{&quot;Ext&quot;: &quot;.&quot;}</code></p></div></div></div><div id='cfg-preserveScripts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-preserveScripts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-preserveScripts' class='name expandable'>preserveScripts</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-scriptChainDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-scriptChainDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-scriptChainDelay' class='name expandable'>scriptChainDelay</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-scriptCharset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-cfg-scriptCharset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-cfg-scriptCharset' class='name expandable'>scriptCharset</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-classNameToFilePathMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-classNameToFilePathMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-classNameToFilePathMap' class='name not-expandable'>classNameToFilePathMap</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-config' class='name not-expandable'>config</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>Configuration</p>\n</div><div class='long'><p>Configuration</p>\n</div></div></div><div id='property-hasFileLoadError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-hasFileLoadError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-hasFileLoadError' class='name expandable'>hasFileLoadError</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-history' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-history' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-history' class='name not-expandable'>history</a><span> : Array</span></div><div class='description'><div class='short'><p></p>\n</div><div class='long'><p></p>\n</div></div></div><div id='property-isClassFileLoaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-isClassFileLoaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-isClassFileLoaded' class='name not-expandable'>isClassFileLoaded</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>{Ext_Loader:method-isClassFileLoaded:desc}</p>\n</div><div class='long'><p>{Ext_Loader:method-isClassFileLoaded:desc}</p>\n</div></div></div><div id='property-isFileLoaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-isFileLoaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-isFileLoaded' class='name not-expandable'>isFileLoaded</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-isInHistory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-isInHistory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-isInHistory' class='name not-expandable'>isInHistory</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-isLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-isLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-isLoading' class='name expandable'>isLoading</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-numLoadedFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-numLoadedFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-numLoadedFiles' class='name expandable'>numLoadedFiles</a><span> : Number</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-numPendingFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-numPendingFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-numPendingFiles' class='name expandable'>numPendingFiles</a><span> : Number</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-optionalRequires' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-optionalRequires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-optionalRequires' class='name not-expandable'>optionalRequires</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>{Ext_Loader:method-optionalRequires:desc}</p>\n</div><div class='long'><p>{Ext_Loader:method-optionalRequires:desc}</p>\n</div></div></div><div id='property-queue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-queue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-queue' class='name not-expandable'>queue</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p></p>\n</div><div class='long'><p></p>\n</div></div></div><div id='property-readyListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-readyListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-readyListeners' class='name not-expandable'>readyListeners</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>{Ext_Loader:method-readyListeners:desc}</p>\n</div><div class='long'><p>{Ext_Loader:method-readyListeners:desc}</p>\n</div></div></div><div id='property-requiresMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-requiresMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-requiresMap' class='name not-expandable'>requiresMap</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'><p>{Ext_Loader:method-requiresMap:desc}</p>\n</div><div class='long'><p>{Ext_Loader:method-requiresMap:desc}</p>\n</div></div></div><div id='property-syncModeEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-property-syncModeEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-property-syncModeEnabled' class='name expandable'>syncModeEnabled</a><span> : Boolean</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addUsedClass' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-addUsedClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-addUsedClass' class='name expandable'>addUsedClass</a>( <span class='pre'>Object references</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Ensure that any classes referenced in the uses property are loaded. ...</div><div class='long'><p>Ensure that any classes referenced in the <code>uses</code> property are loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>references</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cleanupScriptElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-cleanupScriptElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-cleanupScriptElement' class='name expandable'>cleanupScriptElement</a>( <span class='pre'>Object script, Object remove, Object collect</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>script</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>remove</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>collect</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-disableCacheBuster' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-disableCacheBuster' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-disableCacheBuster' class='name expandable'>disableCacheBuster</a>( <span class='pre'>Boolean disable, [String path]</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Turns on or off the \"cache buster\" applied to dynamically loaded scripts. ...</div><div class='long'><p>Turns on or off the \"cache buster\" applied to dynamically loaded scripts. Normally\ndynamically loaded scripts have an extra query parameter appended to avoid stale\ncached scripts. This method can be used to disable this mechanism, and is primarily\nuseful for testing. This is done using a cookie.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disable</span> : Boolean<div class='sub-desc'><p>True to disable the cache buster.</p>\n</div></li><li><span class='pre'>path</span> : String (optional)<div class='sub-desc'><p>An optional path to scope the cookie.</p>\n<p>Defaults to: <code>&quot;/&quot;</code></p></div></li></ul></div></div></div><div id='method-exclude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-exclude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-exclude' class='name expandable'>exclude</a>( <span class='pre'>Array excludes</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>excludes</span> : Array<div class='sub-desc'><p>{Ext_Loader:method-exclude:param_excludes}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>String name</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>{Ext_Loader:method-getConfig:param_name}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-getPath' class='name expandable'>getPath</a>( <span class='pre'>String className</span> ) : String</div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String<div class='sub-desc'><p>{Ext_Loader:method-getPath:desc}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_Loader:method-getPath:desc}</p>\n</div></li></ul></div></div></div><div id='method-getPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-getPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-getPrefix' class='name expandable'>getPrefix</a>( <span class='pre'>String className</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-historyPush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-historyPush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-historyPush' class='name expandable'>historyPush</a>( <span class='pre'>String className</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String<div class='sub-desc'><p>{Ext_Loader:method-historyPush:param_className}</p>\n</div></li></ul></div></div></div><div id='method-onFileLoadError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-onFileLoadError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-onFileLoadError' class='name expandable'>onFileLoadError</a>( <span class='pre'>Object className, Object filePath, Object errorMessage, Object isSynchronous</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>filePath</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>errorMessage</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>isSynchronous</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFileLoaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-onFileLoaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-onFileLoaded' class='name expandable'>onFileLoaded</a>( <span class='pre'>String className, String filePath</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String<div class='sub-desc'><p>{Ext_Loader:method-onFileLoaded:param_className}</p>\n</div></li><li><span class='pre'>filePath</span> : String<div class='sub-desc'><p>{Ext_Loader:method-onFileLoaded:param_filePath}</p>\n</div></li></ul></div></div></div><div id='method-refreshQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-refreshQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-refreshQueue' class='name expandable'>refreshQueue</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n</div></div></div><div id='method-removeScriptElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-removeScriptElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-removeScriptElement' class='name expandable'>removeScriptElement</a>( <span class='pre'>Object url</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-require' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-require' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-require' class='name expandable'>require</a>( <span class='pre'>String/Array expressions, Function fn, Object scope, String/Array excludes</span> )</div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expressions</span> : String/Array<div class='sub-desc'><p>{Ext_Loader:method-require:param_expressions}</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>{Ext_Loader:method-require:param_fn}</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>{Ext_Loader:method-require:param_scope}</p>\n</div></li><li><span class='pre'>excludes</span> : String/Array<div class='sub-desc'><p>{Ext_Loader:method-require:param_excludes}</p>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'>Object config</span> ) : <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>{Ext_Loader:method-setConfig:param_config}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='method-setPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-setPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-setPath' class='name expandable'>setPath</a>( <span class='pre'>String/Object name, String path</span> ) : <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String/Object<div class='sub-desc'><p>{Ext_Loader:method-setPath:desc}</p>\n</div></li><li><span class='pre'>path</span> : String<div class='sub-desc'><p>{Ext_Loader:method-setPath:desc}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a></span><div class='sub-desc'><p>{Ext_Loader:method-setPath:desc}</p>\n</div></li></ul></div></div></div><div id='method-syncRequire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-syncRequire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-syncRequire' class='name expandable'>syncRequire</a>( <span class='pre'>String/Array expressions, Function fn, Object scope, String/Array excludes</span> )</div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expressions</span> : String/Array<div class='sub-desc'><p>{Ext_Loader:method-syncRequire:param_expressions}</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>{Ext_Loader:method-syncRequire:param_fn}</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>{Ext_Loader:method-syncRequire:param_scope}</p>\n</div></li><li><span class='pre'>excludes</span> : String/Array<div class='sub-desc'><p>{Ext_Loader:method-syncRequire:param_excludes}</p>\n</div></li></ul></div></div></div><div id='method-triggerReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Loader'>Ext.Loader</span><br/><a href='source/Loader.html#Ext-Loader-method-triggerReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Loader-method-triggerReady' class='name expandable'>triggerReady</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"Loader.html#Ext-Loader","filename":"Loader.js"}],"uses":[],"members":{"cfg":[{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"disableCaching","id":"cfg-disableCaching"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"disableCachingParam","id":"cfg-disableCachingParam"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"enabled","id":"cfg-enabled"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"garbageCollect","id":"cfg-garbageCollect"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"paths","id":"cfg-paths"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"preserveScripts","id":"cfg-preserveScripts"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"scriptChainDelay","id":"cfg-scriptChainDelay"},{"owner":"Ext.Loader","meta":{},"tagname":"cfg","name":"scriptCharset","id":"cfg-scriptCharset"}],"event":[],"method":[{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"addUsedClass","id":"method-addUsedClass"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"cleanupScriptElement","id":"method-cleanupScriptElement"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"disableCacheBuster","id":"method-disableCacheBuster"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"exclude","id":"method-exclude"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"getConfig","id":"method-getConfig"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"getPath","id":"method-getPath"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"getPrefix","id":"method-getPrefix"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"historyPush","id":"method-historyPush"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"onFileLoadError","id":"method-onFileLoadError"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"onFileLoaded","id":"method-onFileLoaded"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"refreshQueue","id":"method-refreshQueue"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"removeScriptElement","id":"method-removeScriptElement"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"require","id":"method-require"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"setConfig","id":"method-setConfig"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"setPath","id":"method-setPath"},{"owner":"Ext.Loader","meta":{},"tagname":"method","name":"syncRequire","id":"method-syncRequire"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"method","name":"triggerReady","id":"method-triggerReady"}],"property":[{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"classNameToFilePathMap","id":"property-classNameToFilePathMap"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"config","id":"property-config"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"hasFileLoadError","id":"property-hasFileLoadError"},{"owner":"Ext.Loader","meta":{},"tagname":"property","name":"history","id":"property-history"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"isClassFileLoaded","id":"property-isClassFileLoaded"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"isFileLoaded","id":"property-isFileLoaded"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"isInHistory","id":"property-isInHistory"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"isLoading","id":"property-isLoading"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"numLoadedFiles","id":"property-numLoadedFiles"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"numPendingFiles","id":"property-numPendingFiles"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"optionalRequires","id":"property-optionalRequires"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"queue","id":"property-queue"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"readyListeners","id":"property-readyListeners"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"requiresMap","id":"property-requiresMap"},{"owner":"Ext.Loader","meta":{"private":true},"tagname":"property","name":"syncModeEnabled","id":"property-syncModeEnabled"}],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Loader","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Loader","mixedInto":[],"extends":null});