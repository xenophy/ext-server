/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.globalEval', function() {

    it('スコープが隔離されて実行できること', function() {

        var ret;

        Ext.globalEval([
            '(function(){',
            '    Ext.$Ext_globalEvalTest = true;',
            '})(Ext);'
        ].join(''));

        Ext.$Ext_globalEvalTest.should.be.ok;

    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
