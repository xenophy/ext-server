/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.action.Direct

/**
 * @class Ext.server.action.Direct
 *
 * {Ext_server_action_Direct:doc-contents}
 */
Ext.define('Ext.server.action.Direct', {

    // {{{ extend

    extend: 'Ext.server.action.Action',

    // }}}
    // {{{ alternateClassName

    alternateClassname: 'Ext.DirectAction',

    // }}}
    // {{{ requires

    requires: ['Ext.app.module.Module'],

    // }}}
    // {{{ $execute

    $execute: function() {

        var action = this;

        return function(config, next) {

            var req = config.req;
            var res = config.res;

            var p = require('url').parse(req.url, true);
            var get = {}, post = {};

            if(p.search) {
                get = require('querystring').parse(p.search.substr(1));
            };

            if(req.method === 'POST') {

                var finmods = {}, single, fin;

                Ext.apply(post, req.body);

                if(!post['0']) {
                    post = {
                        '0': post
                    };
                    single = true;
                }

                fin = function(tid, o) {

                    finmods[tid] = o;

                    var finall = true;

                    Ext.iterate(finmods, function(k, v) {
                        if(!v) {
                            finall = false;
                            return false;
                        }
                    });

                    if(finall) {

                        /*
                        if(single) {

                            var ret = [];

                            Ext.iterate(finmods, function(k, v) {
                                ret.push(Ext.decode(v.render.data));
                            });

                            var output = Ext.encode(ret);

                            res.setHeader("Content-Type",   require('mime').lookup('json'));
                            res.setHeader("Content-Length", Buffer.byteLength(output, 'utf8'));
                            res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
                            res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
                            res.setHeader("Pragma",         "no-cache");
                            res.writeHead(200);
                            res.end(output);

                        } else {
                            */

                            var ret = [];

                            Ext.iterate(finmods, function(k, v) {
                                ret.push(Ext.decode(v.render.data));
                            });

                            var output = Ext.encode(ret);

                            res.setHeader("Content-Type",   require('mime').lookup('json'));
                            res.setHeader("Content-Length", Buffer.byteLength(output, 'utf8'));
                            res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
                            res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
                            res.setHeader("Pragma",         "no-cache");
                            res.writeHead(200);
                            res.end(output);

                            next();

                        //};

                    } else {

                        finmods[tid] = o;

                    }

                };

                Ext.iterate(post, function(k, post) {
                    finmods[post.tid || post.extTID] = false;
                });

                Ext.iterate(post, function(k, post) {

                    var actionName = post.action || post.extAction;
                    var method = post.method || post.extMethod;
                    var tid = post.tid || post.extTID;
                    var arg = post.data || [];
                    var isUpload = false;
                    var mod = action[actionName];

                    if(post.extUpload || post.extAction) {

                        var o = {};
                        o.isUpload = false;

                        Ext.iterate(post, function(key, v) {
                            if(!key.match(/^(extTID|extAction|extMethod|extType|extUpload)/)) {
                                o[key] = v;
                            }
                        });

                        if(post.extUpload == 'true') {
                            o.isUpload = true;
                            isUpload = true;
                        }

                        arg.push(o);
                    }

                    arg.push(function(result) {

                        if(isUpload) {

                            var output = Ext.encode({
                                type    : 'rpc',
                                tid     : tid,
                                action  : actionName,
                                method  : method,
                                result  : result,
                                status  : true
                            });

                            output = Ext.String.format('<html><body><textarea>{0}</textarea></body></html>', output);

                            res.setHeader("Content-Type",   require('mime').lookup('html'));
                            res.setHeader("Content-Length", Buffer.byteLength(output, 'utf8'));
                            res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
                            res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
                            res.setHeader("Pragma",         "no-cache");
                            res.writeHead(200);
                            res.end(output);

                            next();

                        } else {

                            var output = Ext.encode({
                                type    : 'rpc',
                                tid     : tid,
                                action  : actionName,
                                method  : method,
                                result  : result,
                                status  : true
                            });

                            var o = {
                                abort: true,
                                render: {
                                    ext: 'json',
                                    size: output.length,
                                    data: output
                                }
                            };

                            fin(tid, o);

                        }

                    });

                    Ext.apply(mod, {
                        req: req,
                        res: res,
                        cookie: req.cookies,
                        session: req.session
                    });

                    // モジュールメソッドコール
                    mod[method].apply(mod, arg);

                });

            } else {

                var api = {
                    url         : action.url || req.url,
                    namespace   : action.namespace || undefined,
                    type        : 'remoting'
                };

                var remoteActions = {};

                Ext.iterate(action, function(memberName) {

                    var member = action[memberName];

                    if(member instanceof Ext.app.module.Module) {

                        var mod = member;
                        var interface = [];

                        if(!Ext.isArray(mod.formHandler)) {
                            mod.formHandler = [];
                        }

                        if(!Ext.isArray(mod.privateHandler)) {
                            mod.privateHandler = [];
                        }

                        Ext.iterate(member, function(name) {

                            var formHandler = false

                            if(Ext.isFunction(mod[name])) {

                                if(mod.formHandler.indexOf(name) !== -1 || name.substr(0, 1) === '$') {
                                    formHandler = true;
                                }

                                if(name.substr(0, 1) !== '_' && mod.privateHandler.indexOf(name) === -1) {

                                    var o = {
                                        name:name,
                                        len: (mod[name].length - 1)
                                    };

                                    if(formHandler) {
                                        o.formHandler = true;
                                    }

                                    interface.push(o);

                                }

                            }

                        });

                        remoteActions[memberName] = interface
                    }
                });

                api['actions'] = remoteActions;

                var addNS = '';
                if(action.namespace) {
                    addNS = "Ext.ns('" + action.namespace + "');";
                }

                var output = [
                    "Ext.ns('Ext.app');",
                    addNS,
                    "Ext.app.REMOTING_API = ",
                    Ext.JSON.encode(api),
                    ";"
                ].join('');

                res.setHeader("Content-Type",   require('mime').lookup('js'));
                res.setHeader("Content-Length", Buffer.byteLength(output, 'utf8'));
                res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
                res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
                res.setHeader("Pragma",         "no-cache");
                res.writeHead(200);
                res.end(output);

                next();

            }

        };

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
