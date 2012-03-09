/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext
 * @singleton
 */
(function() {

    if(typeof global.Ext === 'undefined') {
        global.Ext = { global: global };
    }

    // {{{ Ext.apply

    /**
     * 設定されたコンフィグオブジェクトをオブジェクトに全てコピーします。
     * Note:オブジェクトや配列に対して、再帰的なコピーを行わず、
     * クローンを作成してコピーする場合は、Ext.Object.mergeを利用してください。
     *
     * @param o {Object} 適用されるオブジェクト
     * @param config {Object} 適用するオブジェクト
     * @param defaults {Object} 初期値として適用されるオブジェクト
     * @return {Object} 適用後のオブジェクト
     */
    Ext.apply = function(o, config, defaults) {

        if(defaults) {
            Ext.apply(o, defaults);
        }

        if(o && config && typeof config === 'object') {

            var i, j, k;

            for(i in config) {
                o[i] = config[i];
            }

        }

        return o;
    };

    // }}}


})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
