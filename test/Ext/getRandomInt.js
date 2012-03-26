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

describe('Ext.getRandomInt', function() {

    it('ランダム値を取得できること', function() {

        var n;

        n = Ext.getRandomInt(0, 1024);
        if(n > 1024) { assert.ok(false); }

        n = Ext.getRandomInt(0, 0);
        if(n > 0) { assert.ok(false); }
        n.should.equal(0);

        n = Ext.getRandomInt(0, 1);
        if(n > 1) { assert.ok(false); }

        n = Ext.getRandomInt(1, 0);
        n.should.equal(1);

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
