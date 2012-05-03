Handles class creation throughout the framework. This is a low level factory that is used by 
<a href="#!/api/Ext.ClassManager" rel="Ext.ClassManager" class="docClass" >Ext.ClassManager</a>
and generally should not be used directly.
If you choose to use Ext.Class you will lose out on the namespace, aliasing and depency loading
features made available by
<a href="#!/api/Ext.ClassManager" rel="Ext.ClassManager" class="docClass" >Ext.ClassManager</a>
. The only time you would use Ext.Class directly is to create an anonymous class.

If you wish to create a class you should use
<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" >Ext.define</a>
which aliases
<a href="#!/api/Ext.ClassManager-method-create" rel="Ext.ClassManager-method-create" class="docClass">Ext.ClassManager.create</a>
to enable namespacing and dynamic dependency resolution.

Ext.Class is the factory and **not** the superclass of everything. For the base class that **all** Ext classes inherit
from, see
<a href="#!/api/Ext.Class" rel="Ext.Class" class="docClass" >Ext.Class</a>.
