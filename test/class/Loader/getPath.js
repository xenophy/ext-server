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

describe('Ext.Loader.getPath', function() {

    it('get loader path', function() {

        Ext.Loader.setConfig('paths', {
            'getPath#pattern1': '/foo'
        });
        Ext.Loader.getPath('getPath#pattern1').should.equal('/foo');

    });

    it('get loader path', function() {

        Ext.Loader.setConfig('paths', {
            'getPath#pattern1': '/foo'
        });

        Ext.Loader.getPath('getPath#pattern1.Web').should.equal('/foo/Web.js');

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
