Override members of this class. Overridden methods can be invoked via
<a href="#!/api/Ext.Base-method-callParent" rel="Ext.Base-method-callParent" class="docClass" >callParent</a>.

    Ext.define('My.Cat', {
        constructor: function() {
            alert("I'm a cat!");
        }
    });

    My.Cat.override({
        constructor: function() {
            alert("I'm going to be a cat!");

            this.callParent(arguments);

            alert("Meeeeoooowwww");
        }
    });

    var kitty = new My.Cat(); // alerts "I'm going to be a cat!"
                              // alerts "I'm a cat!"
                              // alerts "Meeeeoooowwww"

As of 4.1, direct use of this method is deprecated. Use
<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" >Ext.define</a>
instead:

    Ext.define('My.CatOverride', {
        override: 'My.Cat',
        constructor: function() {
            alert("I'm going to be a cat!");

            this.callParent(arguments);

            alert("Meeeeoooowwww");
        }
    });

The above accomplishes the same result but can be managed by the
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass" >Ext.Loader</a>
which can properly order the override and its target class and the build process
can determine whether the override is needed based on the required state of the
target class (My.Cat).

