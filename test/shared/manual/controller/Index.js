/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ My.controller.Index

Ext.define('My.controller.Index', {

    // {{{ extend

    extend: 'Ext.app.Controller',

    // }}}
    // {{{ init

    init: function() {

        this.control({

            '/index.html': function(req, res, next) {

                res.end('Hello World!');

            }

        });

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

