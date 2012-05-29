/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Version

/**
 * @class Ext.Version
 *
 * {Ext_Version:doc-contents}
 */

(function() {

    // Current core version
    var version = '0.2.1', Version;

    Ext.Version = Version = Ext.extend(Object, {

        // {{{ constructor

        constructor: function(version) {

            var parts, releaseStartIndex;

            if(version instanceof Version) {
                return version;
            }

            this.version = this.shortVersion = String(version).toLowerCase().replace(/_/g, '.').replace(/[\-+]/g, '');

            releaseStartIndex = this.version.search(/([^\d\.])/);

            if(releaseStartIndex !== -1) {
                this.release = this.version.substr(releaseStartIndex, version.length);
                this.shortVersion = this.version.substr(0, releaseStartIndex);
            }

            this.shortVersion = this.shortVersion.replace(/[^\d]/g, '');

            parts = this.version.split('.');

            this.major = parseInt(parts.shift() || 0, 10);
            this.minor = parseInt(parts.shift() || 0, 10);
            this.patch = parseInt(parts.shift() || 0, 10);
            this.build = parseInt(parts.shift() || 0, 10);

            return this;
        },

        // }}}
        // {{{ toString

        /**
         * {Ext_Version:method-toString:desc}
         * @private
         * @return {String} {Ext_Version:method-toString:return}
         */
        toString: function() {
            return this.version;
        },

        // }}}
        // {{{ valueOf

        /**
         * {Ext_Version:method-valueOf:desc}
         * @private
         * @return {String} {Ext_Version:method-valueOf:return}
         */
        valueOf: function() {
            return this.version;
        },

        // }}}
        // {{{ getMajor

        /**
         * {Ext_Version:method-getMajor:desc}
         * @return {Number} {Ext_Version:method-getMajor:return}
         */
        getMajor: function() {
            return this.major || 0;
        },

        // }}}
        // {{{ getMinor

        /**
         * {Ext_Version:method-getMinor:desc}
         * @return {Number} {Ext_Version:method-getMinor:return}
         */
        getMinor: function() {
            return this.minor || 0;
        },

        // }}}
        // {{{ getPatch

        /**
         * {Ext_Version:method-getPatch:desc}
         * @return {Number} {Ext_Version:method-getPatch:return}
         */
        getPatch: function() {
            return this.patch || 0;
        },

        // }}}
        // {{{ getBuild

        /**
         * {Ext_Version:method-getBuild:desc}
         * @return {Number} {Ext_Version:method-getBuild:return}
         */
        getBuild: function() {
            return this.build || 0;
        },

        // }}}
        // {{{ getRelease

        /**
         * {Ext_Version:method-getRelease:desc}
         * @return {Number} {Ext_Version:method-getRelease:return}
         */
        getRelease: function() {
            return this.release || '';
        },

        // }}}
        // {{{ isGreaterThan

        /**
         * {Ext_Version:method-isGreaterThan:desc}
         * @param {String/Number} target {Ext_Version:method-isGreaterThan:param_target}
         * @return {Boolean} {Ext_Version:method-isGreaterThan:return}
         */
        isGreaterThan: function(target) {
            return Version.compare(this.version, target) === 1;
        },

        // }}}
        // {{{ isGreaterThanOrEqual

        /**
         * {Ext_Version:method-isGreaterThanOrEqual:desc}
         * @param {String/Number} target {Ext_Version:method-isGreaterThanOrEqual:param_target}
         * @return {Boolean} {Ext_Version:method-isGreaterThanOrEqual:return}
         */
        isGreaterThanOrEqual: function(target) {
            return Version.compare(this.version, target) >= 0;
        },

        // }}}
        // {{{ isLessThan

        /**
         * {Ext_Version:method-isLessThan:desc}
         * @param {String/Number} target {Ext_Version:method-isLessThan:param_target}
         * @return {Boolean} {Ext_Version:method-isLessThan:return}
         */
        isLessThan: function(target) {
            return Version.compare(this.version, target) === -1;
        },

        // }}}
        // {{{ isLessThanOrEqual

        /**
         * {Ext_Version:method-isLessThanOrEqual:desc}
         * @param {String/Number} target {Ext_Version:method-isLessThanOrEqual:param_target}
         * @return {Boolean} {Ext_Version:method-isLessThanOrEqual:return}
         */
        isLessThanOrEqual: function(target) {
            return Version.compare(this.version, target) <= 0;
        },

        // }}}
        // {{{ equals

        /**
         * {Ext_Version:method-equals:desc}
         * @param {String/Number} target {Ext_Version:method-equals:param_target}
         * @return {Boolean} {Ext_Version:method-equals:return}
         */
        equals: function(target) {
            return Version.compare(this.version, target) === 0;
        },

        // }}}
        // {{{ match

        /**
         * {Ext_Version:method-match:desc}
         * @param {String/Number} target {Ext_Version:method-match:param_target}
         * @return {Boolean} {Ext_Version:method-match:return}
         */
        match: function(target) {
            target = String(target);
            return this.version.substr(0, target.length) === target;
        },

        // }}}
        // {{{ toArray

        /**
         * {Ext_Version:method-toArray:desc}
         * @return {Number[]}
         */
        toArray: function() {
            return [this.getMajor(), this.getMinor(), this.getPatch(), this.getBuild(), this.getRelease()];
        },

        // }}}
        // {{{ getShortVersion

        /**
         * {Ext_Version:method-getShortVersion:desc}
         * @return {String}
         */
        getShortVersion: function() {
            return this.shortVersion;
        },

        // }}}
        // {{{ gt

        /**
         * {Ext_Version:method-gt:desc}
         * @param {String/Number} target
         * @return {Boolean}
         */
        gt: function() {
            return this.isGreaterThan.apply(this, arguments);
        },

        // }}}
        // {{{ lt

        /**
         * {Ext_Version:method-lt:desc}
         * @param {String/Number} target
         * @return {Boolean}
         */
        lt: function() {
            return this.isLessThan.apply(this, arguments);
        },

        // }}}
        // {{{ gtEq

        /**
         * {Ext_Version:method-gtEq:desc}
         * @param {String/Number} target
         * @return {Boolean}
         */
        gtEq: function() {
            return this.isGreaterThanOrEqual.apply(this, arguments);
        },

        // }}}
        // {{{ ltEq

        /**
         * {Ext_Version:method-ltEq:desc}
         * @param {String/Number} target
         * @return {Boolean}
         */
        ltEq: function() {
            return this.isLessThanOrEqual.apply(this, arguments);
        }

        // }}}

    });

    Ext.apply(Version, {

        // @private
        releaseValueMap: {
            'dev': -6,
            'alpha': -5,
            'a': -5,
            'beta': -4,
            'b': -4,
            'rc': -3,
            '#': -2,
            'p': -1,
            'pl': -1
        },

        /**
         * {Ext_Version:method-getComponentValue:desc}
         * @static
         * @param {Object} value {Ext_Version:method-getComponentValue:param_value}
         * @return {Object}
         */
        getComponentValue: function(value) {
            return !value ? 0 : (isNaN(value) ? this.releaseValueMap[value] || value : parseInt(value, 10));
        },

        /**
         * {Ext_Version:method-compare:desc}
         * @static
         * @param {String} current {Ext_Version:method-compare:param_current}
         * @param {String} target {Ext_Version:method-compare:param_target}
         * @return {Number} {Ext_Version:method-compare:return}
         */
        compare: function(current, target) {
            var currentValue, targetValue, i;

            current = new Version(current).toArray();
            target = new Version(target).toArray();

            for(i = 0; i < Math.max(current.length, target.length); i++) {
                currentValue = this.getComponentValue(current[i]);
                targetValue = this.getComponentValue(target[i]);

                if(currentValue < targetValue) {
                    return -1;
                } else if(currentValue > targetValue) {
                    return 1;
                }
            }

            return 0;
        }
    });

    Ext.apply(Ext, {

        // {{{ versions

        /**
         * @private
         */
        versions: {},

        // }}}
        // {{{ lastRegisteredVersion

        /**
         * @private
         */
        lastRegisteredVersion: null,

        // }}}
        // {{{ setVersion

        /**
         * {Ext_Version:method-setVersion:desc}
         *
         * @param {String} packageName {Ext_Version:method-setVersion:param_pacageName}
         * @param {String/Ext.Version} version {Ext_Version:method-setVersion:param_version}
         * @return {Ext}
         */
        setVersion: function(packageName, version) {

            Ext.versions[packageName] = new Version(version);
            Ext.lastRegisteredVersion = Ext.versions[packageName];

            return this;
        },

        // }}}
        // {{{ getVersion

        /**
         * {Ext_Version:method-getVersion:desc}
         * @param {String} packageName {Ext_Version:method-getVersion:param_packageName}
         * @return {Ext.Version} {Ext_Version:method-getVersion:return}
         */
        getVersion: function(packageName) {
            if(packageName === undefined) {
                return Ext.lastRegisteredVersion;
            }

            return Ext.versions[packageName];
        },

        // }}}
        // {{{ deprecate

        /**
         * {Ext_Version:method-deprecate:desc}
         * @param {String} packageName {Ext_Version:method-deprecate:param_packageName}
         * @param {String} since {Ext_Version:method-deprecate:param_since}
         * @param {Function} closure {Ext_Version:method-deprecate:param_closure}
         * @param {Object} scope {Ext_Version:method-deprecate:param_scope}
         * @markdown
         */
        deprecate: function(packageName, since, closure, scope) {
            if(Version.compare(Ext.getVersion(packageName), since) < 1) {
                closure.call(scope);
            }
        }

        // }}}

    });

    Ext.setVersion('server', version);

}());

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
