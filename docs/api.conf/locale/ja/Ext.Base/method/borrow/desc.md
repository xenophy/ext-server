他のクラスのメンバーをこのクラスのプロトタイプに借用します。

    Ext.define('Bank', {
        money: '$$$',
        printMoney: function() {
            alert('$$$$$$$');
        }
    });

    Ext.define('Thief', {
        ...
    });

    Thief.borrow(Bank, ['money', 'printMoney']);

    var steve = new Thief();

    alert(steve.money); // alerts '$$$'
    steve.printMoney(); // alerts '$$$$$$$'
