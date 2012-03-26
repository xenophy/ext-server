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

describe('Ext.Function.alias', function() {

    it('関数オブジェクトのエイリアスを作成できること', function() {

        var testObj1 = {
            testFunc1 : function(){
                return 'testFunc1';
            }
        }
        var testObj2= {
            aliasFunc1 : Ext.Function.alias(testObj1, 'testFunc1')
        }

        testObj2.aliasFunc1().should.equal('testFunc1');
        testObj1.testFunc1().should.equal(testObj2.aliasFunc1());

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
