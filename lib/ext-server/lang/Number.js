/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// Ext.Number

/**
 * @class Ext.Number
 *
 * {Ext_Number:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ constrain

    /**
     * {Ext_Number:method-constrain:desc}
     *
     * @param {Number} number {Ext_Number:method-constrain:param_number}
     * @param {Number} min {Ext_Number:method-constrain:param_min}
     * @param {Number} max {Ext_Number:method-constrain:param_max}
     * @return {Number} {Ext_Number:method-constrain:return}
     */
    constrain: function(number, min, max) {

        number = parseFloat(number);

        if(!isNaN(min)) {
            number = Math.max(number, min);
        }

        if(!isNaN(max)) {
            number = Math.min(number, max);
        }

        return number;
    },

    // }}}
    // {{{ from

    /**
     * {Ext_Number:method-from:desc}
     *
     * @param {Object} value {Ext_Number:method-from:param_value}
     * @param {Number} defaultValue {Ext_Number:method-from:param_defaultValue}
     * @return {Number} {Ext_Number:method-from:return}
     */
    from: function(value, defaultValue) {

        if(isFinite(value)) {
            value = parseFloat(value);
        }

        return !isNaN(value) ? value : defaultValue;
    },

    // }}}
    // {{{ snap

    /**
     * {Ext_Number:method-snap:desc}
     *
     * @param {Number} value {Ext_Number:method-snap:param_value}
     * @param {Number} increment {Ext_Number:method-snap:param_increment}
     * @param {Number} minValue {Ext_Number:method-snap:param_minValue}
     * @param {Number} maxValue {Ext_Number:method-snap:param_maxValue}
     * @return {Number} {Ext_Number:method-snap:return}
     */
    snap: function(value, increment, minValue, maxValue) {

        var newValue = value, m;

        if(!(increment && value)) {
            return value;
        }

        m = value % increment;

        if(m !== 0) {
            newValue -= m;

            if(m * 2 >= increment) {
                newValue += increment;
            } else if(m * 2 < -increment) {
                newValue -= increment;
            }
        }

        return Ext.Number.constrain(newValue, minValue, maxValue);
    },

    // }}}
    // {{{ toFixed

    /**
     * {Ext_Number:method-toFixed:desc}
     *
     * @param {Number} value {Ext_Number:method-toFixed:param_value}
     * @param {Number} precision {Ext_Number:method-toFixed:param_precision}
     * @return {Number} {Ext_Number:method-toFixed:return}
     */
    toFixed: function(value, precision) {
        return value.toFixed(precision);
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
