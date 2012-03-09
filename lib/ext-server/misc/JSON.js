/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.JSON
 *
 * @singleton
 */
module.exports = {

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    encode: JSON.stringify,

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    decode: JSON.parse

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
