/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.Util

/**
 * @class Ext.server.view.Util
 *
 * {Ext_server_view_Util:doc-contents}
 */
Ext.define('Ext.server.view.Util', {

    // {{{ printErrors

    printErrors: function(res, code, errors, data) {

        var mime    = Ext.$dependencies.mime,
            swig    = Ext.$dependencies.swig,
            content = '', data = data || {};

        switch(code) {

            case 403:
                content = errors.forbidden;
            break;

            case 404:
                content = errors.not_found;
            break;

            case 500:
                content = errors.internal_server_error;
            break;

        }

        swig.init({cache: false, autoescape: false});
        content = swig.compile(content, {})(data).toString();

        res.setHeader("Content-Type",   mime.lookup('html'));
        res.setHeader("Content-Length", Buffer.byteLength(content.toString(), 'utf8'));
        res.setHeader("Expires",        "Thu, 01 Dec 1994 16:00:00 GMT");
        res.setHeader("Cache-Control",  "no-cache, must-revalidate, post-check=0, pre-check=0");
        res.setHeader("Pragma",         "no-cache");
        res.writeHead(code);
        res.end(content);

    },

    // }}}
    // {{{ etag

    etag: function(stat) {
        return '"' + stat.size + '-' + Number(stat.mtime) + '"';
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
