/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ index.js

module.exports = function() {

    var result = Ext.markdown([
        '見出し 1',
        'サンプル',
        '========',
        '# サンプル ',
        '# サンプル # ',
        '',
        '見出し 2',
        'サンプル',
        '--------',
        '## サンプル ',
        '## サンプル ##',
        '',
        '見出し3',
        '### サンプル',
        '',
        '見出し4',
        '#### サンプル',
        '',
        '見出し5',
        '##### サンプル',
        '',
        '見出し6',
        '###### サンプル'
    ].join("\n"));

    this.set('result', result);


};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
