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

describe('Ext.Array.slice', function() {

    it('添え字1から末尾までの配列を返すこと', function() {

        var array = ['a', 'b', 'c', 'd'], ret;

        ret = Ext.Array.slice(['a', 'b', 'c', 'd'], 1);

        ret[0].should.equal('b');
        ret[1].should.equal('c');
        ret[2].should.equal('d');
    });

    it('添え字2から範囲外の添え字である4を指定して末尾までの配列を返すこと', function() {

        var array = ['a', 'b', 'c', 'd'], ret;

        ret = Ext.Array.slice(array, 2, 4);

        ret[0].should.equal('c');
        ret[1].should.equal('d');
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
