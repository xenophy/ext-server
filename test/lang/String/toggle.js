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

describe('Ext.String.toggle', function() {

    it('文字列がトグルで取得できること', function() {

        var sort = 'ASC';

        sort = Ext.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('DESC');
        sort = Ext.String.toggle(sort, 'ASC', 'DESC');
        sort.should.equal('ASC');

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
