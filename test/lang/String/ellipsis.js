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

describe('Ext.String.ellipsis', function() {

    it('"abcdefghijk"が"abc..."に変換されること', function() {
        Ext.String.ellipsis('abcdefghijk', 6).should.equal('abc...');
    });

    it('"This is a pen."が"This is..."に変換されること', function() {
        Ext.String.ellipsis('This is a pen.', 10, true).should.equal('This is...');
    });

    it('"a"が"a"と変化がないこと', function() {
        Ext.String.ellipsis('a', 1).should.equal('a');
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
