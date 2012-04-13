Instantiate a class by its alias; usually invoked by the convenient shorthand
<a href="#!/api/Ext-method-createByAlias" rel="Ext-method-createByAlias" class="docClass" id="ext-gen1353">Ext.createByAlias</a>
If
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass" id="ext-gen1357">Ext.Loader</a>
is
<a href="#!/api/Ext.Loader-method-setConfig" rel="Ext.Loader-method-setConfig" class="docClass" id="ext-gen1351">enabled</a>
and the class has not been defined yet, it will
attempt to load the class via synchronous loading.

    var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });
