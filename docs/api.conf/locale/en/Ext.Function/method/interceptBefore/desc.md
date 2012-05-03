Adds behavior to an existing method that is executed before the
original behavior of the function.  For example:

    var soup = {
        contents: [],
        add: function(ingredient) {
            this.contents.push(ingredient);
        }
    };
    Ext.Function.interceptBefore(soup, "add", function(ingredient){
        if (!this.contents.length && ingredient !== "water") {
            // Always add water to start with
            this.contents.push("water");
        }
    });
    soup.add("onions");
    soup.add("salt");
    soup.contents; // will contain: water, onions, salt

