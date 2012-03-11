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

describe('Ext.Array.each', function() {

    it('引数オブジェクトを正常に繰り返すこと', function() {

        var sum = function() {
            var sum = 0;

            Ext.Array.each(arguments, function(value) {
                sum += value;
            });

            return sum;
        };

        sum(1, 2, 3).should.equal(6);
    });

    it('配列を正常に繰り返すこと', function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia', 'James'],
            x = 0,
            ret;

        ret = Ext.Array.each(['Vietnam', 'Singapore', 'United States', 'Russia'], function(name, index, countriesItSelf) {
            if(name === 'Singapore' && index === 1 && x === index) {
                return false;
            }
            x++;
        });

        ret.should.equal(1);
    });

    it('配列を逆回転で正常に繰り返すこと', function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia', 'James'],
            x = 0,
            ret;

        ret = Ext.Array.each(countries, function(name, index, countriesItSelf) {
            if(name === 'Singapore' && index === 1 && x === 3) {
                return false;
            }
            x++;
        }, this, true);

        ret.should.equal(1);
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
