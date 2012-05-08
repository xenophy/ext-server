/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.logger.Logger

/**
 * @class Ext.logger.Logger
 *
 * {Ext_logger_Logger:doc-contents}
 *
 * @singleton
 */
Ext.define('Ext.logger.Logger', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ levels

    levels: [
        'error',
        'warn',
        'info',
        'debug'
    ],

    // }}}
    // {{{ colors

    colors: [
        31,
        33,
        36,
        90
    ],

    // }}}
    // {{{ level

    level: 3,

    // }}}
    // {{{ enabled

    enabled: true,

    // }}}
    // {{{ output

    output: function(type) {



        var pad,
            env       = process.env.NODE_ENV || 'development';
            levels = Ext.logger.Logger.levels,
            level = Ext.logger.Logger.level,
            enabled = Ext.logger.Logger.enabled,
            colors = Ext.logger.Logger.colors,
            index = Ext.logger.Logger.levels.indexOf(type),
            message = type;

        if(env !== 'development') {
            return;
        }

        pad = function(str) {

            var max = 0;

            for(var i = 0, l = levels.length; i < l; i++) {
                max = Math.max(max, levels[i].length);
            }
            if(str.length < max) {
                return str + new Array(max - str.length + 1).join(' ');
            }
            return str;
        };

        if(arguments.length === 1) {
            index = level;
            message = type;
            type = levels[index];
        } else {
            message = Ext.Array.toArray(arguments).slice(1);
        }

        if(index > level || !enabled) {
            return this;
        }

        console.log.apply(
            console,
            [
                colors ? '   \033[' + colors[index] + 'm' + pad(type) + ' -\033[39m' : type + ':'
            ].concat(message)
        );

        return this;
    }

    // }}}

}, function() {

    // {{{ log

    /**
     * {Ext:method-log:desc}
     *
     * @method log
     * @member Ext
     * @param {String/Object} message {Ext:method-log:param_message}
     * @return {String} {Ext:method-log:return}
     */
    Ext.log = Ext.logger.Logger.output;

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
