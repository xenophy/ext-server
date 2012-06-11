/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.ClassManager

/**
 * @class Ext.ClassManager
 *
 * {Ext_ClassManager:doc-contents}
 */

(function(Class, alias, arraySlice, arrayFrom, global) {

    var Manager = Ext.ClassManager = {

        // {{{ classes

        /**
         * @property {Object} classes
         *
         * {Ext_ClassManager:property-classes:desc}
         *
         * @private
         */
        classes: {},

        // }}}
        // {{{ existCache

        /**
         * @private
         */
        existCache: {},

        // }}}
        // {{{ namespaceRewrites

        /**
         * @private
         */
        namespaceRewrites: [{
            from: 'Ext.',
            to: Ext
        }],

        // }}}
        // {{{ maps

        /**
         * @private
         */
        maps: {
            alternateToName: {},
            aliasToName: {},
            nameToAliases: {},
            nameToAlternates: {},
            overridesByName: {}
        },

        // }}}
        // {{{ enableNamespaceParseCache

        /** @private */
        enableNamespaceParseCache: true,

        // }}}
        // {{{ namespaceParseCache

        /** @private */
        namespaceParseCache: {},

        // }}}
        // {{{ instantiators

        /** @private */
        instantiators: [],

        // }}}
        // {{{ isCreated

        /**
         * {Ext_ClassManager:method-isCreated:desc}
         *
         * @param {String} className {Ext_ClassManager:method-isCreated:param_className}
         * @return {Boolean} {Ext_ClassManager:method-isCreated:return}
         */
        isCreated: function(className) {

            var existCache = this.existCache,
                i, ln, part, root, parts;

            if(this.classes[className] || existCache[className]) {
                return true;
            }

            root = global;
            parts = this.parseNamespace(className);

            for(i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if(typeof part != 'string') {
                    root = part;
                } else {
                    if(!root || !root[part]) {
                        return false;
                    }

                    root = root[part];
                }
            }

            existCache[className] = true;

            this.triggerCreated(className);

            return true;
        },

        // }}}
        // {{{ createdListeners

        /**
         * @private
         */
        createdListeners: [],

        // }}}
        // {{{ nameCreatedListeners

        /**
         * @private
         */
        nameCreatedListeners: {},

        // }}}
        // {{{ triggerCreated

        /**
         * @private
         */
        triggerCreated: function(className) {

            var listeners = this.createdListeners,
                nameListeners = this.nameCreatedListeners,
                i, ln, listener;

            for(i = 0,ln = listeners.length; i < ln; i++) {
                listener = listeners[i];
                listener.fn.call(listener.scope, className);
            }

            listeners = nameListeners[className];

            if(listeners) {

                for(i = 0,ln = listeners.length; i < ln; i++) {
                    listener = listeners[i];
                    listener.fn.call(listener.scope, className);
                }

                delete nameListeners[className];
            }
        },

        // }}}
        // {{{ onCreated

        /**
         * @private
         */
        onCreated: function(fn, scope, className) {

            var listeners = this.createdListeners,
                nameListeners = this.nameCreatedListeners,
                listener = {
                    fn: fn,
                    scope: scope
                };

            if(className) {

                if(this.isCreated(className)) {
                    fn.call(scope, className);
                    return;
                }

                if(!nameListeners[className]) {
                    nameListeners[className] = [];
                }

                nameListeners[className].push(listener);
            }
            else {
                listeners.push(listener);
            }
        },

        // }}}
        // {{{ parseNamespace

        /**
         * @private
         */
        parseNamespace: function(namespace) {
            //<debug error>
            if(typeof namespace != 'string') {
                throw new Error("[Ext.ClassManager] Invalid namespace, must be a string");
            }
            //</debug>

            var cache = this.namespaceParseCache,
                parts,
                rewrites,
                root,
                name,
                rewrite, from, to, i, ln;

            if(this.enableNamespaceParseCache) {
                if(cache.hasOwnProperty(namespace)) {
                    return cache[namespace];
                }
            }

            parts = [];
            rewrites = this.namespaceRewrites;
            root = global;
            name = namespace;

            for(i = 0, ln = rewrites.length; i < ln; i++) {

                rewrite = rewrites[i];
                from = rewrite.from;
                to = rewrite.to;

                if(name === from || name.substring(0, from.length) === from) {

                    name = name.substring(from.length);

                    if(typeof to != 'string') {
                        root = to;
                    } else {
                        parts = parts.concat(to.split('.'));
                    }

                    break;
                }
            }

            parts.push(root);

            parts = parts.concat(name.split('.'));

            if(this.enableNamespaceParseCache) {
                cache[namespace] = parts;
            }

            return parts;
        },

        // }}}
        // {{{ setNamespace

        /**
         * {Ext_ClassManager:method-setNamespace:desc}
         *
         * @param {String} name {Ext_ClassManager:method-setNamespace:param_name}
         * @param {Object} value {Ext_ClassManager:method-setNamespace:param_value}
         */
        setNamespace: function(name, value) {
            var root = global,
                parts = this.parseNamespace(name),
                ln = parts.length - 1,
                leaf = parts[ln],
                i, part;

            for(i = 0; i < ln; i++) {
                part = parts[i];

                if(typeof part != 'string') {
                    root = part;
                } else {
                    if(!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }

            root[leaf] = value;

            return root[leaf];
        },

        // }}}
        // {{{ createNamespaces

        /**
         * {Ext_ClassManager:method-createNamespaces:desc}
         * @private
         */
        createNamespaces: function() {
            var root = global,
                parts, part, i, j, ln, subLn;

            for(i = 0, ln = arguments.length; i < ln; i++) {
                parts = this.parseNamespace(arguments[i]);

                for(j = 0, subLn = parts.length; j < subLn; j++) {
                    part = parts[j];

                    if(typeof part != 'string') {
                        root = part;
                    } else {
                        if(!root[part]) {
                            root[part] = {};
                        }

                        root = root[part];
                    }
                }
            }

            return root;
        },

        // }}}
        // {{{ set

        /**
         * {Ext_ClassManager:method-set:desc}
         *
         * @param {String} name {Ext_ClassManager:method-set:param_name}
         * @param {Object} value {Ext_ClassManager:method-set:param_value}
         * @return {Ext.ClassManager} {Ext_ClassManager:method-set:return}
         */
        set: function(name, value) {

            var me = this,
                maps = me.maps,
                nameToAlternates = maps.nameToAlternates,
                targetName = me.getName(value),
                alternates;

            me.classes[name] = me.setNamespace(name, value);

            if(targetName && targetName !== name) {
                maps.alternateToName[name] = targetName;
                alternates = nameToAlternates[targetName] || (nameToAlternates[targetName] = []);
                alternates.push(name);
            }

            return this;
        },

        // }}}
        // {{{ get

        /**
         * {Ext_ClassManager:method-get:desc}
         *
         * @param {String} name {Ext_ClassManager:method-get:param_name}
         * @return {Ext.Class} {Ext_ClassManager:method-get:return}
         */
        get: function(name) {

            var classes = this.classes,
                root,
                parts,
                part, i, ln;

            // キャッシュからの読み出し
            if(classes[name]) {
                Ext.Loader.updateLatest(name);
                return classes[name];
            }

            root = global;
            parts = this.parseNamespace(name);

            for(i = 0, ln = parts.length; i < ln; i++) {

                part = parts[i];

                if(typeof part != 'string') {
                    root = part;
                } else {
                    if(!root || !root[part]) {
                        return null;
                    }

                    root = root[part];
                }
            }

            return root;
        },

        // }}}
        // {{{ setAlias

        /**
         * {Ext_ClassManager:method-setAlias:desc}
         *
         * @param {Ext.Class/String} cls {Ext_ClassManager:method-setAlias:param_cls}
         * @param {String} alias {Ext_ClassManager:method-setAlias:param_alias}
         */
        setAlias: function(cls, alias) {
            var aliasToNameMap = this.maps.aliasToName,
                nameToAliasesMap = this.maps.nameToAliases,
                className;

            if(typeof cls == 'string') {
                className = cls;
            } else {
                className = this.getName(cls);
            }

            if(alias && aliasToNameMap[alias] !== className) {
                //<debug info>
                if(aliasToNameMap[alias] && Ext.isDefined(global.console)) {
                    global.console.log("[Ext.ClassManager] Overriding existing alias: '" + alias + "' " +
                        "of: '" + aliasToNameMap[alias] + "' with: '" + className + "'. Be sure it's intentional.");
                }
                //</debug>

                aliasToNameMap[alias] = className;
            }

            if(!nameToAliasesMap[className]) {
                nameToAliasesMap[className] = [];
            }

            if(alias) {
                Ext.Array.include(nameToAliasesMap[className], alias);
            }

            return this;
        },

        // }}}
        // {{{ getByAlias

        /**
         * {Ext_ClassManager:method-getByAlias:desc}
         *
         * @param {String} alias {Ext_ClassManager:method-getByAlias:param_alias}
         * @return {Ext.Class} {Ext_ClassManager:method-getByAlias:return}
         */
        getByAlias: function(alias) {
            return this.get(this.getNameByAlias(alias));
        },

        // }}}
        // {{{ getNameByAlias

        /**
         * {Ext_ClassManager:method-getNameByAlias:desc}
         *
         * @param {String} alias {Ext_ClassManager:method-getNameByAlias:param_alias}
         * @return {String} {Ext_ClassManager:method-getNameByAlias:return}
         */
        getNameByAlias: function(alias) {
            return this.maps.aliasToName[alias] || '';
        },

        // }}}
        // {{{ getNameByAlternate

        /**
         * {Ext_ClassManager:method-getNameByAlternate:desc}
         *
         * @param {String} alternate {Ext_ClassManager:method-getNameByAlternate:param_alternate}
         * @return {String} {Ext_ClassManager:method-getNameByAlternate:return}
         */
        getNameByAlternate: function(alternate) {
            return this.maps.alternateToName[alternate] || '';
        },

        // }}}
        // {{{ getAliasesByName

        /**
         * {Ext_ClassManager:method-getAliasesByName:desc}
         *
         * @param {String} name {Ext_ClassManager:method-getAliasesByName:param_name}
         * @return {Array} {Ext_ClassManager:method-getAliasesByName:return}
         */
        getAliasesByName: function(name) {
            return this.maps.nameToAliases[name] || [];
        },

        // }}}
        // {{{ getName

        /**
         * {Ext_ClassManager:method-getName:desc}
         *
         * @param {Ext.Class/Object} object {Ext_ClassManager:method-getName:param_object}
         * @return {String} {Ext_ClassManager:method-getName:return}
         */
        getName: function(object) {
            return object && object.$className || '';
        },

        // }}}
        // {{{ getClass

        /**
         * {Ext_ClassManager:method-getClass:desc}
         *
         * @param {Object} object {Ext_ClassManager:method-getClass:param_object}
         * @return {Ext.Class} {Ext_ClassManager:method-getClass:return}
         */
        getClass: function(object) {
            return object && object.self || null;
        },

        // }}}
        // {{{ applyOverrides

        /**
         * @private
         */
        applyOverrides: function(name) {
            var me = this,
                overridesByName = me.maps.overridesByName,
                overrides = overridesByName[name],
                length = overrides && overrides.length || 0,
                createOverride = me.createOverride,
                i;

            delete overridesByName[name];

            for(i = 0; i < length; ++i) {
                createOverride.apply(me, overrides[i]);
            }
        },

        // }}}
        // {{{ create

        /**
         * {Ext_ClassManager:method-create:desc}
         */
        create: function(className, data, createdFn) {

            data = data || {};

            data.$className = className;

            return new Class(data, function() {

                var postprocessorStack = data.postprocessors || Manager.defaultPostprocessors,
                    registeredPostprocessors = Manager.postprocessors,
                    postprocessors = [],
                    postprocessor, i, ln, j, subLn, postprocessorProperties, postprocessorProperty,
                    alternateNames;

                delete data.postprocessors;

                for(i = 0, ln = postprocessorStack.length; i < ln; i++) {

                    postprocessor = postprocessorStack[i];

                    if(typeof postprocessor == 'string') {

                        postprocessor = registeredPostprocessors[postprocessor];
                        postprocessorProperties = postprocessor.properties;

                        if(postprocessorProperties === true) {

                            postprocessors.push(postprocessor.fn);

                        } else if(postprocessorProperties) {

                            for(j = 0,subLn = postprocessorProperties.length; j < subLn; j++) {

                                postprocessorProperty = postprocessorProperties[j];

                                if(data.hasOwnProperty(postprocessorProperty)) {

                                    postprocessors.push(postprocessor.fn);
                                    break;

                                }
                            }
                        }

                    } else {

                        postprocessors.push(postprocessor);

                    }
                }

                data.postprocessors = postprocessors;
                data.createdFn = createdFn;

                Manager.processCreate(className, this, data);

                Manager.applyOverrides(className);
                alternateNames = Manager.maps.nameToAlternates[className];

                for(i = 0, ln = alternateNames && alternateNames.length || 0; i < ln; ++i) {
                    Manager.applyOverrides(alternateNames[i]);
                }
            });
        },

        // }}}
        // {{{ processCreate

        processCreate: function(className, cls, clsData) {

            var me = this,
                postprocessor = clsData.postprocessors.shift(),
                createdFn = clsData.createdFn;

            if(!postprocessor) {

                me.set(className, cls);

                if(createdFn) {
                     createdFn.call(cls, cls);
                }

                me.triggerCreated(className);
                return;
            }

            if(postprocessor.call(me, className, cls, clsData, me.processCreate) !== false) {
                me.processCreate(className, cls, clsData);
            }
        },

        // }}}
        // {{{ createOverride

        createOverride: function(overrideName, data, createdFn) {

            var me = this,
                className = data.override,
                cls = me.get(className),
                overrideBody, overridesByName, overrides;

            if(cls) {

                overrideBody = Ext.apply({}, data);

                delete overrideBody.requires;
                delete overrideBody.uses;
                delete overrideBody.override;

                me.create(overrideName, {
                    requires: data.requires,
                    uses: data.uses,
                    override: className
                }, function() {

                    this.active = true;

                    if(cls.override) {
                        cls.override(overrideBody);
                    } else {
                        cls.self.override(overrideBody);
                    }

                    if(createdFn) {
                        createdFn.call(cls);
                    }

                });

            } else {

                overridesByName = me.maps.overridesByName;
                overrides = overridesByName[className] || (overridesByName[className] = []);
                overrides.push(Array.prototype.slice.call(arguments, 0));

                me.setNamespace(overrideName, {
                    override: className
                });
            }
        },

        // }}}
        // {{{ instantiateByAlias

        /**
         * {Ext_ClassManager:method-instantiateByAlias:desc}
         *
         * @param {String} alias {Ext_ClassManager:method-instantiateByAlias:param_alias}
         * @param {Object...} args {Ext_ClassManager:method-instantiateByAlias:param_args} 
         * @return {Object} {Ext_ClassManager:method-instantiateByAlias:return}
         */
        instantiateByAlias: function() {
            var alias = arguments[0],
                args = arraySlice.call(arguments),
                className = this.getNameByAlias(alias);

            if(!className) {
                className = this.maps.aliasToName[alias];

                Ext.syncRequire(className);
            }

            args[0] = className;

            return this.instantiate.apply(this, args);
        },

        // }}}
        // {{{ instantiate

        /**
         * @private
         */
        instantiate: function() {

            var name = arguments[0],
                nameType = typeof name,
                args = arraySlice.call(arguments, 1),
                alias = name,
                possibleName, cls;

            if(nameType != 'function') {

                if(nameType != 'string' && args.length === 0) {
                    args = [name];
                    name = name.xclass;
                }

                cls = this.get(name);

            } else {

                cls = name;

            }

            if(!cls) {

                possibleName = this.getNameByAlias(name);

                if(possibleName) {

                    name = possibleName;
                    cls = this.get(name);

                }
            }

            if(!cls) {

                possibleName = this.getNameByAlternate(name);

                if(possibleName) {

                    name = possibleName;
                    cls = this.get(name);

                }
            }

            if(!cls) {

                Ext.syncRequire(name);
                cls = this.get(name);

            }

            return this.getInstantiator(args.length)(cls, args);
        },

        // }}}
        // {{{ dynInstantiate

        /**
         * {Ext_ClassManager:method-dynInstantiate:desc}
         * @private
         * @param name {Ext_ClassManager:method-dynInstantiate:param_name}
         * @param args {Ext_ClassManager:method-dynInstantiate:param_args}
         */
        dynInstantiate: function(name, args) {
            args = arrayFrom(args, true);
            args.unshift(name);

            return this.instantiate.apply(this, args);
        },

        // }}}
        // {{{ getInstantiator

        /**
         * {Ext_ClassManager:method-getInstantiator:desc}
         * @private
         * @param length {Ext_ClassManager:method-getInstantiator:param_length}
         */
        getInstantiator: function(length) {
            var instantiators = this.instantiators,
                instantiator,
                i,
                args;

            instantiator = instantiators[length];

            if(!instantiator) {
                i = length;
                args = [];

                for(i = 0; i < length; i++) {
                    args.push('a[' + i + ']');
                }

                instantiator = instantiators[length] = new Function('c', 'a', 'return new c(' + args.join(',') + ')');
                //<debug>
                instantiator.displayName = "Ext.ClassManager.instantiate" + length;
                //</debug>
            }

            return instantiator;
        },

        // }}}
        // {{{ postprocessors

        /**
         * @private
         */
        postprocessors: {},

        // }}}
        // {{{ defaultPostprocessors

        /**
         * @private
         */
        defaultPostprocessors: [],

        // }}}
        // {{{ registerPostprocessor

        /**
         * {Ext_ClassManager:method-registerPostprocessor:desc}
         *
         * @private
         * @param {String} name {Ext_ClassManager:method-registerPostprocessor:param_name}
         * @param {Function} postprocessor {Ext_ClassManager:method-registerPostprocessor:param_postprocessor}
         */
        registerPostprocessor: function(name, fn, properties, position, relativeTo) {
            if(!position) {
                position = 'last';
            }

            if(!properties) {
                properties = [name];
            }

            this.postprocessors[name] = {
                name: name,
                properties: properties || false,
                fn: fn
            };

            this.setDefaultPostprocessorPosition(name, position, relativeTo);

            return this;
        },

        // }}}
        // {{{ setDefaultPostprocessors

        /**
         * {Ext_ClassManager:method-setDefaultPostprocessors:desc}
         *
         * @private
         * @param {String/Array} postprocessors {Ext_ClassManager:method-setDefaultPostprocessors:param_postprocessors}
         * @return {Ext.ClassManager} {Ext_ClassManager:method-setDefaultPostprocessors:return}
         */
        setDefaultPostprocessors: function(postprocessors) {
            this.defaultPostprocessors = arrayFrom(postprocessors);

            return this;
        },

        // }}}
        // {{{ setDefaultPostprocessorPosition

        /**
         * {Ext_ClassManager:method-setDefaultPostprocessorPosition:desc}
         *
         * @private
         * @param {String} name {Ext_ClassManager:method-setDefaultPostprocessorPosition:param_name}
         * @param {String} offset {Ext_ClassManager:method-setDefaultPostprocessorPosition:param_offset}
         * @param {String} relativeName {Ext_ClassManager:method-setDefaultPostprocessorPosition:param_relativeName}
         * @return {Ext.ClassManager} {Ext_ClassManager:method-setDefaultPostprocessorPosition:return}
         */
        setDefaultPostprocessorPosition: function(name, offset, relativeName) {
            var defaultPostprocessors = this.defaultPostprocessors,
                index;

            if(typeof offset == 'string') {
                if(offset === 'first') {
                    defaultPostprocessors.unshift(name);

                    return this;
                }
                else if(offset === 'last') {
                    defaultPostprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPostprocessors, relativeName);

            if(index !== -1) {
                Ext.Array.splice(defaultPostprocessors, Math.max(0, index + offset), 0, name);
            }

            return this;
        },

        // }}}
        // {{{ getNamesByExpression

        /**
         * {Ext_ClassManager:method-getNamesByExpression:desc}
         *
         * @param {String} expression {Ext_ClassManager:method-getNamesByExpression:param_expression}
         * @return {String[]} {Ext_ClassManager:method-getNamesByExpression:return}
         */
        getNamesByExpression: function(expression) {

            var nameToAliasesMap = this.maps.nameToAliases,
                names = [],
                name, alias, aliases, possibleName, regex, i, ln;

            if(expression.indexOf('*') !== -1) {
                expression = expression.replace(/\*/g, '(.*?)');
                regex = new RegExp('^' + expression + '$');

                for(name in nameToAliasesMap) {
                    if(nameToAliasesMap.hasOwnProperty(name)) {
                        aliases = nameToAliasesMap[name];

                        if(name.search(regex) !== -1) {
                            names.push(name);
                        }
                        else {
                            for(i = 0, ln = aliases.length; i < ln; i++) {
                                alias = aliases[i];

                                if(alias.search(regex) !== -1) {
                                    names.push(name);
                                    break;
                                }
                            }
                        }
                    }
                }

            } else {
                possibleName = this.getNameByAlias(expression);

                if(possibleName) {
                    names.push(possibleName);
                } else {
                    possibleName = this.getNameByAlternate(expression);

                    if(possibleName) {
                        names.push(possibleName);
                    } else {
                        names.push(expression);
                    }
                }
            }

            return names;
        }
    };

    //<feature classSystem.alias>
    /**
     * @cfg {String[]} alias
     * @member Ext.Class
     * {Ext_Class:cfg-alias:desc}
     */
    Manager.registerPostprocessor('alias', function(name, cls, data) {
        var aliases = data.alias,
            i, ln;

        for(i = 0,ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            this.setAlias(cls, alias);
        }

    }, ['xtype', 'alias']);
    //</feature>

    //<feature classSystem.singleton>
    /**
     * @cfg {Boolean} singleton
     * @member Ext.Class
     * {Ext_Class:cfg-singleton:desc}
     */
    Manager.registerPostprocessor('singleton', function(name, cls, data, fn) {
        fn.call(this, name, new cls(), data);
        return false;
    });
    //</feature>

    //<feature classSystem.alternateClassName>
    /**
     * @cfg {String/String[]} alternateClassName
     * @member Ext.Class
     * {Ext_Class:cfg-alternateClassName:desc}
     */
    Manager.registerPostprocessor('alternateClassName', function(name, cls, data) {
        var alternates = data.alternateClassName,
            i, ln, alternate;

        if(!(alternates instanceof Array)) {
            alternates = [alternates];
        }

        for(i = 0, ln = alternates.length; i < ln; i++) {
            alternate = alternates[i];

            this.set(alternate, cls);
        }
    });
    //</feature>

    Ext.apply(Ext, {

        // {{{ create

        /**
         * {Ext:method-create:desc}
         *
         * @param {String} [name] {Ext:method-create:param_name}
         * @param {Object...} [args] {Ext:method-create:param_args}
         * @return {Object} {Ext:method-create:return}
         * @member Ext
         * @method create
         */
        create: alias(Manager, 'instantiate'),

        // }}}
        // {{{ createByAlias

        /**
         * {Ext:method-createByAlias:desc}
         * @member Ext
         * @method createByAlias
         */
        createByAlias: alias(Manager, 'instantiateByAlias'),

        // }}}
        // {{{ define

        /**
         * @method
         *
         * {Ext:method-define:desc}
         *
         * @param {String} className {Ext:method-define:param_className}
         * @param {Object} data {Ext:method-define:param_data}
         * @param {Function} createdFn {Ext:method-define:param_createFn}
         * @return {Ext.Base}
         * @markdown
         * @member Ext
         * @method define
         */
        define: function(className, data, createdFn) {

            if(data.override) {
                return Manager.createOverride.apply(Manager, arguments);
            }

            return Manager.create.apply(Manager, arguments);
        },

        // }}}
        // {{{ getClassName

        /**
         * {Ext:method-getClassName:desc}
         * @member Ext
         * @method getClassName
         */
        getClassName: alias(Manager, 'getName'),

        // }}}
        // {{{ getDisplayName

        /**
         * {Ext_ClassManager:method-getDisplayName:desc}
         * @param {Object} object {Ext_ClassManager:method-getDisplayName:param_object}
         * @return {String} {Ext_ClassManager:method-getDisplayName:return}
         */
        getDisplayName: function(object) {
            if(object) {
                if(object.displayName) {
                    return object.displayName;
                }

                if(object.$name && object.$class) {
                    return Ext.getClassName(object.$class) + '#' + object.$name;
                }

                if(object.$className) {
                    return object.$className;
                }
            }

            return 'Anonymous';
        },

        // }}}
        // {{{ getClass

        /**
         * {Ext:method-getClass:desc}
         * @member Ext
         * @method getClass
         */
        getClass: alias(Manager, 'getClass'),

        // }}}
        // {{{ namespace

        /**
         * {Ext:method-namespace:desc}
         * @param {String...} namespaces {Ext:method-namespace:param_namespaces}
         * @return {Object} {Ext:method-namespace:return}
         * @member Ext
         * @method namespace
         */
        namespace: alias(Manager, 'createNamespaces')

        // }}}

    });

    /**
     * {Ext:method-ns:desc}
     * @member Ext
     * @method ns
     */
    Ext.ns = Ext.namespace;

    Class.registerPreprocessor('className', function(cls, data) {

        if(data.$className) {
            cls.$className = data.$className;
        }

    }, true, 'first');

    Class.registerPreprocessor('alias', function(cls, data) {

        var prototype = cls.prototype,
            xtypes = arrayFrom(data.xtype),
            aliases = arrayFrom(data.alias),
            widgetPrefix = 'widget.',
            widgetPrefixLength = widgetPrefix.length,
            xtypesChain = Array.prototype.slice.call(prototype.xtypesChain || []),
            xtypesMap = Ext.merge({}, prototype.xtypesMap || {}),
            i, ln, alias, xtype;

        for(i = 0,ln = aliases.length; i < ln; i++) {

            alias = aliases[i];

            if(alias.substring(0, widgetPrefixLength) === widgetPrefix) {
                xtype = alias.substring(widgetPrefixLength);
                Ext.Array.include(xtypes, xtype);
            }
        }

        cls.xtype = data.xtype = xtypes[0];
        data.xtypes = xtypes;

        for(i = 0,ln = xtypes.length; i < ln; i++) {
            xtype = xtypes[i];

            if(!xtypesMap[xtype]) {
                xtypesMap[xtype] = true;
                xtypesChain.push(xtype);
            }
        }

        data.xtypesChain = xtypesChain;
        data.xtypesMap = xtypesMap;

        Ext.Function.interceptAfter(data, 'onClassCreated', function() {
            var mixins = prototype.mixins,
                key, mixin;

            for(key in mixins) {
                if(mixins.hasOwnProperty(key)) {
                    mixin = mixins[key];

                    xtypes = mixin.xtypes;

                    if(xtypes) {
                        for(i = 0,ln = xtypes.length; i < ln; i++) {
                            xtype = xtypes[i];

                            if(!xtypesMap[xtype]) {
                                xtypesMap[xtype] = true;
                                xtypesChain.push(xtype);
                            }
                        }
                    }
                }
            }
        });

        for(i = 0,ln = xtypes.length; i < ln; i++) {
            xtype = xtypes[i];

            Ext.Array.include(aliases, widgetPrefix + xtype);
        }

        data.alias = aliases;

    }, ['xtype', 'alias']);

}(Ext.Class, Ext.Function.alias, Array.prototype.slice, Ext.Array.from, Ext.global));

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
