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

            var p, get, callback, redirect, forbidden, isSecure, abort, setTemplate, basicAuth, unauthorized;

            p = require('url').parse(config.req.url, true);
            get = {};

            if(p.search) {
                get = require('querystring').parse(p.search.substr(1));
            };

            // {{{ redirect

            redirect = function(url) {

                next({
                    abort: true,
                    redirect: url
                });

            };

            // }}}
            // {{{ forbidden

            forbidden = function() {
                next({
                    abort: true,
                    forbidden: true
                });
            };

            // }}}
            // {{{ isSecure

            isSecure = (function() {
                var req = config.req;
                if(req.connection.pair && req.connection.pair._secureEstablished) {
                    return true;
                }
                return false;
            })();

            // }}}
            // {{{ abort

            abort = function() {
                next({
                    abort: true
                });
            };

            // }}}
            // {{{ setTemplate

            setTemplate = function(template) {
                config.res.actionresult = config.res.actionresult || {};
                config.res.actionresult.$switchTemplate = template;
            };

            // }}}
            // {{{ User-Agent apply to action

            Ext.create('Ext.server.UserAgent', config.req.headers['user-agent']).apply(action);

            // }}}
            // {{{ unauthorized

            unauthorized = function(realm) {

                var res = config.res;
                var req = config.req;

                realm = realm || 'Authorization Required';
                res.setHeader('WWW-Authenticate', 'Basic realm="' + realm + '"');
                res.writeHead(401);
                res.end(config.config.app.errors.unauthorized);
                return;
            };

            // }}}
            // {{{ basicAuth

            basicAuth = function(fn, realm) {

                var res = config.res;
                var req = config.req;
                var authorization = req.headers.authorization;

                if(!authorization) {

                    if(!Ext.isString(realm)) {
                        realm = 'Authorization Required';
                    }

                    unauthorized(realm);

                } else {

                    var parts = authorization.split(' '),
                        scheme = parts[0],
                        credentials = new Buffer(parts[1], 'base64').toString().split(':');

                    fn(credentials[0], credentials[1]);

                }

            };

            // }}}
            // {{{ callback

            callback = function() {
                config.res.actionresult = Ext.merge(config.res.actionresult || {}, action.result);
                next();
            };

            // }}}

            Ext.apply(action, {
                mail        : action.$bindMail(config.config.smtp),
                req         : config.req,
                res         : config.res,
                paths       : config.config.app.paths,
                result      : config.res.actionresult || {},
                post        : config.req.body,
                get         : get,
                request     : config.req.body,
                session     : config.req.session,
                redirect    : redirect,
                forbidden   : forbidden,
                isSecure    : isSecure,
                abort       : abort,
                setTemplate : setTemplate,
                unauthorized: unauthorized,
                basicAuth   : basicAuth
            });

            Ext.iterate(action.$moduleNames, function(modName) {

                var mod = action[modName];

                Ext.apply(mod, {
                    req         : config.req,
                    res         : config.res,
                    post        : config.req.body,
                    get         : get,
                    request     : config.req.body,
                    session     : config.req.session,
                    escape      : function() {
                        return mod.conn.escape.apply(mod, arguments);
                    }
                });

            });

            if(action.execute.length === 0) {

                action.execute();
                callback();

            } else {
                action.execute(callback);
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
