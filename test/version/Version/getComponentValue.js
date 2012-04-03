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

describe('Ext.Version.getComponentValue', function() {

    it("should return 0", function() {
        Ext.Version.getComponentValue(undefined).should.equal(0);
    });

    it("should return -2", function() {
        Ext.Version.getComponentValue(-2).should.equal(-2);
    });

    it("should return 2", function() {
        Ext.Version.getComponentValue("2").should.equal(2);
    });

    it("should return -5", function() {
        Ext.Version.getComponentValue("alpha").should.equal(-5);
    });

    it("should return unknown", function() {
        Ext.Version.getComponentValue("unknown").should.equal("unknown");
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
