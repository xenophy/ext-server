/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.util.Do

/**
 * @class Ext.util.Do
 *
 * {Ext_util_Format:doc-contents}
 *
 * @singleton
 */
(function() {

    var Do = Ext.util.Do = Ext.$dependencies.async;

    Ext.apply(Ext, {
        doSeries: Do.series,
        doParallel: Do.parallel,
        doWaterfall: Do.waterfall
    });

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
