/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Error

/**
 * @class Ext.Error
 *
 * {Ext_Error:doc-contents}
 *
 */
var ExtError = Ext.Error = function(config) {

    if(Ext.isString(config)) {
        config = { msg: config };
    }

    Ext.apply(this, config);
    this.message = this.message || this.msg;
};
ExtError.prototype = new Error();
ExtError.prototype.name = 'Ext.Error';
ExtError.prototype.toString = function() {

    var me = this,
        className = me.className ? me.className  : '',
        methodName = me.methodName ? '.' + me.methodName + '(): ' : '',
        msg = me.msg || Ext.$e("(No description provided)");

    return className + methodName + msg;
};

Ext.apply(Ext.Error, {

    // {{{ ignore

    /**
     * @property ignore
     */
    ignore: false,

    // }}}
    // {{{ handle

    /**
     * {Ext_Error:static-method-handle:desc}
     *
     * @param o {Object} xxx
     * @static
     */
    handle: function() {
        return Ext.Error.ignore;
    },

    // }}}
    // {{{ raise

    /**
     * {Ext_Error:static-method-raise:desc}
     *
     * @param o {Object} xxx
     * @return {Object}
     * @static
     */
    raise: function(err) {

        err = err || {};

        if(Ext.isString(err)) {
            err = { msg: err };
        }

        var method = this.raise.caller;

        if(method) {

            if(method.$name) {
                err.sourceMethod = method.$name;
            }

            if(method.$owner) {
                err.sourceClass = method.$owner.$className;
            }

        }

        if(Ext.Error.handle(err) !== true) {

            var msg = Ext.Error.prototype.toString.call(err);

            /*
             TODO:
            Ext.log({
                msg: msg,
                level: 'error',
                dump: err,
                stack: true
            });
            */

            throw new Ext.Error(err);
        }
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
