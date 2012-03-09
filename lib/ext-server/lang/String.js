/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.String
 *
 * 文字列を扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ escapeRe

    /**
     * @private
     */
    escapeRe: /('|\\)/g,

    // }}}
    // {{{ escapeRegexRe

    /**
     * @private
     */
    escapeRegexRe: /([-.*+?^${}()|[\]\/\\])/g,

    // }}}
    // {{{ formatRe

    /**
     * @private
     */
    formatRe: /\{(\d+)\}/g,

    // }}}
    // {{{ trimRegex

    /**
     * @private
     */
    trimRegex: /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,

    // }}}
    // {{{ capitalize

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1);
    },

    // }}}
    // {{{ ellipsis

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    ellipsis: function(value, len, word) {

        if(value && value.length > len) {

            if(word) {
                var vs = value.substr(0, len - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));

                if(index !== -1 && index >= (len - 15)) {
                    return vs.substr(0, index) + "...";
                }
            }

            return value.substr(0, len - 3) + "...";
        }

        return value;
    },

    // }}}
    // {{{ escape

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    escape: function(string) {
        return string.replace(Ext.String.escapeRe, "\\$1");
    },

    // }}}
    // {{{ escapeRegex

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    escapeRegex: function(string) {
        return string.replace(Ext.String.escapeRegexRe, "\\$1");
    },

    // }}}
    // {{{ format

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    format: function(format) {
        var args = Ext.Array.toArray(arguments, 1);
        return format.replace(Ext.String.formatRe, function(m, i) {
            return args[i];
        });
    },

    // }}}
    // {{{ htmlDecode

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    htmlDecode: (function() {

        var entities = {
            '&amp;': '&',
            '&gt;': '>',
            '&lt;': '<',
            '&quot;': '"'
        }, keys = [], p, regex;

        for(p in entities) {
            keys.push(p);
        }

        regex = new RegExp('(' + keys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');

        return function(value) {

            return (!value) ? value : String(value).replace(regex, function(match, capture) {
                if(capture in entities) {
                    return entities[capture];
                } else {
                    return String.fromCharCode(parseInt(capture.substr(2), 10));
                }
            });

        };

    })(),

    // }}}
    // {{{ htmlEncode

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    htmlEncode: (function() {

        var entities = {
            '&': '&amp;',
            '>': '&gt;',
            '<': '&lt;',
            '"': '&quot;'
        }, keys = [], p, regex;

        for(p in entities) {
            keys.push(p);
        }

        regex = new RegExp('(' + keys.join('|') + ')', 'g');

        return function(value) {
            return (!value) ? value : String(value).replace(regex, function(match, capture) {
                return entities[capture];
            });
        };

    })(),

    // }}}
    // {{{ leftPad

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    leftPad: function(string, size, character) {

        var result = String(string);

        character = character || " ";

        while(result.length < size) {
            result = character + result;
        }

        return result;
    },

    // }}}
    // {{{ replace

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    replace: function(v, findme, repl) {

        findme = Ext.String.escapeRegex(findme);

        var re = new RegExp(findme, 'g');

        return v.replace(re, repl);
    },

    // }}}
    // {{{ sprintf

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    sprintf: function() {

        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
        var a = arguments,
            i = 0,
            format = a[i++];

        // pad()
        var pad = function(str, len, chr, leftJustify) {
            var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
            return leftJustify ? str + padding : padding + str;
        };

        // justify()
        var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {

            var diff = minWidth - value.length;

            if(diff > 0) {
                if(leftJustify || !zeroPad) {
                    value = pad(value, minWidth, customPadChar, leftJustify);
                } else {
                    value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                }
            }
            return value;
        };

        // formatBaseX()
        var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
            var number = value >>> 0;
            prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
            value = prefix + pad(number.toString(base), precision || 0, '0', false);
            return justify(value, prefix, leftJustify, minWidth, zeroPad);
        };

        // formatString()
        var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {

            if(precision != null) {
                value = value.slice(0, precision);
            }

            return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
        };

        // doFormat()
        var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {

            var number;
            var prefix;
            var method;
            var textTransform;
            var value;

            if(substring == '%%') {
                return '%';
            }

            var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false, customPadChar = ' ';
            var flagsl = flags.length;

            for(var j = 0; flags && j < flagsl; j++) {
                switch(flags.charAt(j)) {
                    case ' ': positivePrefix = ' '; break;
                    case '+': positivePrefix = '+'; break;
                    case '-': leftJustify = true; break;
                    case "'": customPadChar = flags.charAt(j+1); break;
                    case '0': zeroPad = true; break;
                    case '#': prefixBaseX = true; break;
                }
            }

            if(!minWidth) {
                minWidth = 0;
            } else {
                minWidth = +minWidth;
            }

            if(!precision) {
                precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
            } else {
                precision = +precision;
            }

            value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

            switch(type) {
                case 's':
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                case 'c':
                return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                case 'b':
                return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'o':
                return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'x':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'X':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                case 'u':
                return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'i':
                case 'd':
                    number = parseInt(+value, 10);
                    prefix = number < 0 ? '-' : positivePrefix;
                    value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad);
                case 'e':
                case 'E':
                case 'f':
                case 'F':
                case 'g':
                case 'G':
                    number = +value;
                    prefix = number < 0 ? '-' : positivePrefix;
                    method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            }
        };

        return format.replace(regex, doFormat);
    },

    // }}}
    // {{{ toggle

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    toggle: function(string, value, other) {
        return string === value ? other : value;
    },

    // }}}
    // {{{ trim

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    trim: function(string) {
        return string.replace(Ext.String.trimRegex, "");
    },

    // }}}
    // {{{ urlAppend

    /**
     * @method urlAppend
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    urlAppend: function(url, string) {

        if(!Ext.isEmpty(string)) {
            return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
        }
        return url;
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
