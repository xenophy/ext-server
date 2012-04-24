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
    // {{{ error404

    error404: function(config) {

        var appConfig, res, mime, headers;

        appConfig       = config.config.app;
        res             = config.res,
        mime            = Ext.$dependencies.mime;
        headers         = {
            "Content-Type"      : mime.lookup('html'),
            "Content-Length"    : Buffer.byteLength(appConfig.errors.not_found, 'utf8'),
            "Expires"           : "Thu, 01 Dec 1994 16:00:00 GMT",
            "Cache-Control"     : "no-cache, must-revalidate, post-check=0, pre-check=0",
            "Pragma"            : "no-cache"
        };

        res.writeHead(404);
        res.end(appConfig.errors.not_found);

    },

    // }}}
    // {{{ error500

    error500: function(config) {

        var appConfig, res, mime, headers;

        appConfig       = config.config.app;
        res             = config.res,
        mime            = Ext.$dependencies.mime;
        headers         = {
            "Content-Type"      : mime.lookup('html'),
            "Content-Length"    : Buffer.byteLength(appConfig.errors.internal_server_error, 'utf8'),
            "Expires"           : "Thu, 01 Dec 1994 16:00:00 GMT",
            "Cache-Control"     : "no-cache, must-revalidate, post-check=0, pre-check=0",
            "Pragma"            : "no-cache"
        };

        res.writeHead(500);
        res.end(appConfig.errors.internal_server_error);

    },

    // }}}
    // {{{ sendStatic

    sendStatic: function(config, next) {

        var me, invalidRange, appConfig, node, req, res, mime,
            maxAge, ranges, head, get, root, hidden;

        me = this;
        node            = {
            fs  : require('fs'),
            path: require('path'),
            url : require('url')
        };
        mime            = Ext.$dependencies.mime;
        appConfig       = config.config.app;
        req             = config.req;
        res             = config.res;
        maxAge          = appConfig.maxAge || 0;
        ranges          = req.headers.range;
        head            = 'HEAD' == req.method;
        get             = 'GET' == req.method
        root            = appConfig.paths.public;
        hidden          = appConfig.hidden;

        invalidRange = function(res) {

            var body;

            body = 'Requested Range Not Satisfiable';

            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', body.length);
            res.statusCode = 416;
            res.end(body);
        };

        if(!get && !head) {
            return next();
        }

        var url = node.url.parse(req.url),
            path = decodeURIComponent(url.pathname),
            type;

        if(~path.indexOf('\0')) {
            // 400
            return next(400);
        }

        path = node.path.normalize(node.path.join(root, path));

        if(!hidden && '.' == node.path.basename(path)[0]) {
            return next();
        }

        node.fs.stat(path, function(err, stat) {

            type = mime.lookup(path);

            if(err) {

                // 404
                me.error404(config);
                return;

            } else if(stat.isDirectory()) {

                res.statusCode = 301;
                res.setHeader('Location', url.pathname + '/');
                res.end('Redirecting to ' + url.pathname + '/');
                return;

            }

            var opts = {};

            if(ranges) {

                ranges = utils.parseRange(stat.size, ranges);

                if(ranges) {
                    opts.start = ranges[0].start;
                    opts.end = ranges[0].end;
                    res.statusCode = 206;
                    res.setHeader('Content-Range', 'bytes '
                        + opts.start
                        + '-'
                        + opts.end
                        + '/'
                        + stat.size
                    );

                } else {
                    return invalidRange(res);
                }

            } else {

                res.setHeader('Content-Length', stat.size);

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

           if(!res.getHeader('content-type')) {
               var charset = mime.charsets.lookup(type);
               res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
           }
           res.setHeader('Accept-Ranges', 'bytes');

           if(head) {
               return res.end();
           }

           var stream = node.fs.createReadStream(path, opts);

           stream.pipe(res);

           /*
           if (fn) {
               function callback(err) { done || fn(err); done = true }
               req.on('close', callback);
               req.socket.on('error', callback);
               stream.on('end', callback);
           }
           */


       });

    },

    // }}}
    // {{{ sendTemplate

    sendTemplate: function(config, next) {

        var me, arc, appConfig, node, mime, paths, res;

        me              = this;
        appConfig       = config.config.app;
        arc             = config.actionResultConfig;
        paths           = appConfig.paths;
        mime            = Ext.$dependencies.mime;
        res             = config.res;
        node            = {
            fs  : require('fs'),
            path: require('path')
        };

        (function(next) {

            var nextStep = false, directories = [];

            if(arc.template) {
                directories = [arc.template + '.html'];
            } else {
                directories = Ext.Array.clone(appConfig.directoryIndex);
            }

            Ext.iterate(directories, function(item, cnt) {

                node.fs.lstat(paths.public + '/' + item, function(err, stats) {

                    if(!err && !stats.isDirectory()) {
                        nextStep = true;
                        next(paths.public + '/' + item);
                        return;
                    }

                    if(!nextStep && directories.length - 1 === cnt) {
                        next(false);
                    }
                });

            });

        })(function(template) {

            if(!template) {

                // 404 error
                me.error404(config);
                return;

            }

        (function(next) {

            node.fs.stat(template, function(err, stat) {

                if(err) {

                    // 500 error
                    me.error500(config);
                    return;
                }

                node.fs.readFile(template, function(err, data) {

                    if(err) {

                        // 500 error
                        me.error500(config);
                        return;
                    }

                    next(template, stat, data.toString());

                });

            });


        })(function(template, stat, data) {

            var maxAge, headers, ext;

            // TODO:template binding values



            maxAge = 0;
            headers = {
                "Content-Type": mime.lookup(template),
                "Content-Length": Buffer.byteLength(data, 'utf8'),
                "Last-Modified": stat.mtime.toUTCString(),
                "Expires": "Thu, 01 Dec 1994 16:00:00 GMT",
                "Cache-Control": "no-cache, must-revalidate, post-check=0, pre-check=0",
                "Pragma": "no-cache",
                "ETag": me.etag(stat) //stat.size + '-' + Number(stat.mtime)
            };

            res.writeHead(200, headers);
            res.end(data);

        });

        });

    },

    // }}}
    // {{{ render

    render: function(config, next) {

        var req, node, ext, mime, isTemplate, template_exts, actionResult;

        req             = config.req;
        node            = {
            path: require('path')
        };
        template_exts   = config.config.app.template_exts;
        mime            = Ext.$dependencies.mime;

        if(!Ext.isArray(template_exts)) {
            template_exts = [];
        }

        ext                 = node.path.extname(req.url);
        isTemplate          = true;
        actionResultConfig  = config.actionResultConfig;

        if(ext || ext === '') {

            if(ext === '') {
                ext = '.html';
            }

            ext = ext.substr(1);

            if(Ext.Array.indexOf(template_exts, ext) === -1) {
                isTemplate = false;
            }

        }

        // reject rendering
        if(actionResultConfig.render === false) {
            next();
            return;
        }

        // redirect
        if(Ext.isString(actionResultConfig.redirect)) {

            try {
                res.writeHead(302, {
                    'Location': actionResultConfig.redirect
                });
            } catch(e){}

            res.end();
            next();
            return;
        }

        // rendering user setting
        if(Ext.isObject(actionResultConfig.render)) {

            var r, ext, data, size, maxAge, headers;

            r       = actionResultConfig.render;
            maxAge  = 0;
            ext     = r.ext;
            data    = r.data;
            size    = r.size;
            headers = {
                "Content-Type": mime.lookup(ext)
            };

            res.writeHead(200, headers);
            res.end(data);
            next();
            return;
        }

        if(isTemplate) {
            this.sendTemplate(config, next);
        } else {
            this.sendStatic(config, next);
        }

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
