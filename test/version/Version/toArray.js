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

describe('Ext.Version.toArray', function() {

    var version = new Ext.Version("1.2.3beta");

    it("should return [1, 2, 3, 0, 'beta']", function() {
        [1, 2, 3, 0, 'beta'].forEach(function(v, c) {
            version.toArray()[c].should.equal(v);
        });
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
