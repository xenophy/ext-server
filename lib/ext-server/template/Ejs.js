/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.template.Ejs

/**
 * @class Ext.template.Ejs
 *
 * {Ext_template_Ejs:doc-contents}
 */
Ext.define('Ext.template.Ejs', {

    // {{{ extend

    extend: 'Ext.template.Template',

    // }}}
    // {{{ render

    render: function(source, data, options) {

        var ejs = Ext.$dependencies.ejs;

        Ext.apply(ejs, options);

        return ejs.render(source, data);
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
