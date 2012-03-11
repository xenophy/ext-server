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

describe('Ext.Array.splice', function() {

    it('配列の添え字2から３要素置換されること', function() {

        var a = new Array("A", "B", "C", "D", "E", "F", "G");

        Ext.Array.splice(a, 2, 3, "c", "d", "e");

        a[0].should.equal("A");
        a[1].should.equal("B");
        a[2].should.equal("c");
        a[3].should.equal("d");
        a[4].should.equal("e");
        a[5].should.equal("F");
        a[6].should.equal("G");

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
