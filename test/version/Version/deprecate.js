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

describe('Ext.Version.deprecate', function() {

    it("バージョンごとに処理を切り替えられること", function() {

        var trace;

        Ext.setVersion("test", "1.0.1");

        Ext.deprecate('test', '1.0.1', function() {
            trace = true;
        });

        trace.should.be.ok;
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
