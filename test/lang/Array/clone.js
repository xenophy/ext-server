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

describe('Ext.Array.clone', function() {

    it('配列長、内容が同一であり、別オブジェクトであること', function() {

        var a = [1,2,3],
            ret = Ext.Array.clone(a);

        ret.length.should.equal(3);
        ret[0].should.equal(a[0]);
        ret[1].should.equal(a[1]);
        ret[2].should.equal(a[2]);
        ret.should.not.equal(a);

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
