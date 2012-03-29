The name of the property in the global namespace (The <code>window</code> in browser environments) which refers to the current instance of Ext.

This is usually <code>"Ext"</code>, but if a sandboxed build of ExtJS is being used, this will be an alternative name.

If code is being generated for use by <code>eval</code> or to create a <code>new Function</code>, and the global instance
of Ext must be referenced, this is the name that should be built into the code.
