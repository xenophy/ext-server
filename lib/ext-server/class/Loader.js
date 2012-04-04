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

    var Loader = this,
        Manager = Ext.ClassManager,
        Class = Ext.Class,
        flexSetter = Ext.Function.flexSetter,
        alias = Ext.Function.alias,
        pass = Ext.Function.pass,
        defer = Ext.Function.defer,
        arrayErase = Ext.Array.erase,
        //<if nonBrowser>
        isNonBrowser = typeof window == 'undefined',
        isNodeJS = isNonBrowser && (typeof require == 'function'),
        isJsdb = isNonBrowser && typeof system != 'undefined' && system.program.search(/jsdb/) !== -1,
        isPhantomJS = (typeof phantom != 'undefined' && phantom.fs),
        //</if>
        dependencyProperties = ['extend', 'mixins', 'requires'],
        isInHistory = {},
        history = [],
        slashDotSlashRe = /\/\.\//g,
        dotRe = /\./g;

    Ext.apply(Loader, {

        // {{{ isInHistory

        /**
         * @private
         */
        isInHistory: isInHistory,

        // }}}
        // {{{ history

        /**
         * An array of class names to keep track of the dependency loading order.
         * This is not guaranteed to be the same everytime due to the asynchronous
         * nature of the Loader.
         *
         * @property {Array} history
         */
        history: history,

        // }}}
        // {{{ config

        /**
         * Configuration
         * @private
         */
        config: {

            // {{{ enabled

            /**
             * @cfg {Boolean} enabled
             * Whether or not to enable the dynamic dependency loading feature.
             */
            enabled: false,

            // }}}
            // {{{ scriptChainDelay

            /**
             * @cfg {Boolean} scriptChainDelay
             * millisecond delay between asynchronous script injection (prevents stack overflow on some user agents)
             * 'false' disables delay but potentially increases stack load.
             */
            scriptChainDelay : false,

            // }}}
            // {{{ disableCaching:w

            /**
             * @cfg {Boolean} disableCaching
             * Appends current timestamp to script files to prevent caching.
             */
            disableCaching: true,

            // }}}
            // {{{ disableCachingParam

            /**
             * @cfg {String} disableCachingParam
             * The get parameter name for the cache buster's timestamp.
             */
            disableCachingParam: '_dc',

            // }}}
            // {{{ garbageCollect

            /**
             * @cfg {Boolean} garbageCollect
             * True to prepare an asynchronous script tag for garbage collection (effective only
             * if {@link #preserveScripts preserveScripts} is false)
             */
            garbageCollect : false,

            // }}}
            // {{{ paths

            /**
             * @cfg {Object} paths
             * The mapping from namespaces to file paths
             *
             *     {
             *         'Ext': '.', // This is set by default, Ext.layout.container.Container will be
             *                     // loaded from ./layout/Container.js
             *
             *         'My': './src/my_own_folder' // My.layout.Container will be loaded from
             *                                     // ./src/my_own_folder/layout/Container.js
             *     }
             *
             * Note that all relative paths are relative to the current HTML document.
             * If not being specified, for example, <code>Other.awesome.Class</code>
             * will simply be loaded from <code>./Other/awesome/Class.js</code>
             */
            paths: {
                'Ext': '.'
            },

            // }}}
            // {{{ preserveScripts

            /**
             * @cfg {Boolean} preserveScripts
             * False to remove and optionally {@link #garbageCollect garbage-collect} asynchronously loaded scripts,
             * True to retain script element for browser debugger compatibility and improved load performance.
             */
            preserveScripts : true,

            // }}}
            // {{{ scriptCharset

            /**
             * @cfg {String} scriptCharset
             * Optional charset to specify encoding of dynamic script content.
             */
            scriptCharset : undefined

            // }}}

        },

        // }}}
        // {{{ setConfig

        /**
         * Set the configuration for the loader. This should be called right after ext-(debug).js
         * is included in the page, and before Ext.onReady. i.e:
         *
         *     <script type="text/javascript" src="ext-core-debug.js"></script>
         *     <script type="text/javascript">
         *         Ext.Loader.setConfig({
         *           enabled: true,
         *           paths: {
         *               'My': 'my_own_path'
         *           }
         *         });
         *     </script>
         *     <script type="text/javascript">
         *         Ext.require(...);
         *
         *         Ext.onReady(function() {
         *           // application code here
         *         });
         *     </script>
         *
         * Refer to config options of {@link Ext.Loader} for the list of possible properties
         *
         * @param {Object} config The config object to override the default values
         * @return {Ext.Loader} this
         */
        setConfig: function(name, value) {
            if(Ext.isObject(name) && arguments.length === 1) {
                Ext.merge(Loader.config, name);
            }
            else {
                Loader.config[name] = (Ext.isObject(value)) ? Ext.merge(Loader.config[name], value) : value;
            }

            return Loader;
        },

        // }}}
        // {{{ getConfig

        /**
         * Get the config value corresponding to the specified name. If no name is given, will return the config object
         * @param {String} name The config property name
         * @return {Object}
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
         * Sets the path of a namespace.
         * For Example:
         *
         *     Ext.Loader.setPath('Ext', '.');
         *
         * @param {String/Object} name See {@link Ext.Function#flexSetter flexSetter}
         * @param {String} path See {@link Ext.Function#flexSetter flexSetter}
         * @return {Ext.Loader} this
         * @method
         */
        setPath: flexSetter(function(name, path) {
            Loader.config.paths[name] = path;

            return Loader;
        }),

        // }}}
        // {{{ getPath

        /**
         * Translates a className to a file path by adding the
         * the proper prefix and converting the .'s to /'s. For example:
         *
         *     Ext.Loader.setPath('My', '/path/to/My');
         *
         *     alert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/path/to/My/awesome/Class.js'
         *
         * Note that the deeper namespace levels, if explicitly set, are always resolved first. For example:
         *
         *     Ext.Loader.setPath({
         *         'My': '/path/to/lib',
         *         'My.awesome': '/other/path/for/awesome/stuff',
         *         'My.awesome.more': '/more/awesome/path'
         *     });
         *
         *     alert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/other/path/for/awesome/stuff/Class.js'
         *
         *     alert(Ext.Loader.getPath('My.awesome.more.Class')); // alerts '/more/awesome/path/Class.js'
         *
         *     alert(Ext.Loader.getPath('My.cool.Class')); // alerts '/path/to/lib/cool/Class.js'
         *
         *     alert(Ext.Loader.getPath('Unknown.strange.Stuff')); // alerts 'Unknown/strange/Stuff.js'
         *
         * @param {String} className
         * @return {String} path
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
         * Loads all classes by the given names and all their direct dependencies; optionally executes the given callback function when
         * finishes, within the optional scope. This method is aliased by {@link Ext#require Ext.require} for convenience
         * @param {String/Array} expressions Can either be a string or an array of string
         * @param {Function} fn (Optional) The callback function
         * @param {Object} scope (Optional) The execution scope (`this`) of the callback function
         * @param {String/Array} excludes (Optional) Classes to be excluded, useful when being used with expressions
         */
        require: function(expressions, fn, scope, excludes) {
            if(fn) {
                fn.call(scope);
            }
        },

        // }}}
        // {{{ syncRequire

        /**
         * Synchronously loads all classes by the given names and all their direct dependencies; optionally executes the given callback function when finishes, within the optional scope. This method is aliased by {@link Ext#syncRequire} for convenience
         * @param {String/Array} expressions Can either be a string or an array of string
         * @param {Function} fn (Optional) The callback function
         * @param {Object} scope (Optional) The execution scope (`this`) of the callback function
         * @param {String/Array} excludes (Optional) Classes to be excluded, useful when being used with expressions
         */
        syncRequire: function() {},

        // }}}
        // {{{ exclude

        /**
         * Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.
         * Can be chained with more `require` and `exclude` methods, eg:
         *
         *     Ext.exclude('Ext.data.*').require('*');
         *
         *     Ext.exclude('widget.button*').require('widget.*');
         *
         * @param {Array} excludes
         * @return {Object} object contains `require` method for chaining
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
         * Flag indicating whether there are still files being loaded
         * @private
         */
        isLoading: false,

        // }}}
        // {{{ queue

        /**
         * Maintain the queue for all dependencies. Each item in the array is an object of the format:
         *
         *     {
         *          requires: [...], // The required classes for this queue item
         *          callback: function() { ... } // The function to execute when all classes specified in requires exist
         *     }
         *
         * @private
         */
        queue: queue,

        // }}}
        // {{{ isClassFileLoaded

        /**
         * Maintain the list of files that have already been handled so that they never get double-loaded
         * @private
         */
        isClassFileLoaded: isClassFileLoaded,

        /**
         * @private
         */
        isFileLoaded: isFileLoaded,

        /**
         * Maintain the list of listeners to execute when all required scripts are fully loaded
         * @private
         */
        readyListeners: readyListeners,

        /**
         * Contains classes referenced in `uses` properties.
         * @private
         */
        optionalRequires: usedClasses,

        /**
         * Map of fully qualified class names to an array of dependent classes.
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
         * Refresh all items in the queue. If all dependencies for an item exist during looping,
         * it will execute the callback and call refreshQueue again. Triggers onReady when the queue is
         * empty
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
        removeScriptElement: function(url) {
            if(scriptElements[url]) {
                Loader.cleanupScriptElement(scriptElements[url], true, !!Loader.getConfig('garbageCollect'));
                delete scriptElements[url];
            }

            return Loader;
        },

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
                    Loader.removeScriptElement(filePath);
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
         * @private
         * @param {String} className
         * @param {String} filePath
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
         * Ensure that any classes referenced in the `uses` property are loaded.
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
         * @private
         * @param {String} className
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
     * Turns on or off the "cache buster" applied to dynamically loaded scripts. Normally
     * dynamically loaded scripts have an extra query parameter appended to avoid stale
     * cached scripts. This method can be used to disable this mechanism, and is primarily
     * useful for testing. This is done using a cookie.
     * @param {Boolean} disable True to disable the cache buster.
     * @param {String} [path="/"] An optional path to scope the cookie.
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
     * Convenient alias of {@link Ext.Loader#require}. Please see the introduction documentation of
     * {@link Ext.Loader} for examples.
     * @member Ext
     * @method require
     */
    Ext.require = alias(Loader, 'require');

    /**
     * Synchronous version of {@link Ext#require}, convenient alias of {@link Ext.Loader#syncRequire}.
     *
     * @member Ext
     * @method syncRequire
     */
    Ext.syncRequire = alias(Loader, 'syncRequire');

    /**
     * Convenient shortcut to {@link Ext.Loader#exclude}
     * @member Ext
     * @method exclude
     */
    Ext.exclude = alias(Loader, 'exclude');

    /**
     * @member Ext
     * @method onReady
     */
    Ext.onReady = function(fn, scope, options) {
        Loader.onReady(fn, scope, true, options);
    };

    /**
     * @cfg {String[]} requires
     * @member Ext.Class
     * List of classes that have to be loaded before instantiating this class.
     * For example:
     *
     *     Ext.define('Mother', {
     *         requires: ['Child'],
     *         giveBirth: function() {
     *             // we can be sure that child class is available.
     *             return new Child();
     *         }
     *     });
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
     * List of optional classes to load together with this class. These aren't neccessarily loaded before
     * this class is created, but are guaranteed to be available before Ext.onReady listeners are
     * invoked. For example:
     *
     *     Ext.define('Mother', {
     *         uses: ['Child'],
     *         giveBirth: function() {
     *             // This code might, or might not work:
     *             // return new Child();
     *
     *             // Instead use Ext.create() to load the class at the spot if not loaded already:
     *             return Ext.create('Child');
     *         }
     *     });
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
