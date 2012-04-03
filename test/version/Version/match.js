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

describe('Ext.Version.match', function() {

    var version = new Ext.Version("1.2.3beta");

    it("should match integer 1", function() {
        version.match(1).should.be.ok;
    });

    it("should match float 1.2", function() {
        version.match(1.2).should.be.ok;
    });

    it("should match string 1.2.3", function() {
        version.match("1.2.3").should.be.ok;
    });

    it("should not match string 1.2.3alpha", function() {
        version.match("1.2.3alpha").should.not.be.ok;
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
