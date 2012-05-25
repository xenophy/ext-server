/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.View

/**
 * @class Ext.server.view.View
 *
 * {Ext_server_view_View:doc-contents}
 */
Ext.define('Ext.server.view.View', {

    // {{{ requires

    requires: [
        'Ext.server.view.Static',
        'Ext.server.view.Template'
    ],

    // }}}
    // {{{ mixins

    mixins: [
        'Ext.server.view.Util'
    ],

    // }}}
    // {{{ extend

    extend: 'Ext.app.view.View',

    // }}}
    // {{{ constructor

    constructor: function() {

    },

    // }}}

    // {{{ isTempalte

    isTemplate: function(ext, template_exts) {

        var ret = true;

        if(ext || ext === '') {

            if(ext === '') {
                ext = '.html';
            }

            ext = ext.substr(1);

            if(Ext.Array.indexOf(template_exts, ext) === -1) {
                ret = false;
            }

        }

        return ret;
    },

    // }}}
    // {{{ render

    render: function(config, next) {

        var me, req, res, url, path, paths, ext,
            directoryIndex, template_exts,
            actionResultConfig, mime, options;

        me                  = this;
        req                 = config.req;
        res                 = config.res;
        url                 = require('url').parse(req.url);
        path                = decodeURIComponent(url.pathname);
        paths               = config.config.app.paths;
        ext                 = require('path').extname(require('url').parse(req.url, true).pathname);
        directoryIndex      = config.config.app.directoryIndex;
        template_exts       = config.config.app.template_exts;
        mime                = Ext.$dependencies.mime;
        actionResultConfig  = config.actionResultConfig;

        if(actionResultConfig.abort) {

            if(actionResultConfig.abort === 500) {

                // internal server error
                me.printErrors(res, 500, config.config.app.errors, actionResultConfig);

            } else if(actionResultConfig.forbidden) {

                // forbidden
                me.printErrors(res, 403, config.config.app.errors, actionResultConfig);

            } else if(actionResultConfig.redirect) {

                // redirect
                res.statusCode = 302;
                res.setHeader('Location', actionResultConfig.redirect);
                res.end('Redirecting to ' + actionResultConfig.redirect);

            }

            return;
        }

        options = {
            root: config.config.app.paths.public,
            req: config.req,
            res: config.res
        };

        if(res.headerSent) {
            return;
        }

        config.res.actionresult = config.res.actionresult || {};

        if(config.res.actionresult.$switchTemplate) {
            root = me.paths.templates;
            me.path = decodeURIComponent(node.url.parse(config.res.actionresult.$switchTemplate).pathname)
        }

        if(this.isTemplate(
            require('path').extname(require('url').parse(config.req.url, true).pathname),
            config.config.app.template_exts
        ) === false) {

            // Static send
            Ext.create('Ext.server.view.Static', Ext.apply(options, {
            }), next);

        } else {

            // Template send
            Ext.create('Ext.server.view.Template', Ext.apply(options, {
                engineName          : config.config.app.template_engine,
                path                : path,
                errors              : config.config.app.errors,
                actionResultConfig  : actionResultConfig
            }), next);

        }

    }

    // }}}



    /*
    render: function(config, next) {

        var me, node, chain;

        node = {
            fs          : require('fs'),
            url         : require('url'),
            path        : require('path')
        };

        me = this;

        this.req                = config.req;
        this.res                = config.res;
        this.url                = node.url.parse(this.req.url);
        this.path               = decodeURIComponent(this.url.pathname);
        this.config             = config.config;
        this.paths              = this.config.app.paths;
        this.ext                = node.path.extname(node.url.parse(config.req.url, true).pathname);
        this.directoryIndex     = this.config.app.directoryIndex;
        this.template_exts      = this.config.app.template_exts;
        this.mime               = Ext.$dependencies.mime;
        this.actionResultConfig = config.actionResultConfig;

        var res     = this.res;
        var req     = this.req;
        var root    = me.paths.public;

        if(res.headerSent) {
            return;
        }

        config.res.actionresult = config.res.actionresult || {};

        if(config.res.actionresult.$switchTemplate) {
            root = me.paths.templates;
            me.path = decodeURIComponent(node.url.parse(config.res.actionresult.$switchTemplate).pathname)
        }

        if(this.actionResultConfig.abort) {

            if(this.actionResultConfig.abort === 500) {

                console.log("500 Error Details");
                console.log(this.actionResultConfig.errorDetails);

                me.printErrors(500);

            } else if(this.actionResultConfig.forbidden) {

                // forbidden
                me.printErrors(403);

            } else if(this.actionResultConfig.redirect) {

                // redirect
                res.statusCode = 302;
                res.setHeader('Location', this.actionResultConfig.redirect);
                res.end('Redirecting to ' + this.actionResultConfig.redirect);

            } else {

                //res.statusCode = 200;
                //res.end();

            }

            return;
        }

        // special dir check.
        if(this.config.app.dirs.special && this.url.path.substr(0, this.config.app.dirs.special.length) === this.config.app.dirs.special) {

            var file;

            file = process.ExtEnv.resourcedir + '/public/' + this.url.path.substr(this.config.app.dirs.special.length);

            node.fs.stat(file, function(err, stat) {

                // 404 error
                if(err) {
                    me.printErrors(404);
                    return;
                }

                node.fs.readFile(file, function(err, data) {

                    var headers,
                    mime = me.mime;

                    headers = {
                        "Content-Type"  : mime.lookup(file),
                        "Content-Length": stat.size,
                        "Last-Modified" : stat.mtime.toUTCString(),
                        "Expires"       : "Thu, 01 Dec 1994 16:00:00 GMT",
                        "Cache-Control" : "no-cache, must-revalidate, post-check=0, pre-check=0",
                        "Pragma"        : "no-cache",
                        "ETag"          : me.etag(stat)
                    };

                                        res.setHeader('Content-Length', stat.size);

                    var maxAge = 0; // 設定できるようにする？

                    if(!res.getHeader('Cache-Control')) {
                        res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
                    }

                    if(!res.getHeader('Last-Modified')) {
                        res.setHeader('Last-Modified', stat.mtime.toUTCString());
                    }

                    if(!res.getHeader('ETag')) {
                        res.setHeader('ETag', me.etag(stat));
                    }

                    if(req.headers['if-modified-since'] || req.headers['if-none-match']) {
                        if(!me.modified(req, res)) {
                            return me.notModified(res);
                        }
                    }

                    res.writeHead(200, headers);
                    res.end(data);

                });

            });

            return;

        }

        chain = [];

        // target stat
        chain.push(function() {

            var file = node.path.normalize(root + '/' + me.path);

            node.fs.stat(file, function(err, stat) {

                // 404 error
                if(err) {
                    me.printErrors(404);
                    return;
                }

                if(stat.isDirectory() && me.path.substr(-1) !== '/') {

                    var res = me.res,
                        url = me.url;

                    res.statusCode = 301;
                    res.setHeader('Location', url.pathname + '/');
                    res.end('Redirecting to ' + url.pathname + '/');
                    return;
                }

                chain.shift()();

            });

        });

        chain.push(function() {

            var tmp, dirs, url;

            if(config.res.actionresult.$switchTemplate) {
                dirs= [node.path.normalize(root + '/' + me.path)];
            } else {
                url = me.url;
                tmp = url.pathname.split('/');
                dirs = Ext.Array.clone(me.directoryIndex);

                if(!Ext.isEmpty(tmp[tmp.length -1])) {
                    dirs.unshift(tmp[tmp.length -1]);
                }

                delete tmp[tmp.length -1];

                tmp = tmp.join('/');

                Ext.iterate(dirs, function(item, i) {
                    dirs[i] = node.path.normalize(root + '/' + tmp + '/' + item);
                });
            }

            Ext.iterate(dirs, function(item, i) {
                chain.unshift(function() {
                    node.fs.stat(item, function(err, stat) {

                        if(!err) {

                            chain.shift()({
                                path: item,
                                stat: stat
                            });

                        } else {
                            chain.shift()({});
                        }
                    });
                });
            });

            chain.shift()();
        });

        chain.push(function(o) {

            var file, stat, req, res, reader;

            file = o.path;
            stat = o.stat;
            req  = me.req;
            res  = me.res;
            conf = me.config.app;

            if(config.res.actionresult.$switchTemplate) {
                file = node.path.normalize(root + '/' + me.path);
            }

            reader = function() {

                var headers, mime = me.mime, sender;

                headers = {
                    "Content-Type"  : mime.lookup(file),
                    "Last-Modified" : stat.mtime.toUTCString(),
                    "Expires"       : "Thu, 01 Dec 1994 16:00:00 GMT",
                    "Cache-Control" : "no-cache, must-revalidate, post-check=0, pre-check=0",
                    "Pragma"        : "no-cache",
                    "ETag"          : me.etag(stat)
                };

                // if-modified-since / if-none-match
                if(req.headers['if-modified-since'] || req.headers['if-none-match']) {
                    if(!me.modified(req, res)) {
                        return me.notModified(res);
                    }
                }

                // data sender
                sender = function(data) {

                    res.setHeader('Content-Length', stat.size);

                    var maxAge = 0; // 設定できるようにする？

                    if(!res.getHeader('Cache-Control')) {
                        res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
                    }

                    if(!res.getHeader('Last-Modified')) {
                        res.setHeader('Last-Modified', stat.mtime.toUTCString());
                    }

                    if(!res.getHeader('ETag')) {
                        res.setHeader('ETag', me.etag(stat));
                    }

                    res.writeHead(200, headers);
                    res.end(data);
                };

                // output cache
                if(me.$cache[file] !== undefined) {

                    sender(me.$cache[file]);
                    return;
                };

                node.fs.readFile(file, function(err, data) {

                    if(err) {

                        if(err.errno === 20 && err.code === 'EMFILE') {

                            Ext.defer(reader, 100);
                            return;

                        } else {

                            // 500 error
                            me.printErrors(500);
                            return;

                        }
                    }

                    // テンプレート処理
                    if(me.isTemplate(me.ext)) {

                        var engineName, engine;

                        if(Ext.isString(conf.template_engine)) {
                            engineName = conf.template_engine;
                        } else if(Ext.isObject(conf.template_engine)){
                            engineName = conf.template_engine.name;
                        } else {
                            // TODO: Error
                        }

                        engineName = Ext.String.capitalize(engineName.toString());
                        engine = Ext.create(Ext.String.format('Ext.template.{0}', engineName));
                        data = engine.render(data.toString(), res.actionresult, {filename: file});
                        res.setHeader('Content-Length', Buffer.byteLength(data.toString(), 'utf8'));

                        res.writeHead(200, headers);
                        res.end(data);

                    } else {

                        // 静的コンテンツ出力
                        sender(data);

                    }

                });

            };

            reader();

        });

        // run
        chain.shift()();
    }

    // }}}
    */

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
