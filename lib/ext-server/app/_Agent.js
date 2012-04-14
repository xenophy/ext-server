/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.Agent

/**
 * @class Ext.app.Agent
 *
 * {Ext_app_Agent:doc-contents}
 */
Ext.define('Ext.app.Agent', {

    // {{{ mixins

    mixins: [
        'Ext.util.Observable'
    ],

    // }}}
    // {{{ requires

    requires: [
        'Ext.app.control.Control'
    ],

    // }}}
    // {{{ run

    run: function(config, next) {

        var me = this;

        config = config || {};

        // Agent相関作成
        this.buildCorrelation(config, function() {


            console.log(me.bottomLevelAgent);


            next();


        });

    },

    // }}}
    // {{{ buildCorrelation

    buildCorrelation: function(config, next) {

        var me = this,
            list = [],
            prefix = [],
            loop = [],
            current = this,
            path = require('path');

        config = config || {};

        list = Ext.Array.clean(config.path.split('/'));
        list.unshift('TopLevel');
        list.forEach(function(part, cnt) {

            loop.push(function(next) {

                path.exists(
                    path.normalize(process.ExtEnv.dirname + '/control/' + prefix.join('/') + '/' + part + '.js'),
                    function(exists) {

                        if(exists) {

                            var tmp, clsName;

                            tmp = prefix.join('.');
                            if(Ext.isEmpty(tmp)) {
                                tmp = part;
                            } else {
                                tmp = prefix.join('.') + '.' + part;
                            }

                            clsName = Ext.String.format('{0}.control.{1}', config.name, tmp );

                            if(cnt > 0) {

                                current.bottomLevelAgent = Ext.create('Ext.app.Agent', {
                                    control: Ext.create(clsName)
                                });

                                current = current.bottomLevelAgent;

                            } else {
                                me.control = Ext.create(clsName);
                            }

                        }

                        if(cnt > 0) {
                            prefix.push(part);
                        }

                        next();
                    }
                );

            });

        });

        loop.push(function() {
            next();
        });

        var f = function() {
            loop.shift()(f);
        };
        loop.shift()(f);

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
