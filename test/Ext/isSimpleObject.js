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

describe('Ext.isSimpleObject', function() {

    it('オブジェクトをtrueと判定できること', function() {

        Ext.isSimpleObject({}).should.be.ok;

    });

    it('関数オブジェクトをfalseと判定できること', function() {

        Ext.isSimpleObject(function() {}).should.not.be.ok;

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
