Get the current class' name in string format.

    Ext.define('My.cool.Class', {
        constructor: function() {
            alert(this.self.getName()); // alerts 'My.cool.Class'
        }
    });
    
    My.cool.Class.getName(); // 'My.cool.Class'

