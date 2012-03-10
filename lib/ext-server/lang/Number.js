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
 * 数値を扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ constrain

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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

        return Ext.Number.constrain(newValue, minValue,  maxValue);
    },

    // }}}
    // {{{ toFixed

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
