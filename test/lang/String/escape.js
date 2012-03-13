/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.String.escape', function() {

    it('"\'"が"\\\'"に変換されること', function() {
        Ext.String.escape("'").should.equal("\\'");
    });

    it('"\\"が"\\\\"に変換されること', function() {
        Ext.String.escape("\\").should.equal("\\\\");
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
