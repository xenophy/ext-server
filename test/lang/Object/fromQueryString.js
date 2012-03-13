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

describe('Ext.Object.fromQueryString', function() {

    it('"foo=1&bar=2"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("foo=1&bar=2");

        ret.foo.should.equal('1');
        ret.bar.should.equal('2');
    });

    it('再帰フラグを設定して"foo=1&bar=2"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("foo=1&bar=2", true);

        ret.foo.should.equal('1');
        ret.bar.should.equal('2');
    });

    it('"foo=&bar=2"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("foo=&bar=2");

        ret.foo.should.equal('');
        ret.bar.should.equal('2');
    });

    it('再帰フラグを設定して"foo=&bar=2"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("foo=&bar=2", true);

        ret.foo.should.equal('');
        ret.bar.should.equal('2');
    });

    it('"some%20price=%24300"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("some%20price=%24300");

        ret['some price'].should.equal('$300');
    });

    it('再帰フラグを設定して"some%20price=%24300"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("some%20price=%24300", true);

        ret['some price'].should.equal('$300');
    });

    it('"colors=red&colors=green&colors=blue"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("colors=red&colors=green&colors=blue");

        ret.colors[0].should.equal('red');
        ret.colors[1].should.equal('green');
        ret.colors[2].should.equal('blue');
    });

    it('再帰フラグを設定して"colors=red&colors=green&colors=blue"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("colors=red&colors=green&colors=blue");

        ret.colors[0].should.equal('red');
        ret.colors[1].should.equal('green');
        ret.colors[2].should.equal('blue');
    });

    it('再帰フラグを設定して"username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff"をオブジェクトに変換できること', function(){

        var ret = Ext.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);

        ret.username.should.equal('Jacky');
        ret.dateOfBirth.day.should.equal('1');
        ret.dateOfBirth.month.should.equal('2');
        ret.dateOfBirth.year.should.equal('1911');
        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');
    });

    it('再帰フラグを設定して"hobbies[0]=coding&hobbies[]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff"をオブジェクトに変換できること', function() {

        var ret = Ext.Object.fromQueryString("hobbies[0]=coding&hobbies[]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);

        ret.hobbies[0].should.equal('coding');
        ret.hobbies[1].should.equal('eating');
        ret.hobbies[2].should.equal('sleeping');
        ret.hobbies[3][0].should.equal('nested');
        ret.hobbies[3][1].should.equal('stuff');
    });

    it('キーの指定が無い場合、例外を発生させること', function() {

        try{
            Ext.setLocale('en');
            ret = Ext.Object.fromQueryString("=&bar=2", true);
        } catch(e) {
            e.sourceClass.should.equal('Ext.Object');
            e.sourceMethod.should.equal('fromQueryString');
            e.queryString.should.equal('=&bar=2');
            e.recursive.should.equal(true);
            e.msg.should.equal('Malformed query string given, failed parsing name from "="');
            e.message.should.equal('Malformed query string given, failed parsing name from "="');
        }

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
