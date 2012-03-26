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

describe('Ext.util.Format.fileSize', function() {

    it('ファイルサイズを付加して出力できること', function() {

        Ext.util.Format.fileSize(500).should.equal('500 bytes');
        Ext.util.Format.fileSize(5000).should.equal('4.9 KB');
        Ext.util.Format.fileSize(5000000).should.equal('4.8 MB');

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
