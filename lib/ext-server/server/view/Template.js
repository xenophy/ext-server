/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.Template

/**
 * @class Ext.server.view.Template
 *
 * {Ext_server_view_Template:doc-contents}
 */
Ext.define('Ext.server.view.Template', {

    // {{{ constructor

    constructor: function(config, next) {

        config = config;

        var req, res, engineName, engine, data, file;

        req         = config.req;
        res         = config.res;
        engineName  = config.engineName;

        if(Ext.isString(engineName)) {
            engineName = engineName;
        } else if(Ext.isObject(engineName)){
            engineName = engineName.name;
        } else {
            // TODO: Error
        }

        // kari
        if(config.path === '/') {
            config.path = 'index.html';
        };

        file = require('path').normalize(config.root + '/' + config.path);

        // kari
        data = require('fs').readFileSync(file);
        var stat = require('fs').statSync(file);

        var mime                = Ext.$dependencies.mime;

        var headers = {
            "Content-Type"  : mime.lookup(file),
            "Last-Modified" : stat.mtime.toUTCString(),
            "Expires"       : "Thu, 01 Dec 1994 16:00:00 GMT",
            "Cache-Control" : "no-cache, must-revalidate, post-check=0, pre-check=0",
            "Pragma"        : "no-cache",
            "ETag"          : '"' + stat.size + '-' + Number(stat.mtime) + '"'
        };

        engineName  = Ext.String.capitalize(engineName);
        engine      = Ext.create(Ext.String.format('Ext.template.{0}', engineName));
        data        = engine.render(data.toString(), res.actionresult, {filename: file});

        res.setHeader('Content-Length', Buffer.byteLength(data.toString(), 'utf8'));
        res.writeHead(200, headers);
        res.end(data);
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
