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

describe('Ext.String.urlAppend', function() {

    it('"http://www.xenophy.com/"に"hoge"を追加すると"http://www.xenophy.com/?hoge"になること', function() {
        Ext.String.urlAppend('http://www.xenophy.com/', 'hoge').should.equal('http://www.xenophy.com/?hoge');
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
