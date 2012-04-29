/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * TODO:sourceディレクトリの該当クラスファイルも翻訳
 * TODO:自分のクラス以外の置換処理
 */
(function() {

    var fs = require('fs'),
        path = require('path'),
        markdown = require('node-markdown').Markdown,
        dirs = [],
        trans, ellipsis, strip_tags;

    // {{{ strip_tags

    strip_tags = function(input, allowed) {

        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
    }

    // }}}
    // {{{ createFullPath

    var createFullPath = function createFullPath(fullPath, callback) {
        var parts = path.dirname(path.normalize(fullPath)).split("/"),
            working = '/',
            pathList = [];

        for(var i = 0, max = parts.length; i < max; i++) {
            working = path.join(working, parts[i]);
            
            pathList.push(working);
        }
        
        var recursePathList = function recursePathList(paths) {
            if(0 === paths.length) {
                callback(null);
                return ;
            }
        
            var working = paths.shift();
            
            try {
                path.exists(working, function(exists) {
                    if(!exists) {
                        try {
                            fs.mkdir(working, 0755, function() {
                                recursePathList(paths);
                            });
                        }
                        catch(e) {
                            callback(new Error("Failed to create path: " + working + " with " + e.toString()));
                        }
                    }
                    else {
                        recursePathList(paths);				
                    }
                });
            }
            catch(e) {
                callback(new Error("Invalid path specified: " + working));
            }
        }
        
        if(0 === pathList.length)
            callback(new Error("Path list was empty"));
        else
            recursePathList(pathList);
    }


    ellipsis = function(value, len, word) {

        if(value && value.length > len) {

            if(word) {
                var vs = value.substr(0, len - 2),
                    index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));

                if(index !== -1 && index >= (len - 15)) {
                    return vs.substr(0, index) + "...";
                }
            }

            return value.substr(0, len - 3) + "...";
        }

        return value;
    };

    // }}}
    // {{{ trans

    trans = function(o) {

        var classes, src, dest;

        classes = o.classes || [];
        src = o.src;
        dest = o.dest;

        classes.forEach(function(cls) {

            var file, output, html, js, ptn, destjson, cont;

            // Extruct Json Object
            output = path.normalize(dest + '/output/' + cls + '.js');
            js = fs.readFileSync(output).toString();
            ptn = '^Ext.data.JsonP.' + cls.replace(/\./g, '_') + '\\(';
            js = js.replace(new RegExp(ptn), '');
            ptn = '\\);$';
            js = js.replace(new RegExp(ptn), '');
            destjson = JSON.parse(js);

            // doc.md
            file = path.normalize(src + '/' + cls + '/doc.md');
            ptn = '<p>{' + cls.replace(/\./g, '_') + ':doc-contents}</p>';
            cont = path.existsSync(file) ? markdown(fs.readFileSync(file).toString()): '';
            destjson.html = destjson.html.replace((new RegExp(ptn)), cont);

            var replaceAll = function(expression, org, dest) {
                return expression.split(org).join(dest);
            };

            // Read Locale document file. if not exists then create one.
            readLocale = function(file) {
                if( path.existsSync(file) ) {
                    return fs.readFileSync(file).toString();
                } else {
                    createFullPath(file, function () {
                        var fd = fs.openSync(file, 'w');
                        fs.close(fd);
                    });
                    return '';
                }
            };

            // Repalece desc.md document
            var descExecute = function(type, o) {
                var data, srctag, ptn, long ,short;

                // desc.md
                file = path.normalize(src + '/' + cls + '/' + type + '/' + o.name + '/desc.md');
                srctag = '{' + cls.replace(/\./g, '_') + ':' + o.id.replace(/\-/g, '\\-') + ':desc}';
                try{
                data = readLocale(file);
                } catch(e) {
                    console.log(e);
                    data = '';
                }
                short = markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50));
                long = markdown(data);
                ptn = '(<div class=\'short\'>)' + srctag + '[\n|.]+.* (\.\.\.</div>)';
                destjson.html = destjson.html.replace((new RegExp(ptn)), '$1' + short +'$2');
                ptn = '(>)' + srctag + '(\.\.\.)';
                destjson.html = destjson.html.replace((new RegExp(ptn)), '$1' + short + '$2');
                ptn = '(<p>)' + srctag + '(</p>)';
                destjson.html = destjson.html.replace((new RegExp(ptn)), '$1' + long + '$2');
            };

            // Replace method document.
            var methodExecute = function(o) {

                var data, srctag, ptn, long ,short, p;

                // desc.md
                descExecute('method', o);

                // return.md
                try {
                    file = path.normalize(src + '/' + cls + '/method/' + o.name + '/return.md');
                    data = readLocale(file);
                    ptn = '(<p>){' + cls.replace(/\./g, '_') + ':' + o.id + ':return}(</p>)';
                    destjson.html = destjson.html.replace((new RegExp(ptn)), '$1' + markdown(data) + '$2');
                } catch(e) {
                    console.log(e);
                }

                // params
                try {
                    p = path.normalize(src + '/' + cls + '/method/' + o.name + '/param/');
                    createFullPath(p + 'dummy.md', function () {});
                    params = fs.readdirSync(p);

                    params.forEach(function(p) {
                        file = path.normalize(src + '/' + cls + '/method/' + o.name + '/param/' + p);
                        data = readLocale(file);
                        ptn = '{' + cls.replace(/\./g, '_') + ':' + o.id + ':param_' + p.replace('\.md', '') + '}';
                        destjson.html = destjson.html.replace((new RegExp(ptn)), data);
                    });
                } catch(e) {
                    console.log(e);
                }

            };

            // method
            destjson.members.method.forEach(methodExecute);
            destjson.statics.method.forEach(methodExecute);

            // property
            destjson.members.property.forEach(function(o) {
                var data, ptn;

                descExecute('property', o);
            });

            // config
            destjson.members.cfg.forEach(function(o) {
                var data, ptn;

                descExecute('config', o);
            });

            fs.writeFileSync(output, 'Ext.data.JsonP.' + cls.replace(/\./g, '_') + '(' +JSON.stringify(destjson) + ');', 'utf8');
        });

    };

    // }}}

    process.argv.forEach(function(val, index, array) {
        if(index > 1) {
            dirs.push(val);
        }
    });

    dirs.forEach(function(dir) {

        var src, dest, classes;

        src = path.normalize(__dirname + '/locale/' + dir);
        dest = path.normalize(__dirname + '/../api/' + dir);

//        try {

            classes = fs.readdirSync(src);

            trans({
                src: src,
                dest: dest,
                classes: classes
            });

//        } catch(e) {
//
//            console.log(e);
//
//        }

    });

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
