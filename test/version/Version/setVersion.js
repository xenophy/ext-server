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

describe('Ext.Version.setVersion', function() {

    it("should return an instance of Ext.Version", function() {

        Ext.setVersion("test", "1.0.1");
        (Ext.getVersion("test") instanceof Ext.Version).should.equal(true);

        Ext.getVersion().toString().should.equal("1.0.1");

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
