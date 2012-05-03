Instantiate a class by its alias; usually invoked by the convenient shorthand
<a href="#!/api/Ext-method-createByAlias" rel="Ext-method-createByAlias" class="docClass" >Ext.createByAlias</a>
If
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass" >Ext.Loader</a>
is
<a href="#!/api/Ext.Loader-method-setConfig" rel="Ext.Loader-method-setConfig" class="docClass" >enabled</a>
and the class has not been defined yet, it will
attempt to load the class via synchronous loading.

    var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });
