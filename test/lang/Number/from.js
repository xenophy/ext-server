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

describe('Ext.Number.from', function() {

    it('"1.23"を指定すると1(第二引数の値)を返却すること', function() {
        Ext.Number.from('1.23', 1);
    });

    it('"abc"を指定すると1(第二引数の値)を返却すること', function() {
        Ext.Number.from('abc', 1);
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
