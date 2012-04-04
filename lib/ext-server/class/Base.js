/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Base

/**
 * @class Ext.Base
 *
 * {Ext_Base:doc-contents}
 */
(function(flexSetter) {

    var noArgs = [],
        Base = function(){};

    Ext.apply(Base, {

        // {{{ $className

        $className: 'Ext.Base',

        // }}}
        // {{{ $isClass

        $isClass: true,

        // }}}
        // {{{ create

        /**
         * {Ext_Base:method-create:desc}
         *
         * @return {Object} {Ext_Base:method-create:return}
         * @static
         * @inheritable
         */
        create: function() {
            return Ext.create.apply(Ext, [this].concat(Array.prototype.slice.call(arguments, 0)));
        },

        // }}}
        // {{{ extend

        /**
         * @private
         * @param config
         */
        extend: function(parent) {

            var parentPrototype = parent.prototype,
                basePrototype, prototype, i, ln, name, statics;

            prototype = this.prototype = Ext.Object.chain(parentPrototype);
            prototype.self = this;

            this.superclass = prototype.superclass = parentPrototype;

            if(!parent.$isClass) {

                basePrototype = Ext.Base.prototype;

                for(i in basePrototype) {
                    if(i in prototype) {
                        prototype[i] = basePrototype[i];
                    }
                }
            }

            statics = parentPrototype.$inheritableStatics;

            if(statics) {
                for(i = 0,ln = statics.length; i < ln; i++) {
                    name = statics[i];

                    if(!this.hasOwnProperty(name)) {
                        this[name] = parent[name];
                    }
                }
            }

            if(parent.$onExtended) {
                this.$onExtended = parent.$onExtended.slice();
            }

            prototype.config = new prototype.configClass();
            prototype.initConfigList = prototype.initConfigList.slice();
            prototype.initConfigMap = Ext.clone(prototype.initConfigMap);
            prototype.configMap = Ext.Object.chain(prototype.configMap);
        },

        // }}}
        // {{{ $onExtended

        /**
         * @private
         * @param config
         */
        '$onExtended': [],

        // }}}
        // {{{ triggerExtended

        /**
         * @private
         * @param config
         */
        triggerExtended: function() {
            var callbacks = this.$onExtended,
                ln = callbacks.length,
                i, callback;

            if(ln > 0) {
                for(i = 0; i < ln; i++) {
                    callback = callbacks[i];
                    callback.fn.apply(callback.scope || this, arguments);
                }
            }
        },

        // }}}
        // {{{ onExtended

        /**
         * @private
         * @param config
         */
        onExtended: function(fn, scope) {
            this.$onExtended.push({
                fn: fn,
                scope: scope
            });

            return this;
        },

        // }}}
        // {{{ addConfig

        /**
         * @private
         * @param config
         */
        addConfig: function(config, fullMerge) {
            var prototype = this.prototype,
                configNameCache = Ext.Class.configNameCache,
                hasConfig = prototype.configMap,
                initConfigList = prototype.initConfigList,
                initConfigMap = prototype.initConfigMap,
                defaultConfig = prototype.config,
                initializedName, name, value;

            for(name in config) {
                if(config.hasOwnProperty(name)) {
                    if(!hasConfig[name]) {
                        hasConfig[name] = true;
                    }

                    value = config[name];

                    initializedName = configNameCache[name].initialized;

                    if(!initConfigMap[name] && value !== null && !prototype[initializedName]) {
                        initConfigMap[name] = true;
                        initConfigList.push(name);
                    }
                }
            }

            if(fullMerge) {
                Ext.merge(defaultConfig, config);
            }
            else {
                Ext.mergeIf(defaultConfig, config);
            }

            prototype.configClass = Ext.Object.classify(defaultConfig);
        },

        // }}}
        // {{{ addStatics

        /**
         * {Ext_Base:method-addStatics:desc}
         *
         * @param {Object} members {Ext_Base:method-addStatics:param_members}
         * @return {Ext.Base} {Ext_Base:method-addStatics:return}
         * @static
         * @inheritable
         */
        addStatics: function(members) {
            var member, name;

            for(name in members) {
                if(members.hasOwnProperty(name)) {
                    member = members[name];
                    //<debug>
                    if(typeof member == 'function') {
                        member.displayName = Ext.getClassName(this) + '.' + name;
                    }
                    //</debug>
                    this[name] = member;
                }
            }

            return this;
        },

        // }}}
        // {{{ addInheritableStatics

        /**
         * @private
         * @param {Object} members
         */
        addInheritableStatics: function(members) {

            var inheritableStatics,
                hasInheritableStatics,
                prototype = this.prototype,
                name, member;

            inheritableStatics = prototype.$inheritableStatics;
            hasInheritableStatics = prototype.$hasInheritableStatics;

            if(!inheritableStatics) {
                inheritableStatics = prototype.$inheritableStatics = [];
                hasInheritableStatics = prototype.$hasInheritableStatics = {};
            }

            for(name in members) {

                if(members.hasOwnProperty(name)) {
                    member = members[name];
                    //<debug>
                    if(typeof member == 'function') {
                        member.displayName = Ext.getClassName(this) + '.' + name;
                    }
                    //</debug>
                    this[name] = member;

                    if(!hasInheritableStatics[name]) {
                        hasInheritableStatics[name] = true;
                        inheritableStatics.push(name);
                    }
                }
            }

            return this;
        },

        // }}}
        // {{{ addMembers

        /**
         * {Ext_Base:method-addMembers:desc}
         *
         * @param {Object} members {Ext_Base:method-addMembers:param_members}
         * @static
         * @inheritable
         */
        addMembers: function(members) {
            var prototype = this.prototype,
                enumerables = Ext.enumerables,
                names = [],
                i, ln, name, member;

            for(name in members) {
                names.push(name);
            }

            if(enumerables) {
                names.push.apply(names, enumerables);
            }

            for(i = 0,ln = names.length; i < ln; i++) {
                name = names[i];

                if(members.hasOwnProperty(name)) {
                    member = members[name];

                    if(typeof member == 'function' && !member.$isClass && member !== Ext.emptyFn) {
                        member.$owner = this;
                        member.$name = name;
                        //<debug>
                        member.displayName = (this.$className || '') + '#' + name;
                        //</debug>
                    }

                    prototype[name] = member;
                }
            }

            return this;
        },

        // }}}
        // {{{ addMember

        /**
         * @private
         * @param name
         * @param member
         */
        addMember: function(name, member) {
            if(typeof member == 'function' && !member.$isClass && member !== Ext.emptyFn) {
                member.$owner = this;
                member.$name = name;
                //<debug>
                member.displayName = (this.$className || '') + '#' + name;
                //</debug>
            }

            this.prototype[name] = member;

            return this;
        },

        // }}}
        // {{{ implement

        /**
         * @private
         */
        implement: function() {
            this.addMembers.apply(this, arguments);
        },

        // }}}
        // {{{ borrow

        /**
         * {Ext_Base:method-borrow:desc}
         *
         * @param {Ext.Base} fromClass {Ext_Base:method-borrow:param_frmClass}
         * @param {Array/String} members {Ext_Base:method-borrow:param_members}
         * @return {Ext.Base} {Ext_Base:method-borrow:return}
         * @static
         * @inheritable
         * @private
         */
        borrow: function(fromClass, members) {
            var prototype = this.prototype,
                fromPrototype = fromClass.prototype,
                //<debug>
                className = Ext.getClassName(this),
                //</debug>
                i, ln, name, fn, toBorrow;

            members = Ext.Array.from(members);

            for(i = 0,ln = members.length; i < ln; i++) {
                name = members[i];

                toBorrow = fromPrototype[name];

                if(typeof toBorrow == 'function') {

                    fn = Ext.Function.clone(toBorrow);

                    //<debug>
                    if(className) {
                        fn.displayName = className + '#' + name;
                    }
                    //</debug>

                    fn.$owner = this;
                    fn.$name = name;

                    prototype[name] = fn;
                }
                else {
                    prototype[name] = toBorrow;
                }
            }

            return this;
        },

        // }}}
        // {{{ override

        /**
         * {Ext_Base:method-override:desc}
         * @param {Object} members {Ext_Base:method-override:param_members}
         * @return {Ext.Base} {Ext_Base:method-override:return}
         * @static
         * @inheritable
         * @markdown
         * @deprecated 4.1.0 {Ext_Base:method-override:deprecated}
         */
        override: function(members) {
            var me = this,
                enumerables = Ext.enumerables,
                target = me.prototype,
                cloneFunction = Ext.Function.clone,
                name, index, member, statics, names, previous;

            if(arguments.length === 2) {
                name = members;
                members = {};
                members[name] = arguments[1];
                enumerables = null;
            }

            do {
                names = []; // clean slate for prototype (1st pass) and static (2nd pass)
                statics = null; // not needed 1st pass, but needs to be cleared for 2nd pass

                for(name in members) { // hasOwnProperty is checked in the next loop...
                    if(name == 'statics') {
                        statics = members[name];
                    } else if (name == 'config') {
                        me.addConfig(members[name], true);
                    } else {
                        names.push(name);
                    }
                }

                if(enumerables) {
                    names.push.apply(names, enumerables);
                }

                for(index = names.length; index--; ) {
                    name = names[index];

                    if(members.hasOwnProperty(name)) {
                        member = members[name];

                        if(typeof member == 'function' && !member.$className && member !== Ext.emptyFn) {
                            if(typeof member.$owner != 'undefined') {
                                member = cloneFunction(member);
                            }

                            //<debug>
                            if(me.$className) {
                                member.displayName = me.$className + '#' + name;
                            }
                            //</debug>

                            member.$owner = me;
                            member.$name = name;

                            previous = target[name];
                            if(previous) {
                                member.$previous = previous;
                            }
                        }

                        target[name] = member;
                    }
                }

                target = me; // 2nd pass is for statics
                members = statics; // statics will be null on 2nd pass
            } while (members);

            return this;
        },

        // }}}
        // {{{ callParent

        callParent: function(args) {

            var method;

            return (method = this.callParent.caller) && (method.$previous ||
                  ((method = method.$owner ? method : method.caller) &&
                        method.$owner.superclass.$class[method.$name])).apply(this, args || noArgs);
        },

        // }}}
        // {{{ mixin

        /**
         * {Ext_Base:method-mixin:desc}
         *
         * @private
         * @inheritable
         */
        mixin: function(name, mixinClass) {

            var mixin = mixinClass.prototype,
                prototype = this.prototype,
                key;

            if(typeof mixin.onClassMixedIn != 'undefined') {
                mixin.onClassMixedIn.call(mixinClass, this);
            }

            if(!prototype.hasOwnProperty('mixins')) {
                if('mixins' in prototype) {
                    prototype.mixins = Ext.Object.chain(prototype.mixins);
                } else {
                    prototype.mixins = {};
                }
            }

            for(key in mixin) {
                if(key === 'mixins') {
                    Ext.merge(prototype.mixins, mixin[key]);
                } else if(typeof prototype[key] == 'undefined' && key != 'mixinId' && key != 'config') {
                    prototype[key] = mixin[key];
                }
            }

            if('config' in mixin) {
                this.addConfig(mixin.config, false);
            }

            prototype.mixins[name] = mixin;
        },

        // }}}
        // {{{ getName

        /**
         * {Ext_Base:method-getName:desc}
         *
         * @return {String} {Ext_Base:method-getName:return}
         * @static
         * @inheritable
         */
        getName: function() {
            return Ext.getClassName(this);
        },

        // }}}
        // {{{ createAlias

        /**
         * {Ext_Base:method-createAlias:desc}
         *
         * @param {String/Object} alias {Ext_Base:method-createAlias:para_alias}
         * @param {String/Object} origin {Ext_Base:method-createAlias:para_origin}
         * @static
         * @inheritable
         * @method
         */
        createAlias: flexSetter(function(alias, origin) {
            this.override(alias, function() {
                return this[origin].apply(this, arguments);
            });
        })

        // }}}

    });

    Base.implement({

        // {{{ isInstance

        isInstance: true,

        // }}}
        // {{{ $className

        $className: 'Ext.Base',

        // }}}
        // {{{ configClass

        configClass: Ext.emptyFn,

        // }}}
        // {{{ initConfigList

        initConfigList: [],

        // }}}
        // {{{ configMap

        configMap: {},

        // }}}
        // {{{ initConfigMap

        initConfigMap: {},

        // }}}
        // {{{ statics

        /**
         * {Ext_Base:method-statics:desc}
         * @protected
         * @return {Ext.Class} {Ext_Base:method-statics:return}
         */
        statics: function() {

            var method = this.statics.caller,
                self = this.self;

            if(!method) {
                return self;
            }

            return method.$owner;
        },

        // }}}
        // {{{ callParent

        /**
         * {Ext_Base:method-callParent:desc}
         * @protected
         * @param {Array/Arguments} args {Ext_Base:method-callParent:param_args}
         * @return {Object} {Ext_Base:method-callParent:return}
         */
        callParent: function(args) {
            // NOTE: this code is deliberately as few expressions (and no function calls)
            // as possible so that a debugger can skip over this noise with the minimum number
            // of steps. Basically, just hit Step Into until you are where you really wanted
            // to be.
            var method,
                superMethod = (method = this.callParent.caller) && (method.$previous ||
                        ((method = method.$owner ? method : method.caller) &&
                                method.$owner.superclass[method.$name]));

            return superMethod.apply(this, args || noArgs);
        },

        // }}}
        // {{{ self

        /**
         * @property {Ext.Class} self
         * {Ext_Base:property-self:desc}
         *
         * @protected
         */
        self: Base,

        // }}}
        // {{{ constructor

        // Default constructor, simply returns `this`
        constructor: function() {
            return this;
        },

        // }}}
        // {{{ initConfig

        //<feature classSystem.config>
        /**
         * {Ext_Base:method-initConfig:desc}
         *
         * @protected
         * @param {Object} config {Ext_Base:method-initConfig:param_config}
         * @return {Object} {Ext_Base:method-initConfig:return}
         */
        initConfig: function(config) {

            var instanceConfig = config,
                configNameCache = Ext.Class.configNameCache,
                defaultConfig = new this.configClass(),
                defaultConfigList = this.initConfigList,
                hasConfig = this.configMap,
                nameMap, i, ln, name, initializedName;

            this.initConfig = Ext.emptyFn;

            this.initialConfig = instanceConfig || {};

            this.config = config = (instanceConfig) ? Ext.merge(defaultConfig, config) : defaultConfig;

            if(instanceConfig) {
                defaultConfigList = defaultConfigList.slice();

                for(name in instanceConfig) {
                    if(hasConfig[name]) {
                        if(instanceConfig[name] !== null) {
                            defaultConfigList.push(name);
                            this[configNameCache[name].initialized] = false;
                        }
                    }
                }
            }

            for(i = 0,ln = defaultConfigList.length; i < ln; i++) {
                name = defaultConfigList[i];
                nameMap = configNameCache[name];
                initializedName = nameMap.initialized;

                if(!this[initializedName]) {
                    this[initializedName] = true;
                    this[nameMap.set].call(this, config[name]);
                }
            }

            return this;
        },

        // }}}
        // {{{ hasConfig

        /**
         * @private
         * @param config
         */
        hasConfig: function(name) {
            return Boolean(this.configMap[name]);
        },

        // }}}
        // {{{ setConfig

        /**
         * @private
         */
        setConfig: function(config, applyIfNotSet) {

            if(!config) {
                return this;
            }

            var configNameCache = Ext.Class.configNameCache,
                currentConfig = this.config,
                hasConfig = this.configMap,
                initialConfig = this.initialConfig,
                name, value;

            applyIfNotSet = Boolean(applyIfNotSet);

            for(name in config) {

                if(applyIfNotSet && initialConfig.hasOwnProperty(name)) {
                    continue;
                }

                value = config[name];
                currentConfig[name] = value;

                if(hasConfig[name]) {
                    this[configNameCache[name].set](value);
                }
            }

            return this;
        },

        // }}}
        // {{{ getConfig

        /**
         * @private
         * @param name
         */
        getConfig: function(name) {

            var configNameCache = Ext.Class.configNameCache;

            return this[configNameCache[name].get]();
        },

        // }}}
        // {{{ getInitialConfig

        /**
         * @param name
         */
        getInitialConfig: function(name) {

            var config = this.config;

            if(!name) {
                return config;
            } else {
                return config[name];
            }
        },

        // }}}
        // {{{ onConfigUpdate

        /**
         * @private
         * @param names
         * @param callback
         * @param scope
         */
        onConfigUpdate: function(names, callback, scope) {

            var self = this.self,
                i, ln, name,
                updaterName, updater, newUpdater;

            names = Ext.Array.from(names);

            scope = scope || this;

            for(i = 0,ln = names.length; i < ln; i++) {

                name = names[i];
                updaterName = 'update' + Ext.String.capitalize(name);
                updater = this[updaterName] || Ext.emptyFn;
                newUpdater = function() {
                    updater.apply(this, arguments);
                    scope[callback].apply(scope, arguments);
                };
                newUpdater.$name = updaterName;
                newUpdater.$owner = self;

                this[updaterName] = newUpdater;
            }
        },

        // }}}
        // {{{ destroy

        destroy: function() {
            this.destroy = Ext.emptyFn;
        }

        // }}}

    });

    Ext.Base = Base;

}(Ext.Function.flexSetter));

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
