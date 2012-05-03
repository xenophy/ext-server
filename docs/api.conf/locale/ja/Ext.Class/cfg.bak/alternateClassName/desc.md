クラスの代替名を定義します。使用例:

    Ext.define('Developer', {
        alternateClassName: ['Coder', 'Hacker'],
        code: function(msg) {
            alert('Typing... ' + msg);
        }
    });

    var joe = Ext.create('Developer');
    joe.code('stackoverflow');

    var rms = Ext.create('Hacker');
    rms.code('hack hack');
