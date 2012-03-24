/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.util.Format
 *
 * {Ext_util_Format:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ currencyAtEnd

    /**
     * @property {Boolean} currencyAtEnd
     *
     * {Ext_util_Format:property-currencyAtEnd:desc}
     */
    currencyAtEnd: false,

    // }}}
    // {{{ currencyPrecision

    /**
     * @property {Number} currencyPrecision
     *
     * {Ext_util_Format:property-currencyPrecision:desc}
     */
    currencyPrecision: 2,

    // }}}
    // {{{ currencySign

    /**
     * @property {String} currencySign
     *
     * {Ext_util_Format:property-currencySign:desc}
     */
    currencySign: '$',

    // }}}
    // {{{ decimalSeparator

    /**
     * @property {String} decimalSeparator
     *
     * {Ext_util_Format:property-decimalSeparator:desc}
     */
    decimalSeparator: '.',

    // }}}
    // {{{ thousandSeparator

    /**
     * @property {String} thousandSeparator
     *
     * {Ext_util_Format:property-thousandSeparator:desc}
     */
    thousandSeparator: ',',

    // }}}
    // {{{ capitalize

    /**
     * {Ext_util_Format:method-capitalize:desc}
     *
     * @method
     * @alias Ext.String#capitalize
     */
    capitalize: Ext.String.capitalize,

    // }}}
    // {{{ currency

    /**
     * {Ext_util_Format:method-currency:desc}
     *
     * @param {Number/String} value {Ext_util_Format:method-currency:param_value}
     * @param {String} sign {Ext_util_Format:method-currency:param_sign}
     * @param {Number} decimals {Ext_util_Format:method-currency:param_decimals}
     * @param {Boolean} end {Ext_util_Format:method-currency:param_end}
     * @return {String} {Ext_util_Format:method-currency:return}
     */
    currency: function(v, currencySign, decimals, end) {

        var negativeSign = '',
            format = ",0",
            i = 0;
            v = v - 0;

        if(v < 0) {
            v = -v;
            negativeSign = '-';
        }

        decimals = decimals || Ext.util.Format.currencyPrecision;
        format += format + (decimals > 0 ? '.' : '');

        for(; i < decimals; i++) {
            format += '0';
        }

        v = Ext.util.Format.number(v, format);

        if((end || Ext.util.Format.currencyAtEnd) === true) {
            return Ext.String.format("{0}{1}{2}", negativeSign, v, currencySign || Ext.util.Format.currencySign);
        } else {
            return Ext.String.format("{0}{1}{2}", negativeSign, currencySign || Ext.util.Format.currencySign, v);
        }

    },

    // }}}
    // {{{ date

    /**
     * {Ext_util_Format:method-date:desc}
     *
     * @param {String/Date} value {Ext_util_Format:method-date:param_value}
     * @param {String} format {Ext_util_Format:method-date:param_format}
     * @return {String} {Ext_util_Format:method-date:return}
     */
    date: function(v, format) {

        if(!v) {
            return "";
        }

        if(!Ext.isDate(v)) {
            v = new Date(Date.parse(v));
        }

        return Ext.Date.dateFormat(v, format || Ext.Date.defaultFormat);

    },

    // }}}
    // {{{ dateRenderer

    /**
     * {Ext_util_Format:method-dateRenderer:desc}
     *
     * @param {String} format {Ext_util_Format:method-dateRenderer:param_format}
     * @return {Function} {Ext_util_Format:method-dateRenderer:return}
     */
    dateRenderer: function(format) {

        return function(v) {
            return Ext.util.Format.date(v, format);
        };

    },

    // }}}
    // {{{ defaultValue

    /**
     * {Ext_util_Format:method-defaultValue:desc}
     *
     * @param {Object} value {Ext_util_Format:method-defaultValue:param_value}
     * @param {String} defaultValue {Ext_util_Format:method-defaultValue:param_defaultValue}
     * @return {String} {Ext_util_Format:method-defaultValue:return}
     */
    defaultValue: function(value, defaultValue) {
        return value !== undefined && value !== '' ? value : defaultValue;
    },

    // }}}
    // {{{ ellipsis

    /**
     * {Ext_util_Format:method-ellipsis:desc}
     *
     * @method
     * @alias Ext.String#ellipsis
     */
    ellipsis: Ext.String.ellipsis,

    // }}}
    // {{{ escapeRegex

    /**
     * {Ext_util_Format:method-escapeRegex:desc}
     *
     * @param {String} str {Ext_util_Format:method-escapeRegex:param_str}
     * @return {String} {Ext_util_Format:method-escapeRegex:return}
     */
    escapeRegex: function(s) {
        return s.replace(/([\-.*+?\^${}()|\[\]\/\\])/g, "\\$1");
    },

    // }}}
    // {{{ fileSize

    /**
     * {Ext_util_Format:method-fileSize:desc}
     *
     * @param {Number/String} size {Ext_util_Format:method-fileSize:param_size}
     * @return {String} {Ext_util_Format:method-fileSize:return}
     */
    fileSize: function(size) {

        if(size < 1024) {
            return size + " bytes";
        } else if(size < 1048576) {
            return (Math.round(((size*10) / 1024))/10) + " KB";
        } else {
            return (Math.round(((size*10) / 1048576))/10) + " MB";
        }

    },

    // }}}
    // {{{ format

    /**
     * {Ext_util_Format:method-format:desc}
     *
     * @method
     * @alias Ext.String#format
     */
    format: Ext.String.format,

    // }}}
    // {{{ htmlDecode

    /**
     * {Ext_util_Format:method-htmlDecode:desc}
     *
     * @method
     * @alias Ext.String#htmlDecode
     */
    htmlDecode: Ext.String.htmlDecode,

    // }}}
    // {{{ htmlEncode

    /**
     * {Ext_util_Format:method-htmlEncode:desc}
     *
     * @method
     * @alias Ext.String#htmlEncode
     */
    htmlEncode: Ext.String.htmlEncode,

    // }}}
    // {{{ jpMoney

    /**
     * {Ext_util_Format:method-jpMoney:desc}
     *
     * @param {Number/String} value {Ext_util_Format:method-jpMoney:param_value}
     * @return {String} {Ext_util_Format:method-jpMoney:return}
     */
    jpMoney: function(v) {
        return "¥" + this.numberFormat(v);
    },

    // }}}
    // {{{ leftPad

    /**
     * {Ext_util_Format:method-leftPad:desc}
     *
     * @method
     * @alias Ext.String#leftPad
     */
    leftPad: Ext.String.leftPad,

    // }}}
    // {{{ lowercase

    /**
     * {Ext_util_Format:method-lowercase:desc}
     *
     * @param {String} value {Ext_util_Format:method-lowercase:param_value}
     * @return {String} {Ext_util_Format:method-lowercase:return}
     */
    lowercase: function(value) {
        return String(value).toLowerCase();
    },

    // }}}
    // {{{ math

    /**
     * {Ext_util_Format:method-math:desc}
     *
     * @return {Function} {Ext_util_Format:method-math:return}
     */
    math: function() {

        var fns = {};

        return function(v, a) {

            if(!fns[a]) {
                fns[a] = Ext.functionFactory('v', 'return v ' + a + ';');
            }

            return fns[a](v);
        };

    }(),

    // }}}
    // {{{ nl2br

    /**
     * {Ext_util_Format:method-nl2br:desc}
     *
     * @param {String} v {Ext_util_Format:method-nl2br:param_v}
     * @return {String} {Ext_util_Format:method-nl2br:return}
     */
    nl2br: function(v) {
        return Ext.isEmpty(v) ? '' : v.replace(/\r?\n/g, '<br />');
    },

    // }}}
    // {{{ number

    /**
     * {Ext_util_Format:method-number:desc}
     *
     * @param {Number} v {Ext_util_Format:method-number:param_v}
     * @param {String} format {Ext_util_Format:method-number:param_format}
     * @return {String} {Ext_util_Format:method-number:return}
     */
    number: function(v, formatString) {

        var I18NFormatCleanRe;
        var formatCleanRe = /[^\d\.]/g;

        if(!formatString) {
            return v;
        }

        v = Ext.Number.from(v, NaN);

        if(isNaN(v)) {
            return '';
        }

        var comma = Ext.util.Format.thousandSeparator,
        dec   = Ext.util.Format.decimalSeparator,
        i18n  = false,
        neg   = v < 0,
        hasComma,
        psplit;

        v = Math.abs(v);

        if(formatString.substr(formatString.length - 2) == '/i') {

            if(!I18NFormatCleanRe) {

                I18NFormatCleanRe = new RegExp('[^\\d\\' + Ext.util.Format.decimalSeparator + ']','g');

            }

            formatString = formatString.substr(0, formatString.length - 2);
            i18n   = true;
            hasComma = formatString.indexOf(comma) != -1;
            psplit = formatString.replace(I18NFormatCleanRe, '').split(dec);

        } else {

            hasComma = formatString.indexOf(',') != -1;
            psplit = formatString.replace(formatCleanRe, '').split('.');

        }

        if(1 < psplit.length) {

            v = v.toFixed(psplit[1].length);

        } else if(2 < psplit.length) {

            /*
             Ext.Error.raise({
                 sourceClass: "Ext.util.Format",
                 sourceMethod: "number",
                 value: v,
                 formatString: formatString,
                 msg: "Invalid number format, should have no more than 1 decimal"
             });
             */

        } else {

            v = v.toFixed(0);

        }

        var fnum = v.toString();

        psplit = fnum.split('.');

        if(hasComma) {

            var cnum = psplit[0],
                parr = [],
                j    = cnum.length,
                m    = Math.floor(j / 3),
                n    = cnum.length % 3 || 3,
                i;

            for(i = 0; i < j; i += n) {

                if(i !== 0) {
                    n = 3;
                }

                parr[parr.length] = cnum.substr(i, n);
                m -= 1;
            }

            fnum = parr.join(comma);

            if(psplit[1]) {
                fnum += dec + psplit[1];
            }

        } else {

            if(psplit[1]) {
                fnum = psplit[0] + dec + psplit[1];
            }

        }

        if(neg) {
            neg = fnum.replace(/[^1-9]/g, '') !== '';
        }

        return (neg ? '-' : '') + formatString.replace(/[\d,?\.?]+/, fnum);
    },

    // }}}
    // {{{ numberFormat

    /**
     * {Ext_util_Format:method-numberFormat:desc}
     *
     * @param {String} v {Ext_util_Format:method-numberFormat:param_v}
     * @return {String} {Ext_util_Format:method-numberFormat:return}
     */
    numberFormat: function(v) {
        return v.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
    },

    // }}}
    // {{{ numberRenderer

    /**
     * {Ext_util_Format:method-numberRenderer:desc}
     *
     * @param {String} format {Ext_util_Format:method-numberRenderer:param_format}
     * @return {Function} {Ext_util_Format:method-numberRenderer:return}
     */
    numberRenderer: function(format) {
        return function(v) {
            return Ext.util.Format.number(v, format);
        };
    },

    // }}}
    // {{{ parseBox

    /**
     * {Ext_util_Format:method-parseBox:desc}
     *
     * @param {Number/String} v {Ext_util_Format:method-parseBox:param_v}
     * @return {Object} {Ext_util_Format:method-parseBox:return}
     */
    parseBox: function(box) {

        if(Ext.isNumber(box)) {
            box = box.toString();
        }

        var parts  = box.split(' '), ln = parts.length;

        if(ln == 1) {

            parts[1] = parts[2] = parts[3] = parts[0];

        } else if(ln == 2) {

            parts[2] = parts[0];
            parts[3] = parts[1];

        } else if(ln == 3) {

            parts[3] = parts[1];

        }

        return {
            top    : parseInt(parts[0], 10) || 0,
            right  : parseInt(parts[1], 10) || 0,
            bottom : parseInt(parts[2], 10) || 0,
            left   : parseInt(parts[3], 10) || 0
        };
    },

    // }}}
    // {{{ plural

    /**
     * {Ext_util_Format:method-plural:desc}
     *
     * @param {Number} value {Ext_util_Format:method-plural:param_value}
     * @param {String} singular {Ext_util_Format:method-plural:param_singular}
     * @param {String} plural {Ext_util_Format:method-plural:param_plural}
     */
    plural: function(v, s, p) {
        return v +' ' + (v == 1 ? s : (p ? p : s+'s'));
    },

    // }}}
    // {{{ round

    /**
     * {Ext_util_Format:method-round:desc}
     *
     * @param {Number/String} value {Ext_util_Format:method-round:param_value}
     * @param {Number} precision {Ext_util_Format:method-round:param_precision}
     * @return {Number} {Ext_util_Format:method-round:return}
     */
    round: function(value, precision) {

        var result = Number(value);

        if(typeof precision == 'number') {
            precision = Math.pow(10, precision);
            result = Math.round(value * precision) / precision;
        }

        return result;
    },

    // }}}
    // {{{ stripScripts

    /**
     * {Ext_util_Format:method-stripScripts:desc}
     *
     * @param {Object} value {Ext_util_Format:method-stripScripts:param_value}
     * @return {String} {Ext_util_Format:method-stripScripts:return}
     */
    stripScripts: function(v) {
        return !v ? v : String(v).replace(/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig, "");
    },

    // }}}
    // {{{ stripTags

    /**
     * {Ext_util_Format:method-stripTags:desc}
     *
     * @param {Object} value {Ext_util_Format:method-stripTags:value}
     * @return {String} {Ext_util_Format:method-stripTags:return}
     */
    stripTags: function(v) {
        return !v ? v : String(v).replace(/<\/?[^>]+>/gi, "");
    },

    // }}}
    // {{{ substr

    /**
     * {Ext_util_Format:method-substr:desc}
     *
     * @param {String} value {Ext_util_Format:method-substr:param_value}
     * @param {Number} start {Ext_util_Format:method-substr:param_start}
     * @param {Number} length {Ext_util_Format:method-substr:param_length}
     * @return {String} {Ext_util_Format:method-substr:return}
     */
    substr: function(value, start, length) {
        return String(value).substr(start, length);
    },

    // }}}
    // {{{ trim

    /**
     * {Ext_util_Format:method-trim:desc}
     *
     * @method
     * @alias Ext.String#trim
     */
    trim: Ext.String.trim,

    // }}}
    // {{{ undef

    /**
     * {Ext_util_Format:method-undef:desc}
     *
     * @param {Object} value {Ext_util_Format:method-undef:param_value}
     * @return {Object} {Ext_util_Format:method-undef:return}
     */
    undef: function(value) {
        return value !== undefined ? value : "";
    },

    // }}}
    // {{{ uppercase

    /**
     * {Ext_util_Format:method-uppercase:desc}
     *
     * @param {Object} value {Ext_util_Format:method-uppercase:param_value}
     * @return {Object} {Ext_util_Format:method-uppercase:return}
     */
    uppercase: function(value) {
        return String(value).toUpperCase();
    },

    // }}}
    // {{{ usMoney

    /**
     * {Ext_util_Format:method-usMoney:desc}
     *
     * @param {Number/String} value {Ext_util_Format:method-usMoney:param_value}
     * @return {String} {Ext_util_Format:method-usMoney:return}
     */
    usMoney: function(v) {
        return Ext.util.Format.currency(v, '$', 2);
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
