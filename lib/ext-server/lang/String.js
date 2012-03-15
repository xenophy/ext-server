/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.String

/**
 * @class Ext.String
 *
 * {Ext_String:doc-contents}
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
     * {Ext_String:method-capitalize:desc}
     *
     * @param o {Object} {Ext_String:method-capitalize:param_o}
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

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
