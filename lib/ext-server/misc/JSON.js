/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.JSON
 *
 * {Ext_JSON:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ encode

    /**
     * {Ext_JSON:method-encode:desc}
     *
     * @param {Object} o {Ext_JSON:method-encode:param_o}
     * @return {String} {Ext_JSON:method-encode:return}
     */
    encode: JSON.stringify,

    // }}}
    // {{{ decode

    /**
     * {Ext_JSON:method-decode:desc}
     *
     * @param {String} json {Ext_JSON:method-decode:param_json}
     * @param {Boolean} safe {Ext_JSON:method-decode:param_safe}
     * @return {Object} {Ext_JSON:method-decode:return}
     */
    decode: JSON.parse,

    // }}}
    // {{{ encodeDate

    /**
     * {Ext_JSON:method-encodeDate:desc}
     *
     * @param {Date} d {Ext_JSON:method-encodeDate:param_d}
     * @return {String} {Ext_JSON:method-encodeDate:return}
     */
    encodeDate: function(o) {

        var pad = function(n) {
            return n < 10 ? "0" + n : n;
        };

        return  '"' + o.getFullYear() + "-"
                    + pad(o.getMonth() + 1) + "-"
                    + pad(o.getDate()) + "T"
                    + pad(o.getHours()) + ":"
                    + pad(o.getMinutes()) + ":"
                    + pad(o.getSeconds()) + '"';
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
