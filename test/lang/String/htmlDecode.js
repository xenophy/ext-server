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

describe('Ext.String.htmlDecode', function() {

    it('"a&amp;b&gt;c&lt;d"が"a&b>c<d"に変換されること', function() {
        Ext.String.htmlDecode('a&amp;b&gt;c&lt;d').should.equal('a&b>c<d');
    });

    it('"&#65;&#66;&#67;"が"ABC"に変換されること', function() {
        Ext.String.htmlDecode('&#65;&#66;&#67;').should.equal('ABC');
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
