/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.Router

/**
 * @class Ext.app.Router
 *
 * {Ext_app_Router:doc-contents}
 */
Ext.define('Ext.app.Router', {

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

    // }}}
    // {{{ actionChain

    actionChain: [],

    // }}}
    // {{{ dispatchTable

    dispatchTable: {},

    // }}}
    // {{{ requestPath

    requestPath: '/',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, {
            actionChain     : [],
            requestPath     : '/',
            dispatchTable   : config.dispatchTable
        });

    },

    // }}}
    // {{{ buildChain

    buildChain: function(requestPath) {

        var me = this, chain = [];

        Ext.iterate(me.dispatchTable, function(path, actions) {

            var match = me.match(path, requestPath);

            if(match) {
                actions.forEach(function(action) {
                    chain.push(action);
                });
            }

        });

        return chain;
    },

    // }}}
    // {{{ dispatch

    dispatch: function() {

        return this.buildChain();

    },

    // }}}
    // {{{ match

    match: function(path, url) {

        var pathRegexp = function(path, keys, sensitive, strict) {

            if(path instanceof RegExp) {
                return path;
            }

            if(path instanceof Array) {
                path = '(' + path.join('|') + ')';
            }

            path = path
                   .concat(strict ? '' : '/?')
                   .replace(/\/\(/g, '(?:/')
                   .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(_, slash, format, key, capture, optional) {
                       keys.push({ name: key, optional: !! optional });
                       slash = slash || '';
                       return ''
                              + (optional ? '' : slash)
                              + '(?:'
                              + (optional ? slash : '')
                              + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')'
                              + (optional || '');
                  })
                  .replace(/([\/.])/g, '\\$1')
                  .replace(/\*/g, '(.*)');

            return new RegExp('^' + path + '$', sensitive ? '' : 'i');
        };

        var keys = [];
        var options = {};

        var regexp = pathRegexp(
            path,
            keys,
            options.sensitive,
            options.strict
        );

        return regexp.exec(url);
    }

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
