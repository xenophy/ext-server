/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.Request

/**
 * @class Ext.server.Request
 *
 * {Ext_server_Request:doc-contents}
 */
Ext.define('Ext.server.Request', {

    // {{{ constructor

    constructor: function(o) {

        var me, http, app;

        me = this;
        http = require('http');

        Ext.apply(me, {
            data: [],
            header: {},
            app: o.app
        });

        if(!me.server) {
            me.server = http.Server(o.app);
            me.server.listen(0, function() {
                me.addr = me.server.address();
                me.listening = true;
            });
        }

    },

    // }}}
    // {{{ request

    request: function(method, path) {

        Ext.apply(this, {
            method: method,
            path: path
        });

        return this;
    },

    // }}}
    // {{{ get

    get: function(path) {
        return this.request('get', path);
    },

    // }}}
    // {{{ post

    post: function(path) {
        return this.request('post', path);
    },

    // }}}
    // {{{ put

    put: function(path) {
        return this.request('put', path);
    },

    // }}}
    // {{{ delete

    delete: function(path) {
        return this.request('delete', path);
    },

    // }}}
    // {{{ head

    head: function(path) {
        return this.request('head', path);
    },

    // }}}
    // {{{ set

    set: function(field, val) {
        this.header[field] = val;
        return this;
    },

    // }}}
    // {{{ write

    write: function(data) {
        this.data.push(data);
        return this;
    },

    // }}}
    // {{{ expect

    expect: function(body, fn) {

        var args = arguments;

        this.end(function(res) {

            switch (args.length) {

                case 3:

                    res.headers.should.have.property(body.toLowerCase(), args[1]);
                    args[2]();

                break;

                default:

                    if('number' == typeof body) {
                        res.statusCode.should.equal(body);
                    } else {
                        res.body.should.equal(body);
                    }

                    fn();
            }

        });

    },

    // }}}
    // {{{ end

    end: function(fn) {

        var me = this, http = require('http');

        if(this.listening) {

            var req = http.request({
                method: this.method,
                port: this.addr.port,
                host: this.addr.address,
                path: this.path,
                headers: this.header
            });

            this.data.forEach(function(chunk) {
                req.write(chunk);
            });

            req.on('response', function(res) {
                var buf = '';
                res.setEncoding('utf8');
                res.on('data', function(chunk){ buf += chunk });
                res.on('end', function(){
                    res.body = buf;
                    fn(res);
                });
            });

            req.end();

        } else {

            this.server.on('listening', function() {
                me.end(fn);
            });

        }

        return this;

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
