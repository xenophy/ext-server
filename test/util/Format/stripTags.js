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

describe('Ext.util.Format.stripTags', function() {

    it('タグを除去できること', function() {

        var str = [
            '<html>',
            '<head>',
            '<script src="./test.js"></script>',
            '</head>',
            '</html>'
        ].join("");

        var ret = '';

        Ext.util.Format.stripTags(str).should.equal(ret);

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
