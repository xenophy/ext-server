/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.util.Format
 *
 * このクラスは、ライブラリ内部のフォーマットするための関数を一元管理しているものです。
 * これには、テキスト、日付や数値などのデータをさまざまなタイプの書式設定する関数が含まれています。
 *
 * __ローカライゼーション__
 * このクラスは、ローカライズのためのいくつかのオプションが含まれています。
 * これらはライブラリがロードされると、その時点から関数のすべての呼び出しで指定したロケール設定を使用するように設定することができます。
 * オプションは次の通りです: - thousandSeparator - decimalSeparator - currenyPrecision - currencySign - currencyAtEnd
 *
 * また、このクラスはここで定義されている、デフォルトの日付フォーマットも使用できます:Ext.Date.defaultFormat
 *
 * @singleton
 */
module.exports = {

    // {{{ currencyAtEnd

    /**
     * @property currencyAtEnd
     */
    currencyAtEnd: false,

    // }}}
    // {{{ currencyPrecision

    /**
     * @property currencyPrecision
     */
    currencyPrecision: 2,

    // }}}
    // {{{ currencySign

    /**
     * @property currencySign
     */
    currencySign: '$',

    // }}}
    // {{{ decimalSeparator

    /**
     * @property decimalSeparator
     */
    decimalSeparator: '.',

    // }}}
    // {{{ thousandSeparator

    /**
     * @property thousandSeparator
     */
    thousandSeparator: ',',

    // }}}
    // {{{ capitalize

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    capitalize: Ext.String.capitalize,

    // }}}
    // {{{ currency

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    dateRenderer: function(format) {

        return function(v) {
            return Ext.util.Format.date(v, format);
        };

    },

    // }}}
    // {{{ defaultValue

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    defaultValue: function(value, defaultValue) {
        return value !== undefined && value !== '' ? value : defaultValue;
    },

    // }}}
    // {{{ ellipsis

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    ellipsis: Ext.String.ellipsis,

    // }}}
    // {{{ escapeRegex

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    escapeRegex: function(s) {
        return s.replace(/([\-.*+?\^${}()|\[\]\/\\])/g, "\\$1");
    },

    // }}}
    // {{{ fileSize

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    format: Ext.String.format,

    // }}}
    // {{{ htmlDecode

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    htmlDecode: Ext.String.htmlDecode,

    // }}}
    // {{{ htmlEncode

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    htmlEncode: Ext.String.htmlEncode,

    // }}}
    // {{{ jpMoney

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    jpMoney: function(v) {
        return "¥" + this.numberFormat(v);
    },

    // }}}
    // {{{ leftPad

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    leftPad: Ext.String.leftPad,

    // }}}
    // {{{ lowercase

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    lowercase: function(value) {
        return String(value).toLowerCase();
    },

    // }}}
    // {{{ math

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    nl2br: function(v) {
        var nl2brRe = /\r?\n/g;
        return Ext.isEmpty(v) ? '' : v.replace(nl2brRe, '<br />');
    },

    // }}}
    // {{{ number

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    numberFormat: function(v) {
        return v.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
    },

    // }}}
    // {{{ numberRenderer

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    numberRenderer: function(format) {
        return function(v) {
            return Ext.util.Format.number(v, format);
        };
    },

    // }}}
    // {{{ parseBox

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    plural: function(v, s, p) {
        return v +' ' + (v == 1 ? s : (p ? p : s+'s'));
    },

    // }}}
    // {{{ replace

    /**
     * @method replace
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    replace: Ext.String.replace,

    // }}}
    // {{{ round

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    stripScripts: function(v) {
        var stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig;
        return !v ? v : String(v).replace(stripScriptsRe, "");
    },

    // }}}
    // {{{ stripTags

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    stripTags: function(v) {
        var stripTagsRE = /<\/?[^>]+>/gi;
        return !v ? v : String(v).replace(stripTagsRE, "");
    },

    // }}}
    // {{{ substr

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    substr: function(value, start, length) {
        return String(value).substr(start, length);
    },

    // }}}
    // {{{ trim

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    trim: Ext.String.trim,

    // }}}
    // {{{ undef

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    undef: function(value) {
        return value !== undefined ? value : "";
    },

    // }}}
    // {{{ uppercase

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    uppercase: function(value) {
        return String(value).toUpperCase();
    },

    // }}}
    // {{{ usMoney

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    usMoney: function(v) {
        return NX.util.Format.currency(v, '$', 2);
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
