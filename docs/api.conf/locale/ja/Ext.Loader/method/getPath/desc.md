Translates a className to a file path by adding the
the proper prefix and converting the .'s to /'s. For example:

    Ext.Loader.setPath('My', '/path/to/My');

    alert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/path/to/My/awesome/Class.js'

Note that the deeper namespace levels, if explicitly set, are always resolved first. For example:

    Ext.Loader.setPath({
        'My': '/path/to/lib',
        'My.awesome': '/other/path/for/awesome/stuff',
        'My.awesome.more': '/more/awesome/path'
    });

    alert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/other/path/for/awesome/stuff/Class.js'

    alert(Ext.Loader.getPath('My.awesome.more.Class')); // alerts '/more/awesome/path/Class.js'

    alert(Ext.Loader.getPath('My.cool.Class')); // alerts '/path/to/lib/cool/Class.js'

    alert(Ext.Loader.getPath('Unknown.strange.Stuff')); // alerts 'Unknown/strange/Stuff.js'
