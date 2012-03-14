/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

(function() {

    var fs = require('fs'),
        path = require('path'),
        dirs = [];

    process.argv.forEach(function(val, index, array) {
        if(index > 1) {
            dirs.push(val);
        }
    });

    dirs.forEach(function(dir) {

        var src, dest;

        src = path.normalize(__dirname + '/locale/' + dir);
        dest = path.normalize(__dirname + '/../api/' + dir);








    });

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
