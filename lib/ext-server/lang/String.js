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
     * @param {String} string {Ext_String:method-capitalize:param_string}
     * @return {String} {Ext_String:method-capitalize:return}
     */
    capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1);
    },

    // }}}
    // {{{ ellipsis

    /**
     * {Ext_String:method-ellipsis:desc}
     *
     * @param {String} value {Ext_String:method-ellipsis:param_value}
     * @param {Number} length {Ext_String:method-ellipsis:param_length}
     * @param {Boolean} word {Ext_String:method-ellipsis:param_word}
     * @return {String} {Ext_String:method-ellipsis:return}
     */
    ellipsis: function(value, length, word) {

        if(value && value.length > length) {

            if(word) {
                var vs = value.substr(0, length - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));

                if(index !== -1 && index >= (length - 15)) {
                    return vs.substr(0, index) + "...";
                }
            }

            return value.substr(0, length - 3) + "...";
        }

        return value;
    },

    // }}}
    // {{{ escape

    /**
     * {Ext_String:method-escape:desc}
     *
     * @param {String} string {Ext_String:method-escape:param_string}
     * @return {String} {Ext_String:method-escape:return}
     */
    escape: function(string) {
        return string.replace(Ext.String.escapeRe, "\\$1");
    },

    // }}}
    // {{{ escapeRegex

    /**
     * {Ext_String:method-escapeRegex:desc}
     *
     * @param {String} string {Ext_String:method-escapeRegex:param_string}
     * @return {String} {Ext_String:method-escapeRegex:return}
     */
    escapeRegex: function(string) {
        return string.replace(Ext.String.escapeRegexRe, "\\$1");
    },

    // }}}
    // {{{ format

    /**
     * {Ext_String:method-format:desc}
     *
     * @param {String} string {Ext_String:method-format:param_string}
     * @param {String} value1 {Ext_String:method-format:param_value1}
     * @param {String} value2 {Ext_String:method-format:param_value2}
     * @return {String} {Ext_String:method-format:return}
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
     * {Ext_String:method-htmlDecode:desc}
     *
     * @param {String} value {Ext_String:method-htmlDecode:param_value}
     * @return {String} {Ext_String:method-htmlDecode:return}
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
     * {Ext_String:method-htmlEncode:desc}
     *
     * @param {String} value {Ext_String:method-htmlEncode:param_value}
     * @return {String} {Ext_String:method-htmlEncode:return}
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
     * {Ext_String:method-leftPad:desc}
     *
     * @param {String} string {Ext_String:method-leftPad:param_string}
     * @param {Number} size {Ext_String:method-leftPad:param_size}
     * @param {String} character {Ext_String:method-leftPad:param_character}
     * @return {String} {Ext_String:method-leftPad:return}
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
     * {Ext_String:method-replace:desc}
     *
     * @param {String} v {Ext_String:method-replace:param_v}
     * @param {String} findme {Ext_String:method-replace:param_findme}
     * @param {String} repl {Ext_String:method-replace:param_repl}
     * @return {String} {Ext_String:method-replace:return}
     */
    replace: function(v, findme, repl) {

        findme = Ext.String.escapeRegex(findme);

        var re = new RegExp(findme, 'g');

        return v.replace(re, repl);
    },

    // }}}
    // {{{ toggle

    /**
     * {Ext_String:method-toggle:desc}
     *
     * @param {String} string {Ext_String:method-toggle:param_string}
     * @param {String} value {Ext_String:method-toggle:param_value}
     * @param {String} other {Ext_String:method-toggle:param_other}
     * @return {String} {Ext_String:method-toggle:return}
     */
    toggle: function(string, value, other) {
        return string === value ? other : value;
    },

    // }}}
    // {{{ trim

    /**
     * {Ext_String:method-trim:desc}
     *
     * @param {String} string {Ext_String:method-trim:param_string}
     * @return {String} {Ext_String:method-trim:return}
     */
    trim: function(string) {
        return string.replace(Ext.String.trimRegex, "");
    },

    // }}}
    // {{{ urlAppend

    /**
     * @method urlAppend
     *
     * {Ext_String:method-urlAppend:desc}
     *
     * @param {String} url {Ext_String:method-urlAppend:param_url}
     * @param {String} string {Ext_String:method-urlAppend:param_string}
     * @return {String} {Ext_String:method-urlAppend:return}
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
