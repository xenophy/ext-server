/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.util.Observable

(function() {

var EventEmitter = require('events').EventEmitter;

/**
 * @class Ext.util.Observable
 *
 * {Ext_util_Observable:doc-contents}
 */
Ext.define('Ext.util.Observable', Ext.apply(EventEmitter.prototype, {

    // {{{ isObservable

    /**
     * @property {Boolean} isObservable
     * {Ext_util_Observable:property-isObservable:desc}
     */
    isObservable: true,

    // }}}
    // {{{ fireEvent

    fireEvent: EventEmitter.prototype.emit

    // }}}

}));

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
