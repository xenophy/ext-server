/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.controller.Auto

/**
 * @class Ext.server.controller.Auto
 *
 * {Ext_server_controller_Auto:doc-contents}
 */
Ext.define('Ext.server.controller.Auto', {

    // {{{ alternateClassName

    alternateClassName: 'Ext.server.AutoController',

    // }}}
    // {{{ extend

    extend: 'Ext.app.controller.Auto',

    // }}}
    // {{{ dispatch

    dispatch: function(config, next) {

        var root, paths;

        paths   = config.config.app.paths;
        root    = paths.actions;

        next();






        /*
        this.buildActionChain(config, function() {


            next();

        });

        /*
        var me = this;

        Ext.doSeries([
            function(callback) {
                me.buildActionChain(config, callback);
            },
            next
        ], function (err, results) {

            //if (err) { throw err; }
            //console.log('series all done. ' + results);
        });

        /*c
        Ext.Do
        .next(this.buildActionChain)
        .next(next);

        /*
        this.buildActionChain(config, function() {

            next();
        });

        */

        /*
        var req, url, path, paths, action, basename, dirname;

        path     = require('path');
        req      = config.req;
        paths    = config.config.app.paths;
        url      = req.url;
        basename = path.basename(require('url').parse(url, true).pathname);
        dirname  = path.dirname(url);
        action   = basename || 'index';

        req.path = dirname;

        if(req.path == '/' && basename.substr(-1) !== '/') {
            req.path = 'index.js';
        } else {
            if(basename.substr(-1) === '/') {
                req.path = req.url.substr(0, req.url.length - 1) + '.js';
                action = 'index';
            } else {
                req.path = dirname + '.js';
            }
        }

        console.log(req.path);
        console.log(action);

        if(basename.substr(-1) === '/') {
            actionPath = req.url.substr(0, req.url.length - 1);
        } else {
            actionPath = dirname;
        }

        // クエリーストリング除去
        if(actionPath.indexOf('?') !== -1) {
            actionPath = actionPath.substr(0, actionPath.indexOf('?'));
        }

        extPos = action.indexOf('.');
        if(extPos > 0) {
            action = action.substr(0, extPos);
        }

        // コントローラーパス取得
        req.file = require('path').normalize(paths.controllers + '/' + req.path);

        console.log(actionPath);





//         console.log(config.config.app);


*/



    },

    // }}}
    // {{{ buildActionChain

    buildActionChain: function(config, next) {

    },

    // }}}
    // {{{ initAction

    initAction: function(config, next) {



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
