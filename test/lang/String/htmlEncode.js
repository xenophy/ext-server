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

describe('Ext.String.htmlEncode', function() {

    it('"a&b>c<d"が"a&amp;b&gt;c&lt;d"に変換されること', function() {
        Ext.String.htmlEncode('a&b>c<d').should.equal('a&amp;b&gt;c&lt;d');
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
