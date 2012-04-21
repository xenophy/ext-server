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

describe('Ext.Version.constructor', function() {

    var version = new Ext.Version("1.2.3beta");

    it("Ext.Versionオブジェクトを指定して生成すると、同じオブジェクトが返却されること", function() {

//        (new Ext.Version(version)).should.equal(version);

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
