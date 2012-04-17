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
    // {{{ mixins

    mixins: [
        'Ext.server.controller.Controller'
    ],

    // }}}
    // {{{ dispatch

    dispatch: function(config, next) {

        var me, node, paths, files, normalize, exists, stat, realpath, appConfig,
            req, res, basename, dirname, actionPath, actionName, actions,
            checkGlobalActionFile, checkExtentActionFile,
            checkTargetActionFile, expandActions, runActions;

        me = this;

        node = {
            fs      : require('fs'),
            path    : require('path'),
            url     : require('url')
        };
        normalize   = node.path.normalize;
        exists      = node.path.exists;
        stat        = node.fs.stat;
        realpath    = node.fs.realpath;

        req         = config.req;
        res         = config.res;
        appConfig   = config.config.app;
        paths       = appConfig.paths;

        paths.files = {};
        files       = [];
        actions     = [];

        basename    = node.path.basename(node.url.parse(req.url, true).pathname);
        dirname     = node.path.dirname(req.url);
        actionName  = basename || appConfig.actionName;

        if(basename.substr(-1) === '/') {
            actionPath = req.url.substr(0, req.url.length - 1);
        } else {
            actionPath = dirname;
        }

        if(actionPath.indexOf('?') !== -1) {
            actionPath = actionPath.substr(0, actionPath.indexOf('?'));
        }

        Ext.apply(paths.files, {
            global  : normalize(paths.actions + '/' + appConfig.files.global),
            target  : normalize(paths.actions + '/' + actionPath + '/' + actionName + '.js')
        });

        // {{{ checkGlobalActionFile

        checkGlobalActionFile = function(file, fn) {
            realpath(file, function(err, resolvedPath) {
                if(err) {
                    fn();
                } else {
                    fn({
                        type: Ext.app.Controller.GLOBAL_ACTION,
                        path: resolvedPath
                    });
                }
            });
        };

        // }}}
        // {{{ checkExtentActionFile

        checkExtentActionFile = function(dirs, fn) {

            if(dirs.length > 0) {

                var dir, file;

                dir = normalize(paths.actions + '/' + dirs.join('/') + '/');
                file = dir + appConfig.files.extent;

                realpath(file, function(err, resolvedPath) {
                    if(err) {
                        dirs.pop();
                        checkExtentActionFile(dirs, fn);
                    } else {
                        fn({
                            type: Ext.app.Controller.EXTENT_ACTION,
                            path: file
                        });
                    }
                });

            } else {
                fn();
            }

        };

        // }}}
        // {{{ checkTargetActionFile

        checkTargetActionFile = function(file, fn) {
            realpath(file, function(err, resolvedPath) {
                if(err) {
                    fn();
                } else {
                    fn({
                        type: Ext.app.Controller.TARGET_ACTION,
                        path: resolvedPath
                    });
                }
            });
        };

        // }}}
        // {{{ expandActions

        expandActions = function(files, fn) {

            var path, file, type, exit;

            if(files.length === 0) {
                fn();
                return;
            }

            file = files.shift();

            path = file.path;
            type = file.type;
            exit = function() {

                if(files.length > 0) {
                    expandActions(files, fn);
                } else {
                    fn();
                }

            };

            exists(path, function(result) {

                if(!result) {
                    exit();
                } else {

                    stat(path, function(err, stat) {

                        if(err) {
                            exit();
                        } else {

                            Ext.moduleCacheClear(path, stat.mtime);

                            var actionsrc;

                            try {
                                actionsrc = require(path);
                            } catch(e) {

                                res.$errorCode = 500;
                                res.$errorDetails = {
                                    msg: e.message,
                                    stack: e.stack
                                };

                                next();

                                return;
                            }

                            // 配列判定
                            if(Ext.isArray(actionsrc)) {

                                actionsrc.forEach(function(src, i) {

                                    var o = {
                                        name    : actionName + i,
                                        type    : type,
                                        $src    : src,
                                        define  : false,
                                        ready   : false
                                    };

                                    actions.push(o);

                                });

                            } else {

                                var o = {
                                    name    : actionName,
                                    type    : type,
                                    $src    : actionsrc,
                                    define  : false,
                                    ready   : false
                                };

                                actions.push(o);

                            }

                            exit();

                        }

                    });

                }

            });

        };

        // }}}
        // {{{ runActions

        runActions = function(next) {

            var me, idx, rc;

            me  = this;
            idx = 0;
            rc  = rc || {abort: false};






            console.log(global);




            next();
        };

        // }}}
        // {{{ build action chain and make action instance.

        checkGlobalActionFile(paths.files.global, function(result) {

            checkExtentActionFile(actionPath.split('/'), function(result) {

                if(result) {
                    files.push(result);
                }

                checkTargetActionFile(paths.files.target, function(result) {

                    if(result) {
                        files.push(result);
                    }

                    expandActions(files, function() {

                        if(actions.length === 0) {
                            next();
                        } else {

                            me.actions = actions;

                            me.makeInstance(config, function() {

                                var all = true;

                                me.actions.forEach(function(item, i) {
                                    if(!item.ready) {
                                        all = false;
                                    }
                                });

                                if(all) {
                                    runActions(next);
                                }

                            });

                        }

                    });

                });

            });

        });

        // }}}

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
