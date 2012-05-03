Adds behavior to an existing method that is executed after the
original behavior of the function.  For example:

    var soup = {
        contents: [],
        add: function(ingredient) {
            this.contents.push(ingredient);
        }
    };
    Ext.Function.interceptAfter(soup, "add", function(ingredient){
        // Always add a bit of extra salt
        this.contents.push("salt");
    });
    soup.add("water");
    soup.add("onions");
    soup.contents; // will contain: water, salt, onions, salt
