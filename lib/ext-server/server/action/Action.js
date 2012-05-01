/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.action.Action

/**
 * @class Ext.server.action.Action
 *
 * {Ext_server_action_Action:doc-contents}
 */
Ext.define('Ext.server.action.Action', {

    // {{{ extend

    extend: 'Ext.app.action.Action',

    // }}}
    // {{{ alternateClassName

    alternateClassname: 'Ext.ServerAction',

    // }}}
    // {{{ $execute

    $execute: function() {

        var action = this;

        return Ext.Function.bind(function(config, next) {

            var p = require('url').parse(config.req.url, true);
            var get = {};

            if(p.search) {
                get = require('querystring').parse(p.search.substr(1));
            };

            Ext.apply(action, {

                // TODO mail: NX.app.action.Abstract.$mail,

                req: config.req,
                res: config.res,
                paths: config.config.app.paths,
                result: {},
                post: config.req.body,
                get: get,
                request: config.req.body
            });


            var callback = function() {
                config.res.actionresult = Ext.merge(config.res.actionresult || {}, action.result);
                next();
            };

            if(this.execute.length === 0) {

                this.execute();
                callback();

            } else {
                this.execute(callback);
            }

        }, this);

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
