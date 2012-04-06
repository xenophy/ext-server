/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../../index.js');

// }}}
// {{{ describe

describe('Ext.server.Connect.limit', function() {

    var app = Ext.create('Ext.server.Connect');

    app.use(Ext.server.Connect.limit('5kb'));

    app.use(function(req, res){
        res.end('stuff');
    });

    describe('when Content-Length is below', function(){
        it('should bypass limit()', function(done){
            app.request()
            .post('/')
            .set('Content-Length', 500)
            .expect(200, done);
        });
    });

    describe('when Content-Length is too large', function(){
        it('should respond with 413', function(done){
            app.request()
            .post('/')
            .set('Content-Length', 10 * 1024)
            .expect(413, done);
        });
    });

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
