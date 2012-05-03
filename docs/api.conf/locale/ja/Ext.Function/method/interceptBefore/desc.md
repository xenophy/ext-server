既存のメソッドに動作を追加します。
オリジナルの動作を実行する前に実行されます。

例:

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

