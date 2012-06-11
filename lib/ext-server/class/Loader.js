/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Loader

/**
 * @class Ext.Loader
 *
 * {Ext_Loader:doc-contents}
 */
Ext.Loader = new function() {

    var Loader                  = this,
        Manager                 = Ext.ClassManager,
        Class                   = Ext.Class,
        flexSetter              = Ext.Function.flexSetter,
        alias                   = Ext.Function.alias,
        pass                    = Ext.Function.pass,
        defer                   = Ext.Function.defer,
        arrayErase              = Ext.Array.erase,
        dependencyProperties    = ['extend', 'mixins', 'requires'],
        isInHistory             = {},
        history                 = [],
        slashDotSlashRe         = /\/\.\//g,
        dotRe                   = /\./g;

    Ext.apply(Loader, {

        // {{{ isInHistory

        /**
         * @private
         */
        isInHistory: isInHistory,

        // }}}
        // {{{ history

        /**
         * {Ext_Loader:property-history:desc}
         * @property {Array} history
         */
        history: history,

        // }}}
        // {{{ config

        /**
         * {Ext_Loader:property-config:desc}
         * @private
         */
        config: {

            // {{{ enabled

            /**
             * @cfg {Boolean} enabled
             * {Ext_Loader:cfg-enabled:desc}
             */
            enabled: false,

            // }}}
            // {{{ scriptChainDelay

            /**
             * @cfg {Boolean} scriptChainDelay
             * {Ext_Loader:cfg-scriptChainDelay:desc}
             */
            scriptChainDelay : false,

            // }}}
            // {{{ disableCaching

            /**
             * @cfg {Boolean} disableCaching
             */
            disableCaching: true,

            // }}}
            // {{{ disableCachingParam

            /**
             * @cfg {String} disableCachingParam
             * {Ext_Loader:cfg-disableCachingParam:desc}
             */
            disableCachingParam: '_dc',

            // }}}
            // {{{ garbageCollect

            /**
             * @cfg {Boolean} garbageCollect
             * {Ext_Loader:cfg-garbageCollect:desc}
             */
            garbageCollect : false,

            // }}}
            // {{{ paths

            /**
             * @cfg {Object} paths
             * {Ext_Loader:cfg-paths:desc}
             */
            paths: {
                'Ext': '.'
            },

            // }}}
            // {{{ preserveScripts

            /**
             * @cfg {Boolean} preserveScripts
             * {Ext_Loader:cfg-preserveScripts:desc}
             */
            preserveScripts : true,

            // }}}
            // {{{ scriptCharset

            /**
             * @cfg {String} scriptCharset
             * {Ext_Loader:cfg-scriptCharset:desc}
             */
            scriptCharset : undefined

            // }}}

        },

        // }}}
        // {{{ setConfig

        /**
         * {Ext_Loader:method-setConfig:desc}
         *
         * @param {Object} config {Ext_Loader:method-setConfig:param_config}
         * @return {Ext.Loader} {Ext_Loader:method-setConfig:return}
         */
        setConfig: function(name, value) {

            if(Ext.isObject(name) && arguments.length === 1) {
                Ext.merge(Loader.config, name);
            } else {
                Loader.config[name] = (Ext.isObject(value)) ? Ext.merge(Loader.config[name], value) : value;
            }

            return Loader;
        },

        // }}}
        // {{{ getConfig

        /**
         * {Ext_Loader:method-getConfig:desc}
         * @param {String} name {Ext_Loader:method-getConfig:param_name}
         * @return {Object} {Ext_Loader:method-getConfig:return}
         */
        getConfig: function(name) {

            if(name) {
                return Loader.config[name];
            }

            return Loader.config;
        },

        // }}}
        // {{{ setPath

        /**
         * {Ext_Loader:method-setPath:desc}
         *
         * @param {String/Object} name {Ext_Loader:method-setPath:param_name}
         * @param {String} path {Ext_Loader:method-setPath:param_path}
         * @return {Ext.Loader} {Ext_Loader:method-setPath:return}
         * @method
         */
        setPath: flexSetter(function(name, path) {
            Loader.config.paths[name] = path;

            return Loader;
        }),

        // }}}
        // {{{ getPath

        /**
         * {Ext_Loader:method-getPath:desc}
         *
         * @param {String} className {Ext_Loader:method-getPath:param_className}
         * @return {String} {Ext_Loader:method-getPath:return}
         */
        getPath: function(className) {
            var path = '',
                paths = Loader.config.paths,
                prefix = Loader.getPrefix(className);

            if(prefix.length > 0) {
                if(prefix === className) {
                    return paths[prefix];
                }

                path = paths[prefix];
                className = className.substring(prefix.length + 1);
            }

            if(path.length > 0) {
                path += '/';
            }

            return path.replace(slashDotSlashRe, '/') + className.replace(dotRe, "/") + '.js';
        },

        // }}}
        // {{{ getPrefix

        /**
         * {Ext_Loader:method-getPrefix:desc}
         * @private
         * @param {String} className
         */
        getPrefix: function(className) {
            var paths = Loader.config.paths,
                prefix, deepestPrefix = '';

            if(paths.hasOwnProperty(className)) {
                return className;
            }

            for(prefix in paths) {
                if(paths.hasOwnProperty(prefix) && prefix + '.' === className.substring(0, prefix.length + 1)) {
                    if(prefix.length > deepestPrefix.length) {
                        deepestPrefix = prefix;
                    }
                }
            }

            return deepestPrefix;
        },

        // }}}
        // {{{ require

        /**
         * {Ext_Loader:method-require:desc}
         * @param {String/Array} expressions {Ext_Loader:method-require:param_expressions}
         * @param {Function} fn {Ext_Loader:method-require:param_fn}
         * @param {Object} scope {Ext_Loader:method-require:param_scope}
         * @param {String/Array} excludes {Ext_Loader:method-require:param_excludes}
         */
        require: function(expressions, fn, scope, excludes) {
            if(fn) {
                fn.call(scope);
            }
        },

        // }}}
        // {{{ syncRequire

        /**
         * {Ext_Loader:method-syncRequire:desc}
         * @param {String/Array} expressions {Ext_Loader:method-syncRequire:param_expressions}
         * @param {Function} fn {Ext_Loader:method-syncRequire:param_fn}
         * @param {Object} scope {Ext_Loader:method-syncRequire:param_scope}
         * @param {String/Array} excludes {Ext_Loader:method-syncRequire:param_excludes}
         */
        syncRequire: function() {},

        // }}}
        // {{{ exclude

        /**
         * {Ext_Loader:method-exclude:desc}
         * @param {Array} excludes {Ext_Loader:method-exclude:param_excludes}
         * @return {Object} {Ext_Loader:method-exclude:return}
         */
        exclude: function(excludes) {
            return {
                require: function(expressions, fn, scope) {
                    return Loader.require(expressions, fn, scope, excludes);
                },

                syncRequire: function(expressions, fn, scope) {
                    return Loader.syncRequire(expressions, fn, scope, excludes);
                }
            };
        }

        // }}}

    });

    //<feature classSystem.loader>
    var queue = [],
        isClassFileLoaded = {},
        isFileLoaded = {},
        classNameToFilePathMap = {},
        scriptElements = {},
        readyListeners = [],
        usedClasses = [],
        requiresMap = {};

    Ext.apply(Loader, {

        // {{{ isLoading

        /**
         * {Ext_Loader:property-isLoading:desc}
         * @private
         */
        isLoading: false,

        // }}}
        // {{{ queue

        /**
         * {Ext_Loader:property-queue:desc}
         *
         * @private
         */
        queue: queue,

        // }}}
        // {{{ isClassFileLoaded

        /**
         * {Ext_Loader:property-isClassFileLoaded:desc}
         * @private
         */
        isClassFileLoaded: isClassFileLoaded,

        /**
         * @private
         */
        isFileLoaded: isFileLoaded,

        /**
         * {Ext_Loader:property-readyListeners:desc}
         * @private
         */
        readyListeners: readyListeners,

        /**
         * {Ext_Loader:property-optionalRequires:desc}
         * @private
         */
        optionalRequires: usedClasses,

        /**
         * {Ext_Loader:property-requiresMap:desc}
         * @private
         */
        requiresMap: requiresMap,

        /**
         * @private
         */
        numPendingFiles: 0,

        /**
         * @private
         */
        numLoadedFiles: 0,

        /** @private */
        hasFileLoadError: false,

        /**
         * @private
         */
        classNameToFilePathMap: classNameToFilePathMap,

        /**
         * @private
         */
        syncModeEnabled: false,

        scriptElements: scriptElements,

        /**
         * {Ext_Loader:method-refreshQueue:desc}
         * @private
         */
        refreshQueue: function() {
            var ln = queue.length,
                i, item, j, requires;

            // When the queue of loading classes reaches zero, trigger readiness

            if(ln === 0) {
                return Loader.triggerReady();
            }

            for(i = 0; i < ln; i++) {
                item = queue[i];

                if(item) {
                    requires = item.requires;

                    // Don't bother checking when the number of files loaded
                    // is still less than the array length
                    if(requires.length > Loader.numLoadedFiles) {
                        continue;
                    }

                    // Remove any required classes that are loaded
                    for(j = 0; j < requires.length; ) {
                        if(Manager.isCreated(requires[j])) {
                            // Take out from the queue
                            arrayErase(requires, j, 1);
                        }
                        else {
                            j++;
                        }
                    }

                    // If we've ended up with no required classes, call the callback
                    if(item.requires.length === 0) {
                        arrayErase(queue, i, 1);
                        item.callback.call(item.scope);
                        Loader.refreshQueue();
                        break;
                    }
                }
            }

            return Loader;
        },

        /**
         * @private
         */
        /*
        removeScriptElement: function(url) {
            if(scriptElements[url]) {
                Loader.cleanupScriptElement(scriptElements[url], true, !!Loader.getConfig('garbageCollect'));
                delete scriptElements[url];
            }

            return Loader;
        },
        */

        /**
         * @private
         */
        cleanupScriptElement: function(script, remove, collect) {
            var prop;
            script.onload = script.onreadystatechange = script.onerror = null;
            if(remove) {
                Ext.removeNode(script);       // Remove, since its useless now
                if(collect) {
                    for(prop in script) {
                        try {
                            script[prop] = null;
                            delete script[prop];      // and prepare for GC
                        } catch (cleanEx) {
                            //ignore
                        }
                    }
                }
            }

            return Loader;
        },

        // {{{ syncRequire

        syncRequire: function() {
            var syncModeEnabled = Loader.syncModeEnabled;

            if(!syncModeEnabled) {
                Loader.syncModeEnabled = true;
            }

            Loader.require.apply(Loader, arguments);

            if(!syncModeEnabled) {
                Loader.syncModeEnabled = false;
            }

            Loader.refreshQueue();
        },

        // }}}
        // {{{ require

        require: function(expressions, fn, scope, excludes) {

            var excluded = {},
                included = {},
                excludedClassNames = [],
                possibleClassNames = [],
                classNames = [],
                references = [],
                callback,
                syncModeEnabled,
                filePath, expression, exclude, className,
                possibleClassName, i, j, ln, subLn;

            if(excludes) {

                excludes = (typeof excludes === 'string') ? [ excludes ] : excludes;

                for(i = 0,ln = excludes.length; i < ln; i++) {
                    exclude = excludes[i];

                    if(typeof exclude == 'string' && exclude.length > 0) {
                        excludedClassNames = Manager.getNamesByExpression(exclude);

                        for(j = 0,subLn = excludedClassNames.length; j < subLn; j++) {
                            excluded[excludedClassNames[j]] = true;
                        }
                    }
                }
            }

            expressions = (typeof expressions === 'string') ? [ expressions ] : (expressions ? expressions : []);

            if(fn) {
                if(fn.length > 0) {
                    callback = function() {
                        var classes = [],
                            i, ln;

                        for(i = 0,ln = references.length; i < ln; i++) {
                            classes.push(Manager.get(references[i]));
                        }

                        return fn.apply(Loader, classes);
                    };
                }
                else {
                    callback = fn;
                }
            }
            else {
                callback = Ext.emptyFn;
            }

            scope = scope || Ext.global;

            for(i = 0,ln = expressions.length; i < ln; i++) {

                expression = expressions[i];

                if(typeof expression == 'string' && expression.length > 0) {

                    possibleClassNames = Manager.getNamesByExpression(expression);
                    subLn = possibleClassNames.length;

                    for(j = 0; j < subLn; j++) {

                        possibleClassName = possibleClassNames[j];

                        if(excluded[possibleClassName] !== true) {

                            references.push(possibleClassName);

                            if(!Manager.isCreated(possibleClassName) && !included[possibleClassName]) {
                                included[possibleClassName] = true;
                                classNames.push(possibleClassName);
                            }
                        }
                    }
                }
            }

            if(classNames.length > 0) {

                if(!Loader.config.enabled) {
                    throw new Error("Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. " +
                             "Missing required class" + ((classNames.length > 1) ? "es" : "") + ": " + classNames.join(', '));
                }

            } else {

                callback.call(scope);
                return Loader;

            }

            syncModeEnabled = Loader.syncModeEnabled;

            if(!syncModeEnabled) {
                queue.push({
                    requires: classNames.slice(),
                    callback: callback,
                    scope: scope
                });
            }

            ln = classNames.length;

            for(i = 0; i < ln; i++) {

                className = classNames[i];

                filePath = Loader.getPath(className);

                if(syncModeEnabled && isClassFileLoaded.hasOwnProperty(className)) {
                    Loader.numPendingFiles--;
                    //Loader.removeScriptElement(filePath);
                    delete isClassFileLoaded[className];
                }

                if(!isClassFileLoaded.hasOwnProperty(className)) {

                    isClassFileLoaded[className] = false;

                    classNameToFilePathMap[className] = filePath;

                    Loader.numPendingFiles++;
                    Loader.loadScriptFile(
                        filePath,
                        pass(Loader.onFileLoaded, [className, filePath], Loader),
                        pass(Loader.onFileLoadError, [className, filePath], Loader),
                        Loader,
                        syncModeEnabled
                    );
                }
            }

            if(syncModeEnabled) {

                callback.call(scope);

                if(ln === 1) {
                    return Manager.get(className);
                }
            }

            return Loader;
        },

        // }}}
        // {{{ onFileLoaded

        /**
         * {Ext_Loader:method-onFileLoaded:desc}
         * @private
         * @param {String} className {Ext_Loader:method-onFileLoaded:param_className}
         * @param {String} filePath {Ext_Loader:method-onFileLoaded:param_filePath}
         */
        onFileLoaded: function(className, filePath) {

            Loader.numLoadedFiles++;

            isClassFileLoaded[className] = true;
            isFileLoaded[filePath] = true;

            Loader.numPendingFiles--;

            if(Loader.numPendingFiles === 0) {
                Loader.refreshQueue();
            }

        },

        // }}}
        // {{{ onFileLoadError

        /**
         * @private
         */
        onFileLoadError: function(className, filePath, errorMessage, isSynchronous) {
            Loader.numPendingFiles--;
            Loader.hasFileLoadError = true;

            //<debug error>
            throw new Error("[Ext.Loader] " + errorMessage);
            //</debug>
        },

        // }}}
        // {{{ addUsedClass

        /**
         * @private
         * {Ext_Loader:method-addUsedClass:desc}
         */
        addUsedClass: function(references) {
            var i, ln;

            if(references) {
                references = (typeof references == 'string') ? [references] : references;
                for(i = 0, ln = references.length; i < ln; i++) {
                    if(!Ext.Array.contains(usedClasses, references[i])) {
                    	usedClasses.push(references[i]);
                    }
                }
            }

            return Loader;
        },

        // }}}
        // {{{ triggerReady

        /**
         * @private
         */
        triggerReady: function() {
            var listener,
                i, refClasses = usedClasses;

            if(Loader.isLoading) {
                Loader.isLoading = false;

                if(refClasses.length !== 0) {
                    // Clone then empty the array to eliminate potential recursive loop issue
                    refClasses = refClasses.slice();
                    usedClasses.length = 0;
                    // this may immediately call us back if all 'uses' classes
                    // have been loaded
                    Loader.require(refClasses, Loader.triggerReady, Loader);
                    return Loader;
                }
            }

            // this method can be called with Loader.isLoading either true or false
            // (can be called with false when all 'uses' classes are already loaded)
            // this may bypass the above if condition
            while (readyListeners.length && !Loader.isLoading) {
                // calls to refreshQueue may re-enter triggerReady
                // so we cannot necessarily iterate the readyListeners array
                listener = readyListeners.shift();
                listener.fn.call(listener.scope);
            }

            return Loader;
        },

        // }}}
        // {{{ historyPush

        /**
         * {Ext_Loader:method-historyPush:desc}
         * @private
         * @param {String} className {Ext_Loader:method-historyPush:param_className}
         */
        historyPush: function(className) {
            if(className && isClassFileLoaded.hasOwnProperty(className) && !isInHistory[className]) {
                isInHistory[className] = true;
                history.push(className);
            }
            return Loader;
        }

        // }}}

    });

    /**
     * {Ext_Loader:method-disableCacheBuster:desc}
     * @param {Boolean} disable {Ext_Loader:method-disableCacheBuster:param_disable}
     * @param {String} [path="/"] {Ext_Loader:method-disableCacheBuster:param_path}
     * @private
     */
    Ext.disableCacheBuster = function(disable, path) {
        var date = new Date();
        date.setTime(date.getTime() + (disable ? 10*365 : -1) * 24*60*60*1000);
        date = date.toGMTString();
        document.cookie = 'ext-cache=1; expires=' + date + '; path='+(path || '/');
    };

    Ext.apply(Loader, {
        syncModeEnabled: true,
        setPath: flexSetter(function(name, path) {
            path = require('fs').realpathSync(path);
            Loader.config.paths[name] = path;

            return Loader;
        }),
        loadScriptFile: function(filePath, onLoad, onError, scope, synchronous) {
            require(filePath);
            onLoad.call(scope);
        }
    });

    /**
     * {Ext:method-require:desc}
     * @member Ext
     * @method require
     */
    Ext.require = alias(Loader, 'require');

    /**
     * {Ext:method-syncRequire:desc}
     * @member Ext
     * @method syncRequire
     */
    Ext.syncRequire = alias(Loader, 'syncRequire');

    /**
     * {Ext:method-exclude:desc}
     * @member Ext
     * @method exclude
     */
    Ext.exclude = alias(Loader, 'exclude');

    /*
    Ext.onReady = function(fn, scope, options) {
        Loader.onReady(fn, scope, true, options);
    };
    */

    /**
     * @cfg {String[]} requires
     * @member Ext.Class
     * {Ext_Class:cfg-requires:desc}
     */
    Class.registerPreprocessor('loader', function(cls, data, hooks, continueFn) {
        var me = this,
            dependencies = [],
            dependency,
            className = Manager.getName(cls),
            i, j, ln, subLn, value, propertyName, propertyValue,
            requiredMap, requiredDep;

        /*
        Loop through the dependencyProperties, look for string class names and push
        them into a stack, regardless of whether the property's value is a string, array or object. For example:
        {
              extend: 'Ext.MyClass',
              requires: ['Ext.some.OtherClass'],
              mixins: {
                  observable: 'Ext.util.Observable';
              }
        }
        which will later be transformed into:
        {
              extend: Ext.MyClass,
              requires: [Ext.some.OtherClass],
              mixins: {
                  observable: Ext.util.Observable;
              }
        }
        */

        for(i = 0,ln = dependencyProperties.length; i < ln; i++) {
            propertyName = dependencyProperties[i];

            if(data.hasOwnProperty(propertyName)) {
                propertyValue = data[propertyName];

                if(typeof propertyValue == 'string') {
                    dependencies.push(propertyValue);
                }
                else if(propertyValue instanceof Array) {
                    for(j = 0, subLn = propertyValue.length; j < subLn; j++) {
                        value = propertyValue[j];

                        if(typeof value == 'string') {
                            dependencies.push(value);
                        }
                    }
                }
                else if(typeof propertyValue != 'function') {
                    for(j in propertyValue) {
                        if(propertyValue.hasOwnProperty(j)) {
                            value = propertyValue[j];

                            if(typeof value == 'string') {
                                dependencies.push(value);
                            }
                        }
                    }
                }
            }
        }

        if(dependencies.length === 0) {
            return;
        }

        //<feature classSystem.loader>
        //<debug error>
        var deadlockPath = [],
            detectDeadlock;

        /*
        Automatically detect deadlocks before-hand,
        will throw an error with detailed path for ease of debugging. Examples of deadlock cases:

        - A extends B, then B extends A
        - A requires B, B requires C, then C requires A

        The detectDeadlock function will recursively transverse till the leaf, hence it can detect deadlocks
        no matter how deep the path is.
        */

        if(className) {
            requiresMap[className] = dependencies;
            //<debug>
            requiredMap = Loader.requiredByMap || (Loader.requiredByMap = {});

            for(i = 0,ln = dependencies.length; i < ln; i++) {
                dependency = dependencies[i];
                (requiredMap[dependency] || (requiredMap[dependency] = [])).push(className);
            }
            //</debug>
            detectDeadlock = function(cls) {
                deadlockPath.push(cls);

                if(requiresMap[cls]) {
                    if(Ext.Array.contains(requiresMap[cls], className)) {
                        throw new Error("Deadlock detected while loading dependencies! '" + className + "' and '" +
                                deadlockPath[1] + "' " + "mutually require each other. Path: " +
                                deadlockPath.join(' -> ') + " -> " + deadlockPath[0]);
                    }

                    for(i = 0,ln = requiresMap[cls].length; i < ln; i++) {
                        detectDeadlock(requiresMap[cls][i]);
                    }
                }
            };

            detectDeadlock(className);
        }

        //</debug>
        //</feature>

        Loader.require(dependencies, function() {
            for(i = 0,ln = dependencyProperties.length; i < ln; i++) {
                propertyName = dependencyProperties[i];

                if(data.hasOwnProperty(propertyName)) {
                    propertyValue = data[propertyName];

                    if(typeof propertyValue == 'string') {
                        data[propertyName] = Manager.get(propertyValue);
                    }
                    else if(propertyValue instanceof Array) {
                        for(j = 0, subLn = propertyValue.length; j < subLn; j++) {
                            value = propertyValue[j];

                            if(typeof value == 'string') {
                                data[propertyName][j] = Manager.get(value);
                            }
                        }
                    }
                    else if(typeof propertyValue != 'function') {
                        for(var k in propertyValue) {
                            if(propertyValue.hasOwnProperty(k)) {
                                value = propertyValue[k];

                                if(typeof value == 'string') {
                                    data[propertyName][k] = Manager.get(value);
                                }
                            }
                        }
                    }
                }
            }

            continueFn.call(me, cls, data, hooks);
        });

        return false;

    }, true, 'after', 'className');

    //<feature classSystem.loader>
    /**
     * @cfg {String[]} uses
     * @member Ext.Class
     * {Ext_Class:cfg-uses:desc}
     */
    Manager.registerPostprocessor('uses', function(name, cls, data) {
        var uses = data.uses,
            items = [],
            i, ln, item;

        if(uses) {
            uses = (typeof uses === 'string') ? [ uses ] : uses;
            for(i = 0,ln = uses.length; i < ln; i++) {
                item = uses[i];

                if(typeof item == 'string') {
                    items.push(item);
                }
            }
        }

        Loader.addUsedClass(items);
    });

    Manager.onCreated(Loader.historyPush);
    //</feature>

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
