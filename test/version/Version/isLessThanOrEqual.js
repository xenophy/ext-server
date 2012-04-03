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

describe('Ext.Version.isLessThanOrEqual', function() {

    var version = new Ext.Version("1.2.3beta");

    it("should not be smaller than 1.2.3alpha", function() {
        version.isLessThanOrEqual("1.2.3alpha").should.not.be.ok;
    });

    it("should not be smaller than 1.2.3beta", function() {
        version.isLessThanOrEqual("1.2.3beta").should.be.ok;
    });

    it("should be smaller than 1.2.3RC", function() {
        version.isLessThanOrEqual("1.2.3RC").should.be.ok;
    });

    it("should not be smaller than 1.2.3alpha", function() {
        version.ltEq("1.2.3alpha").should.not.be.ok;
    });

    it("should not be smaller than 1.2.3beta", function() {
        version.ltEq("1.2.3beta").should.be.ok;
    });

    it("should be smaller than 1.2.3RC", function() {
        version.ltEq("1.2.3RC").should.be.ok;
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
