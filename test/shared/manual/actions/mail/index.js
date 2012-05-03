/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ index.js

module.exports = function() {

    this.mail({
        from: 'Ext Server <extserver@xenophy.com>',
        to: '"Kazuhiro Kotsutsumi" <kotsutsumi@xenophy.com>',
        subject: '日本語のタイトル',
        text: '日本語のメール本文'
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
