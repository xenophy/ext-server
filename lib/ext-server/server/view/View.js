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

    // {{{ extend

    extend: 'Ext.app.view.View',

    // }}}
    // {{{ controller

    constructor: function() {

    },

    // }}}
    // {{{ etag

    etag: function(stat) {
        return '"' + stat.size + '-' + Number(stat.mtime) + '"';
    },

    // }}}
    // {{{ modified

    modified: function(req, res, headers) {

        var headers = headers || res._headers || {},
            modifiedSince = req.headers['if-modified-since'],
            lastModified = headers['last-modified'],
            noneMatch = req.headers['if-none-match'],
            etag = headers['etag'];

        if(noneMatch) {
            noneMatch = noneMatch.split(/ *, */);
        }

        if(noneMatch && etag && ~noneMatch.indexOf(etag)) {
            return false;
        }

        if(modifiedSince && lastModified) {

            modifiedSince   = new Date(modifiedSince);
            lastModified    = new Date(lastModified);

            if(!isNaN(modifiedSince.getTime())) {
                if(lastModified <= modifiedSince) {
                    return false;
                }
            }
        }

        return true;
    },

    // }}}
    // {{{ removeContentHeaders

    removeContentHeaders: function(res) {
        Object.keys(res._headers).forEach(function(field) {
            if(0 == field.indexOf('content')) {
                res.removeHeader(field);
            }
        });
    },

    // }}}
    // {{{ notModified

    notModified: function(res) {
        this.removeContentHeaders(res);
        res.statusCode = 304;
        res.end();
    },

    // }}}
    // {{{ printErrors

    printErrors: function(code) {

        var me = this,
            res = me.res, mime = me.mime,
            content = '', data = {};

        switch(code) {

            case 403:
                content = me.config.app.errors.forbidden;
            break;

            case 404:
                content = me.config.app.errors.not_found;
            break;

            case 500:
                content = me.config.app.errors.internal_server_error;
            break;

        }

        data = me.actionResultConfig.errorDetails || {};

        Ext.$dependencies.swig.init({cache: false, autoescape: false});
        content = Ext.$dependencies.swig.compile(content, {})(data).toString();

        res.setHeader("Content-Type",   mime.lookup('html'));
        res.setHeader("Content-Length", Buffer.byteLength(content, 'utf8'));
        res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
        res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
        res.setHeader("Pragma",         "no-cache");
        res.writeHead(code);
        res.end(content);

    },

    // }}}
    // {{{ isTempalte

    isTemplate: function() {

        var me = this,
            ext = me.ext,
            template_exts = this.template_exts,
            isTemplate = true;

        if(ext || ext === '') {

            if(ext === '') {
                ext = '.html';
            }

            ext = ext.substr(1);

            if(Ext.Array.indexOf(template_exts, ext) === -1) {
                isTemplate = false;
            }

        }

        return isTemplate;

    },

    // }}}
    // {{{ render

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

        var res = this.res;
        var req = this.req;

        if(res.headerSent) {
            return;
        }

        if(this.actionResultConfig.abort) {

            if(this.actionResultConfig.abort === 500) {

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

            var file = node.path.normalize(me.paths.public + '/' + me.path);

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

            url = me.url;
            tmp = url.pathname.split('/');
            dirs = Ext.Array.clone(me.directoryIndex);

            if(!Ext.isEmpty(tmp[tmp.length -1])) {
                dirs.unshift(tmp[tmp.length -1]);
            }

            delete tmp[tmp.length -1];

            tmp = tmp.join('/');

            Ext.iterate(dirs, function(item, i) {
                dirs[i] = node.path.normalize(me.paths.public + '/' + tmp + '/' + item);
            });

            Ext.iterate(dirs, function(item, i) {
                chain.unshift(function() {
                    node.fs.stat(item, function(err, stat) {

                        if(!err) {

                            chain.shift()({
                                path: item,
                                stat: stat
                            });

                        } else {
                            chain.shift()();
                        }
                    });
                });
            });

            chain.shift()();
        });

        chain.push(function(o) {

            var file, stat, req, res;

            file = o.path;
            stat = o.stat;
            req  = me.req;
            res  = me.res;
            conf = me.config.app;

            node.fs.readFile(file, function(err, data) {

                if(err) {

                    // 500 error
                    me.printErrors(500);
                    return;
                }

                var headers,
                    mime = me.mime;

                headers = {
                    "Content-Type"  : mime.lookup(file),
                    //"Content-Length": Buffer.byteLength(data.toString(), 'utf8'),
                    //"Content-Length": stat.size,
                    "Last-Modified" : stat.mtime.toUTCString(),
                    "Expires"       : "Thu, 01 Dec 1994 16:00:00 GMT",
                    "Cache-Control" : "no-cache, must-revalidate, post-check=0, pre-check=0",
                    "Pragma"        : "no-cache",
                    "ETag"          : me.etag(stat)
                };

                // テンプレート処理
                if(me.isTemplate()) {

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

                } else {

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

                }

                res.writeHead(200, headers);
                res.end(data);

            });

        });

        // run
        chain.shift()();
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
