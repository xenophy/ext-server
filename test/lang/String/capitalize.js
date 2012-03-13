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

describe('Ext.String.capitalize', function() {

    it('"extserver"が"Extserver"に変換されること', function() {
        Ext.String.capitalize('extserver').should.equal('Extserver');
    });

    it('"ExtServer"が"ExtServer"と変化がないこと', function() {
        Ext.String.capitalize('ExtServer').should.equal('ExtServer');
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
