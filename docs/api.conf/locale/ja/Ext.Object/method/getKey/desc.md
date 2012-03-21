指定した値に対応する、最初に一致したキーを返します。 一致する値が存在しない場合はnullを返します。

    var person = {
        name: 'Jacky',
        loves: 'food'
    };
    
    alert(Ext.Object.getKey(person, 'food')); // alerts 'loves'
