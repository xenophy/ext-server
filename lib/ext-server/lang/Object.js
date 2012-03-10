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
 * オブジェクトを扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ each

    /**
     * @method each
     *
     * オブジェクトを反復処理し、各要素に対して指定したコールバック関数を呼び出します。
     * コールバック関数がfalseを返した場合、その時点で反復処理は停止されます。
     *
     * @param {Object} object 反復処理するオブジェクト
     * @param {Function} fn コールバック関数。それぞれの処理で渡される引数は以下の通りです。

     - {String} `key`
     - {Mixed} `value`
     - {Object} `object` The object itself

     * @param {Object} scope (オプション) コールバック関数実行時のスコープ
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
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
