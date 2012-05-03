Instantiate a class by either full name, alias or alternate name.

If
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass" >Ext.Loader</a>
is
<a href="#!/api/Ext.Loader-method-setConfig" rel="Ext.Loader-method-setConfig" class="docClass" >enabled</a>
and the class has
not been defined yet, it will attempt to load the class via synchronous loading.

For example, all these three lines return the same result:

     // alias
     var window = Ext.create('widget.window', {
         width: 600,
         height: 800,
         ...
     });

     // alternate name
     var window = Ext.create('Ext.Window', {
         width: 600,
         height: 800,
         ...
     });

     // full class name
     var window = Ext.create('Ext.window.Window', {
         width: 600,
         height: 800,
         ...
     });

     // single object with xclass property:
     var window = Ext.create({
         xclass: 'Ext.window.Window', // any valid value for 'name' (above)
         width: 600,
         height: 800,
         ...
     });
