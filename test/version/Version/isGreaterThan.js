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

describe('Ext.Version.isGreaterThan', function() {

    var version = new Ext.Version("1.2.3beta");

    it("should be greater than 1.2.3alpha", function() {
        version.isGreaterThan("1.2.3alpha").should.be.ok;
    });

    it("should not be greater than 1.2.3RC", function() {
        version.isGreaterThan("1.2.3RC").should.not.be.ok;
    });

    it("should be greater than 1.2.3alpha", function() {
        version.gt("1.2.3alpha").should.be.ok;
    });

    it("should not be greater than 1.2.3RC", function() {
        version.gt("1.2.3RC").should.not.be.ok;
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
