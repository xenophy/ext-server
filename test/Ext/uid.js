/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.uid', function() {

    it('ユニークIDを生成すること', function() {

        var ret = [];

        for(var i=0; i<2; i++) {

            var v = Ext.uid(24);

            Ext.Array.contains(ret, v).should.equal(false);

            ret.push(v);

        }

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
