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

        return Ext.Function.bind(function(config, next) {

            var req = config.req;
            var res = config.res;

            if(req.method === 'POST') {



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

                        Ext.iterate(member, function(name) {

                            var formHandler = false

                            if(Ext.isFunction(mod[name])) {

                                if(name.substr(0, 1) === '$') {
                                    formHandler = true;
                                }

                                if(name.substr(0, 1) !== '_') {

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
