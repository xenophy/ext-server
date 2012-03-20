/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Object

/**
 * @class Ext.Object
 *
 * {Ext_Object:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ each

    /**
     * {Ext_Object:method-each:desc}
     *
     * @param {Object} object {Ext_Object:method-each:param_object}
     * @param {Function} fn {Ext_Object:method-each:param_fn}
     * @param {String} fn.key {Ext_Object:method-each:param_fn.key}
     * @param {Object} fn.value {Ext_Object:method-each:param_fn.value}
     * @param {Object} fn.object {Ext_Object:method-each:param_fn.object}
     * @param {Object} [scope] {Ext_Object:method-each:param_scope}
     */
    each: function(object, fn, scope) {

        for(var property in object) {
            if(object.hasOwnProperty(property)) {
                if(fn.call(scope || object, property, object[property], object) === false) {
                    return;
                }
            }
        }

    },

    // }}}
    // {{{ fromQueryString

    /**
     * {Ext_Object:method-fromQueryString:desc}
     *
     * @param {String} queryString {Ext_Object:method-fromQueryString:param_queryString}
     * @param {Boolean} [recursive=false] {Ext_Object:method-fromQueryString:param_recursive}
     * @return {Object} {Ext_Object:method-fromQueryString:return}
     */
    fromQueryString: function(queryString, recursive) {

        var parts = queryString.replace(/^\?/, '').split('&'),
            object = {},
            temp, components, name, value, i, ln,
            part, j, subLn, matchedKeys, matchedName,
            keys, key, nextKey;

        for(i = 0, ln = parts.length; i < ln; i++) {

            part = parts[i];

            if(part.length > 0) {

                components = part.split('=');
                name = decodeURIComponent(components[0]);
                value = (components[1] !== undefined) ? decodeURIComponent(components[1]) : '';

                if(!recursive) {

                    if(object.hasOwnProperty(name)) {
                        if(!Ext.isArray(object[name])) {
                            object[name] = [object[name]];
                        }
                        object[name].push(value);
                    } else {
                        object[name] = value;
                    }

                } else {

                    matchedKeys = name.match(/(\[):?([^\]]*)\]/g);
                    matchedName = name.match(/^([^\[]+)/);

                    if(!matchedName) {

                        Ext.Error.raise({
                            sourceClass: "Ext.Object",
                            sourceMethod: "fromQueryString",
                            queryString: queryString,
                            recursive: recursive,
                            msg: Ext.$e("Malformed query string given, failed parsing name from \"{0}\"", part)
                        });

                    }

                    name = matchedName[0];
                    keys = [];

                    if(matchedKeys === null) {
                        object[name] = value;
                        continue;
                    }

                    for(j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                        key = matchedKeys[j];
                        key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                        keys.push(key);
                    }

                    keys.unshift(name);

                    temp = object;

                    for(j = 0, subLn = keys.length; j < subLn; j++) {

                        key = keys[j];

                        if(j === subLn - 1) {

                            if(Ext.isArray(temp) && key === '') {
                                temp.push(value);
                            } else {
                                temp[key] = value;
                            }

                        } else {

                            if(temp[key] === undefined || typeof temp[key] === 'string') {

                                nextKey = keys[j+1];

                                temp[key] = (Ext.isNumeric(nextKey) || nextKey === '') ? [] : {};
                            }

                            temp = temp[key];
                        }
                    }
                }
            }
        }

        return object;
    },

    // }}}
    // {{{ getKey

    /**
     * {Ext_Object:method-getKey:desc}
     *
     * @param {Object} object {Ext_Object:method-getKey:param_object}
     * @param {Object} value {Ext_Object:method-getKey:param_value}
     */
    getKey: function(object, value) {

        for(var property in object) {

            if(object.hasOwnProperty(property) && object[property] === value) {
                return property;
            }

        }

        return null;
    },

    // }}}
    // {{{ getKeys

    /**
     * {Ext_Object:method-getKeys:desc}
     *
     * @param {Object} object {Ext_Object:method-getKeys:param_object}
     * @return {String[]} {Ext_Object:method-getKeys:return}
     */
    getKeys: ('keys' in Object.prototype) ? Object.keys : function(object) {

        var keys = [], property;

        for(property in object) {
            if(object.hasOwnProperty(property)) {
                keys.push(property);
            }
        }

        return keys;
    },

    // }}}
    // {{{ getSize

    /**
     * {Ext_Object:method-getSize:desc}
     *
     * @param {Object} object {Ext_Object:method-getSize:param_object}
     * @return {Number} {Ext_Object:method-getSize:return}
     */
    getSize: function(object) {

        var size = 0, property;

        for(property in object) {

            if(object.hasOwnProperty(property)) {
                size++;
            }

        }

        return size;
    },

    // }}}
    // {{{ getValues

    /**
     * {Ext_Object:method-getValues:desc}
     *
     * @param {Object} object {Ext_Object:method-getValues:param_object}
     * @return {Array} {Ext_Object:method-getValues:return}
     */
    getValues: function(object) {

        var values = [], property;

        for(property in object) {

            if(object.hasOwnProperty(property)) {
                values.push(object[property]);
            }

        }

        return values;
    },

    // }}}
    // {{{ merge

    /**
     * {Ext_Object:method-merge:desc}
     *
     * @param {Object...} object {Ext_Object:method-merge:param_object}
     * @return {Object} {Ext_Object:method-merge:return}
     */
    merge: function(source, key, value) {

        if(typeof key === 'string') {

            if(value && value.constructor === Object) {

                if(source[key] && source[key].constructor === Object) {
                    Ext.Object.merge(source[key], value);
                } else {
                    source[key] = Ext.clone(value);
                }

            } else {
                source[key] = value;
            }

            return source;
        }

        var i = 1,
            ln = arguments.length,
            object, property;

        for(; i < ln; i++) {

            object = arguments[i];

            for(property in object) {
                if(object.hasOwnProperty(property)) {
                    Ext.Object.merge(source, property, object[property]);
                }
            }
        }

        return source;
    },

    // }}}
    // {{{ toQueryObjects

    /**
     * {Ext_Object:method-toQueryObjects:desc}
     *
     * @param {String} name {Ext_Object:method-toQueryObjects:param_name}
     * @param {Object/Array} value {Ext_Object:method-toQueryObjects:param_value}
     * @param {Boolean} [recursive=false] {Ext_Object:method-toQueryObjects:param_recursive}
     * @return {Array} {Ext_Object:method-toQueryObjects:return}
     */
    toQueryObjects: function(name, value, recursive) {

        var self = Ext.Object.toQueryObjects,
            objects = [],
            i, ln;

        if(Ext.isArray(value)) {

            for(i = 0, ln = value.length; i < ln; i++) {

                if(recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                } else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }

            }

        } else if(Ext.isObject(value)) {

            for(i in value) {

                if(value.hasOwnProperty(i)) {
                    if(recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    } else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }

            }

        } else {

            objects.push({
                name: name,
                value: value
            });

        }

        return objects;
    },

    // }}}
    // {{{ toQueryString

    /**
     * {Ext_Object:method-toQueryString:desc}
     *
     * @param {Object} object {Ext_Object:method-toQueryString:param_object}
     * @param {Boolean} [recursive=false] {Ext_Object:method-toQueryString:param_recursive}
     * @return {String} {Ext_Object:method-toQueryString:return}
     */
    toQueryString: function(object, recursive) {

        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;

        for(i in object) {
            if(object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(Ext.Object.toQueryObjects(i, object[i], recursive));
            }
        }

        for(j = 0, ln = paramObjects.length; j < ln; j++) {

            paramObject = paramObjects[j];
            value = paramObject.value;

            if(Ext.isEmpty(value)) {
                value = '';
            } else if(Ext.isDate(value)) {
                value = Ext.Date.toString(value);
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
