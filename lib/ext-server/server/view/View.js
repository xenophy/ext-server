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
    // {{{ sendStatic

    sendStatic: function(config, next) {

        var invalidRange, appConfig, node, req, res, mime,
            maxAge, ranges, head, get, root, hidden;

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
                return 'ENOENT' == err.code ? next() : next(err);

            } else if (stat.isDirectory()) {
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
                        + stat.size);

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
                    res.setHeader('ETag', '"' + stat.size + '-' + Number(stat.mtime) + '"');
                }

                if(req.headers['if-modified-since'] || req.headers['if-none-match']) {

                    /*
                    if(!utils.modified(req, res)) {
                        return utils.notModified(res);
                    }
                    */
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

        var arc, appConfig, node, mime, paths, res;

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

            var nextStep = false;

            if(arc.template) {
                appConfig.directoryIndex.unshift(arc.template);
            }

            Ext.iterate(appConfig.directoryIndex, function(item, cnt) {

                node.fs.lstat(paths.public + '/' + item, function(err, stats) {
                    if(!err && !stats.isDirectory()) {
                        nextStep = true;
                        next(paths.public + '/' + item);
                        return;
                    }

                    if(!nextStep && appConfig.directoryIndex.length - 1 === cnt) {
                        next(false);
                    }
                });

            });

        })(function(template) {

            // 404 error
            if(!template) {

                // TODO
//                404 - Page Not Found

                return;
            }

        (function(next) {

            node.fs.stat(template, function(err, stat) {

                if(err) {

                    // TODO: 500 error

                    return;
                }

                node.fs.readFile(template, function(err, data) {

                    if(err) {

                        // TODO 500 error

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
                "ETag": stat.size + '-' + Number(stat.mtime)
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
