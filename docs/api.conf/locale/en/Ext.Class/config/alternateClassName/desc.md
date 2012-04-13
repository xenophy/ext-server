Defines alternate names for this class.  For example:

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
