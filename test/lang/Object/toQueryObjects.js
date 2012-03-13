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

describe('Ext.Object.toQueryObjects', function() {

    it('値に配列を指定して、正常にクエリーオブジェクト化されること', function() {

        var ret = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);

        ret[0].name.should.equal('hobbies');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies');
        ret[2].value.should.equal('swimming');
    });

    it('再帰フラグをtrueにし値に配列を指定して、正常にクエリーオブジェクト化されること', function() {

        var ret = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'], true);

        ret[0].name.should.equal('hobbies[0]');
        ret[0].value.should.equal('reading');
        ret[1].name.should.equal('hobbies[1]');
        ret[1].value.should.equal('cooking');
        ret[2].name.should.equal('hobbies[2]');
        ret[2].value.should.equal('swimming');
    });

    it('再帰フラグをtrueにし値にオブジェクトを指定して、正常にクエリーオブジェクト化されること', function() {
        var o = Ext.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            true
        );

        o[0].name.should.equal('dateOfBirth[day]');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth[month]');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth[year]');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth[extra][hour]');
        o[3].value.should.equal(4);
        o[4].name.should.equal('dateOfBirth[extra][minute]');
        o[4].value.should.equal(30);
    });

    it('再帰フラグをfalseにし値にオブジェクトを指定して、正常にクエリーオブジェクト化されること', function() {

        var o = Ext.Object.toQueryObjects(
            'dateOfBirth',
            {
                day: 3,
                month: 8,
                year: 1987,
                extra: {
                    hour: 4,
                    minute: 30
                }
            },
            false
        );

        o[0].name.should.equal('dateOfBirth');
        o[0].value.should.equal(3);
        o[1].name.should.equal('dateOfBirth');
        o[1].value.should.equal(8);
        o[2].name.should.equal('dateOfBirth');
        o[2].value.should.equal(1987);
        o[3].name.should.equal('dateOfBirth');
        o[3].value.hour.should.equal(4);
        o[3].value.minute.should.equal(30);
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
