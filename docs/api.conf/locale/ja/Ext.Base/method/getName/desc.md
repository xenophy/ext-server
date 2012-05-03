現在のクラス名を文字列形式で取得します。

    Ext.define('My.cool.Class', {
        constructor: function() {
            alert(this.self.getName()); // alerts 'My.cool.Class'
        }
    });
    
    My.cool.Class.getName(); // 'My.cool.Class'

