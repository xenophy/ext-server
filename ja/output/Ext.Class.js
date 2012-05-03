Ext.data.JsonP.Ext_Class({"parentMixins":[],"singleton":false,"statics":{"cfg":[],"property":[],"method":[{"owner":"Ext.Class","meta":{"private":true,"static":true},"tagname":"method","name":"getDefaultPreprocessors","id":"static-method-getDefaultPreprocessors"},{"owner":"Ext.Class","meta":{"private":true,"static":true},"tagname":"method","name":"getPreprocessor","id":"static-method-getPreprocessor"},{"owner":"Ext.Class","meta":{"private":true,"static":true},"tagname":"method","name":"registerPreprocessor","id":"static-method-registerPreprocessor"},{"owner":"Ext.Class","meta":{"private":true,"static":true},"tagname":"method","name":"setDefaultPreprocessorPosition","id":"static-method-setDefaultPreprocessorPosition"},{"owner":"Ext.Class","meta":{"private":true,"static":true},"tagname":"method","name":"setDefaultPreprocessors","id":"static-method-setDefaultPreprocessors"}],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Class.html#Ext-Class' target='_blank'>Class.js</a></div><div class='dependency'><a href='source/Class.html#Ext-Class' target='_blank'>Class.js</a></div></pre><div class='doc-contents'><p><p>フレームワーク全体のクラス作成を処理します。\nほとんどの場合、名前空間と動的な依存関係の解決を有効にする、より高レベルのラッパーである\nExt.ClassManager.create\nのエイリアスであるExt.defineを代わりに使用する必要があります。\nHandles class creation throughout the framework.</p>\n\n<p>このクラスは\n<a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\" >Ext.ClassManager</a>\nが使う低レベルのファクトリーで、通常は直接使いません。</p>\n\n<p>Ext.Classを直接使うと、\n<a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\" >Ext.ClassManager</a>\nによって利用可能になっている、\nネームスペース、エイリアス、依存関係によるローディングが失敗します。\nExt.Classを直接使う唯一の機会は別名クラスを作成することです。</p>\n\n<p>クラスを生成する時には、\nネームスペースや動的依存関係を解決することができる\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\" >Ext.define</a>\n(これは\n<a href=\"#!/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>\nのエリアスです)\nを使います。</p>\n\n<p>Ext.Classはファクトリーであり継承してはいけません。</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-alias' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alias' class='name not-expandable'>alias</a><span> : String[]</span></div><div class='description'><div class='short'><p>{Ext_Class:config-alias:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-alias:desc}</p>\n</div></div></div><div id='cfg-alternateClassName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-alternateClassName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-alternateClassName' class='name not-expandable'>alternateClassName</a><span> : String/String[]</span></div><div class='description'><div class='short'><p>{Ext_Class:config-alternateClassName:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-alternateClassName:desc}</p>\n</div></div></div><div id='cfg-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-config' class='name not-expandable'>config</a><span> : Object</span></div><div class='description'><div class='short'><p>{Ext_Class:config-config:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-config:desc}</p>\n</div></div></div><div id='cfg-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-extend' class='name not-expandable'>extend</a><span> : String</span></div><div class='description'><div class='short'><p>{Ext_Class:config-extend:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-extend:desc}</p>\n</div></div></div><div id='cfg-inheritableStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-inheritableStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-inheritableStatics' class='name not-expandable'>inheritableStatics</a><span> : Object</span></div><div class='description'><div class='short'><p>{Ext_Class:config-inheritableStatics:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-inheritableStatics:desc}</p>\n</div></div></div><div id='cfg-mixins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-mixins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-mixins' class='name not-expandable'>mixins</a><span> : String[]/Object</span></div><div class='description'><div class='short'><p>{Ext_Class:config-mixins:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-mixins:desc}</p>\n</div></div></div><div id='cfg-requires' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Loader.html#Ext-Class-cfg-requires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-requires' class='name not-expandable'>requires</a><span> : String[]</span></div><div class='description'><div class='short'><p>{Ext_Class:config-requires:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-requires:desc}</p>\n</div></div></div><div id='cfg-singleton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/ClassManager.html#Ext-Class-cfg-singleton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-singleton' class='name not-expandable'>singleton</a><span> : Boolean</span></div><div class='description'><div class='short'><p>{Ext_Class:config-singleton:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-singleton:desc}</p>\n</div></div></div><div id='cfg-statics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-cfg-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-statics' class='name not-expandable'>statics</a><span> : Object</span></div><div class='description'><div class='short'><p>{Ext_Class:config-statics:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-statics:desc}</p>\n</div></div></div><div id='cfg-uses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Loader.html#Ext-Class-cfg-uses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-cfg-uses' class='name not-expandable'>uses</a><span> : String[]</span></div><div class='description'><div class='short'><p>{Ext_Class:config-uses:desc}</p>\n</div><div class='long'><p>{Ext_Class:config-uses:desc}</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultPreprocessors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-property-defaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-property-defaultPreprocessors' class='name expandable'>defaultPreprocessors</a><span> : Array</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-preprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-property-preprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-property-preprocessors' class='name expandable'>preprocessors</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-create' class='name expandable'>create</a>( <span class='pre'>Object Class, Object classData, Object onClassCreated</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>classData</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>onClassCreated</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPreprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-getPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-getPreprocessors' class='name expandable'>getPreprocessors</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBeforeCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-onBeforeCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-onBeforeCreated' class='name expandable'>onBeforeCreated</a>( <span class='pre'>Object Class, Object data, Object hooks</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>hooks</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-process' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-method-process' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-method-process' class='name expandable'>process</a>( <span class='pre'>Object Class, Object data, Object onCreated</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>onCreated</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-getDefaultPreprocessors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-getDefaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-getDefaultPreprocessors' class='name expandable'>getDefaultPreprocessors</a>( <span class='pre'></span> ) : Function[]<strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>デフォルトで設定されているpre-processorsの配列スタックを取得します。</p> ...</div><div class='long'><p><p>デフォルトで設定されているpre-processorsの配列スタックを取得します。</p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function[]</span><div class='sub-desc'><p>defaultPreprocessors {Ext_Class:method-getDefaultPreprocessors:return}</p>\n</div></li></ul></div></div></div><div id='static-method-getPreprocessor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-getPreprocessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-getPreprocessor' class='name expandable'>getPreprocessor</a>( <span class='pre'>String name</span> ) : Function<strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'> ...</div><div class='long'><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>{Ext_Class:method-getPreprocessor:param_name}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p></p>\n</div></li></ul></div></div></div><div id='static-method-registerPreprocessor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-registerPreprocessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-registerPreprocessor' class='name expandable'>registerPreprocessor</a>( <span class='pre'>String name, Function fn</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>クラス生成処理で使用される、新しいpre-processorを登録します。</p> ...</div><div class='long'><p><p>クラス生成処理で使用される、新しいpre-processorを登録します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p><p>pre-processorの名前</p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>実行されるコールバック関数。 典型的なフォーマット:</p>\n\n<pre><code>function(cls, data, fn) {\n    // Your code here\n\n    // Execute this when the processing is finished.\n    // Asynchronous processing is perfectly ok\n    if(fn) {\n        fn.call(this, cls, data);\n    }\n});\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Function<div class='sub-desc'><p><p>生成されたクラス</p></p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p><p><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>\nのコンストラクタで渡されたプロパティのセット</p></p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p><p>処理が同期か非同期かに関わらず、このpre-processorの処理が終わる時に<strong>実行されなければならない</strong>コールバック関数。</p></p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p><p>this</p></p>\n</div></li></ul></div></div></div><div id='static-method-setDefaultPreprocessorPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-setDefaultPreprocessorPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-setDefaultPreprocessorPosition' class='name expandable'>setDefaultPreprocessorPosition</a>( <span class='pre'>String name, String offset, String relativeName</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. ...</div><div class='long'><p>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. For example:</p>\n\n<pre><code>Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {\n    // Your code here\n\n    if(fn) {\n        fn.call(this, cls, data);\n    }\n}).setDefaultPreprocessorPosition('debug', 'last');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The pre-processor name. Note that it needs to be registered with\nregisterPreprocessor before this</p>\n</div></li><li><span class='pre'>offset</span> : String<div class='sub-desc'><p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n</div></li><li><span class='pre'>relativeName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-setDefaultPreprocessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Class'>Ext.Class</span><br/><a href='source/Class.html#Ext-Class-static-method-setDefaultPreprocessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Class-static-method-setDefaultPreprocessors' class='name expandable'>setDefaultPreprocessors</a>( <span class='pre'>Array preprocessors</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='private signature'>private</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>デフォルトのpre-processorsに、デフォルトの配列スタックを設定します。</p> ...</div><div class='long'><p><p>デフォルトのpre-processorsに、デフォルトの配列スタックを設定します。</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>preprocessors</span> : Array<div class='sub-desc'><p>{Ext_Class:method-setDefaultPreprocessors:param_preprocesors}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p><p>this</p></p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"nop","inheritable":false,"meta":{},"files":[{"href":"Class.html#Ext-Class","filename":"Class.js"},{"href":"Class.html#Ext-Class","filename":"Class.js"}],"uses":[],"members":{"cfg":[{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"alias","id":"cfg-alias"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"alternateClassName","id":"cfg-alternateClassName"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"config","id":"cfg-config"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"extend","id":"cfg-extend"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"inheritableStatics","id":"cfg-inheritableStatics"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"mixins","id":"cfg-mixins"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"requires","id":"cfg-requires"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"singleton","id":"cfg-singleton"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"statics","id":"cfg-statics"},{"owner":"Ext.Class","meta":{},"tagname":"cfg","name":"uses","id":"cfg-uses"}],"event":[],"method":[{"owner":"Ext.Class","meta":{"private":true},"tagname":"method","name":"create","id":"method-create"},{"owner":"Ext.Class","meta":{"private":true},"tagname":"method","name":"getPreprocessors","id":"method-getPreprocessors"},{"owner":"Ext.Class","meta":{"private":true},"tagname":"method","name":"onBeforeCreated","id":"method-onBeforeCreated"},{"owner":"Ext.Class","meta":{"private":true},"tagname":"method","name":"process","id":"method-process"}],"property":[{"owner":"Ext.Class","meta":{"private":true},"tagname":"property","name":"defaultPreprocessors","id":"property-defaultPreprocessors"},{"owner":"Ext.Class","meta":{"private":true},"tagname":"property","name":"preprocessors","id":"property-preprocessors"}],"css_var":[],"css_mixin":[]},"html_meta":{},"private":null,"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Class","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Class","mixedInto":[],"extends":null});