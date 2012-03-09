/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.clone', function() {

    it('オブジェクト型のクローンを生成し、値を変更してオリジナルに影響がないこと', function() {

        var o, c;

        o = {
            src: 'src object'
        };

        c = Ext.clone(o);

        o.src.should.equal('src object');
        c.src.should.equal('src object');

        o.src = 'changed';

        o.src.should.equal('changed');
        c.src.should.equal('src object');

    });

    it('関数型のクローンを生成し、値を変更してオリジナルに影響がないこと', function() {

        var o, c;

        o = function() {
            return 'original';
        };

        c = Ext.clone(o);

        o().should.equal('original');
        c().should.equal('original');

        o = function() {
            return 'replace';
        }

        o().should.equal('replace');
        c().should.equal('original');

    });

    it('日付型のクローンを生成し、値を変更してオリジナルに影響がないこと', function() {

        var dt, dt2;

        dt = new Date();
        dt2 = Ext.clone(dt);

        dt.getMilliseconds().should.equal(dt2.getMilliseconds());
        dt2.setMilliseconds(500);
        dt.getMilliseconds().should.not.equal(dt2.getMilliseconds());

    });

    it('配列のクローンを生成し、値を変更してオリジナルに影響がないこと', function() {

        var o, c;

        o = function() {
            return 'original';
        };

        c = Ext.clone(o);

        o().should.equal('original');
        c().should.equal('original');

        o = function() {
            return 'replace';
        }

        o().should.equal('replace');
        c().should.equal('original');

    });

    it('オブジェクト内に配列を持つオブジェクトのクローンを生成し、値を変更してオリジナルに影響がないこと', function() {

        var o, c;

        o = {
            cn: [{
                tag: 'a'
            },{
                tag: 'span'
            }]
        };
        o.obj = o.cn;

        c = Ext.clone(o);

        o.cn[0].tag.should.equal('a');
        o.cn[1].tag.should.equal('span');

        c.cn[0].tag.should.equal('a');
        c.cn[1].tag.should.equal('span');

        o.obj[0].tag.should.equal('a');
        o.obj[1].tag.should.equal('span');

        c.obj[0].tag.should.equal('a');
        c.obj[1].tag.should.equal('span');

        c.cn.push({tag: 'div'});

        o.cn.length.should.equal(2);
        c.cn.length.should.equal(3);

        o.obj.length.should.equal(2);
        c.obj.length.should.equal(2);

    });

    it('引数に指定する値が、undefined,null,空文字列の場合、引数に指定されたものと同一のものを返却する', function() {

        require('assert').equal(Ext.clone(), undefined);
        require('assert').equal(Ext.clone(null), null);
        Ext.clone('').should.equal('');

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
