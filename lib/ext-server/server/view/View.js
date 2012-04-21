/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.View

/**
 * @class Ext.server.view.View
 *
 * {Ext_server_view_View:doc-contents}
 */
Ext.define('Ext.server.view.View', {

    // {{{ extend

    extend: 'Ext.app.view.View',

    // }}}
    // {{{ controller

    constructor: function() {

    },

    // }}}
    // {{{ render

    render: function(config, next) {

        console.log(config.config.app.template_exts);

        console.log("View.render");

        /*
         mime = require('mime') //depe




         function invalidRange(res) {
  var body = 'Requested Range Not Satisfiable';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.statusCode = 416;
  res.end(body);
}
         */



        /*
var send = exports.send = function(req, res, next, options){
  options = options || {};
  if (!options.path) throw new Error('path required');

  // setup
  var maxAge = options.maxAge || 0
    , ranges = req.headers.range
    , head = 'HEAD' == req.method
    , get = 'GET' == req.method
    , root = options.root ? normalize(options.root) : null
    , getOnly = options.getOnly
    , fn = options.callback
    , hidden = options.hidden
    , done;

  // replace next() with callback when available
  if (fn) next = fn;

  // ignore non-GET requests
  if (getOnly && !get && !head) return next();

  // parse url
  var url = parse(options.path)
    , path = decodeURIComponent(url.pathname)
    , type;

  // null byte(s)
  if (~path.indexOf('\0')) return next(400);

  // when root is not given, consider .. malicious
  if (!root && ~path.indexOf('..')) return next(403);

  // join / normalize from optional root dir
  path = normalize(join(root, path));

  // malicious path
  if (root && 0 != path.indexOf(root)) return fn
    ? fn(new Error('Forbidden'))
    : next(403);

  // index.html support
  if ('/' == path[path.length - 1]) path += 'index.html';

  // "hidden" file
  if (!hidden && '.' == basename(path)[0]) return next();

  fs.stat(path, function(err, stat){
    // mime type
    type = mime.lookup(path);

    // ignore ENOENT
    if (err) {
      if (fn) return fn(err);
      return 'ENOENT' == err.code
        ? next()
        : next(err);
    // redirect directory in case index.html is present
    } else if (stat.isDirectory()) {
      res.statusCode = 301;
      res.setHeader('Location', url.pathname + '/');
      res.end('Redirecting to ' + url.pathname + '/');
      return;
    }

    var opts = {};

    // we have a Range request
    if (ranges) {
      ranges = utils.parseRange(stat.size, ranges);
      // valid
      if (ranges) {
        // TODO: stream options
        // TODO: multiple support
        opts.start = ranges[0].start;
        opts.end = ranges[0].end;
        res.statusCode = 206;
        res.setHeader('Content-Range', 'bytes '
          + opts.start
          + '-'
          + opts.end
          + '/'
          + stat.size);
      // invalid
      } else {
        return invalidRange(res);
      }
    // stream the entire file
    } else {
      res.setHeader('Content-Length', stat.size);
      if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
      if (!res.getHeader('Last-Modified')) res.setHeader('Last-Modified', stat.mtime.toUTCString());
      if (!res.getHeader('ETag')) res.setHeader('ETag', utils.etag(stat));

      // conditional GET support
      if (utils.conditionalGET(req)) {
        if (!utils.modified(req, res)) {
          return utils.notModified(res);
        }
      }
    }

    // header fields
    if (!res.getHeader('content-type')) {
      var charset = mime.charsets.lookup(type);
      res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
    }
    res.setHeader('Accept-Ranges', 'bytes');

    // transfer
    if (head) return res.end();

    // stream
    var stream = fs.createReadStream(path, opts);
    stream.pipe(res);

    // callback
    if (fn) {
      function callback(err) { done || fn(err); done = true }
      req.on('close', callback);
      req.socket.on('error', callback);
      stream.on('end', callback);
    }
  });
};
         */

        next();

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
