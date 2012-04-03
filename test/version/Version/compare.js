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

describe('Ext.Version.compare', function() {

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.2").should.equal(1);
    });

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", 1).should.equal(1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", 2).should.equal(-1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.4").should.equal(-1);
    });

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3dev").should.equal(1);
    });

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3alpha").should.equal(1);
    });

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3a").should.equal(1);
    });

    it("should return 0", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3b").should.equal(0);
    });

    it("should return 0", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3beta").should.equal(0);
    });

    it("should return 1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3alpha").should.equal(1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3RC").should.equal(-1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3rc").should.equal(-1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3#").should.equal(-1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3pl").should.equal(-1);
    });

    it("should return -1", function() {
        Ext.Version.compare("1.2.3beta", "1.2.3p").should.equal(-1);
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
