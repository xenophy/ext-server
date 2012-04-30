The mapping from namespaces to file paths

    {
        'Ext': '.', // This is set by default, Ext.layout.container.Container will be
                    // loaded from ./layout/Container.js

        'My': './src/my_own_folder' // My.layout.Container will be loaded from
                                    // ./src/my_own_folder/layout/Container.js
    }

Note that all relative paths are relative to the current HTML document.
If not being specified, for example, <code>Other.awesome.Class</code>
will simply be loaded from <code>./Other/awesome/Class.js</code>
