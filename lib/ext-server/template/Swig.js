/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.template.Swig

/**
 * @class Ext.template.Swig
 *
 * {Ext_template_Swig:doc-contents}
 */
Ext.define('Ext.template.Swig', {

    // {{{ extend

    extend: 'Ext.template.Template',

    // }}}
    // {{{ render

    render: function(source, data, options) {

        Ext.$dependencies.swig.init({cache: false, autoescape: false});

        return Ext.$dependencies.swig.compile(source, options)(data).toString();

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
