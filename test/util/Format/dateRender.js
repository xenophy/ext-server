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

describe('Ext.util.Format.dateRender', function() {

    it('日付をフォーマットする関数を生成できること', function() {

        var f = Ext.util.Format.dateRenderer('Y-m-d');
        var dt = new Date('2006-01-01');
        f(dt).should.equal('2006-01-01');

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
