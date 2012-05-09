/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * TODO:sourceディレクトリの該当クラスファイルも翻訳
 * DONE:自分のクラス以外の置換処理
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
    
    // {{{ mkdirp

    var mkdirp = function(dir) {
        var parent = path.dirname(dir);

        if(!path.existsSync(parent)) { 
            mkdirp(parent);
        }
        if(!path.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    };

    // }}}
    // {{{ htmlReplace

    htmlReplace = function(v, ptn, dest, p1, p2) {
        var regx = new RegExp(ptn),
            dest = dest.replace(/\$/g, '$$$$');

        return v.replace(regx, p1 + dest + p2);
    }


    // }}}
    // {{{ ellipsis

    ellipsis = function(value, len, word) {

        if(value && value.length > len) {

            if(word) {
                var vs = value.substr(0, len - 2), index;

                index = Math.max(
                    vs.lastIndexOf(' '),
                    vs.lastIndexOf('.'),
                    vs.lastIndexOf('!'),
                    vs.lastIndexOf('?')
                );

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

            var file, output, html, js, ptn, destjson, cont, fd;

            // Extract Json Object
            output = path.normalize(dest + '/output/' + cls + '.js');
            js = fs.readFileSync(output).toString();
            ptn = '^Ext.data.JsonP.' + cls.replace(/\./g, '_') + '\\(';
            js = js.replace(new RegExp(ptn), '');
            ptn = '\\);$';
            js = js.replace(new RegExp(ptn), '');
            destjson = JSON.parse(js);

            // doc.md
            file = path.normalize(src + '/' + cls + '/doc.md');
            cont = path.existsSync(file) ? markdown(fs.readFileSync(file).toString()): '';

            destjson.html = htmlReplace(
                destjson.html,
                '(<p>){' + cls.replace(/\./g, '_') + ':doc-contents}(</p>)',
                cont, '$1', '$2'
            );

            var replaceAll = function(expression, org, dest) {
                return expression.split(org).join(dest);
            };

            //{{{ readLocale
            
            // Read Locale document file. if not exists then create one.
            readLocale = function(file) {
                if( path.existsSync(file) ) {
                    return fs.readFileSync(file).toString();
                } else {
                    mkdirp(path.dirname(file));
                    fd = fs.openSync(file, 'w');
                    fs.close(fd);
                    return '';
                }
            };

            //}}}
            //{{{ deprecatedExecute

            var deprecatedExecute = function(type, o, id) {
                file = path.normalize(src + '/' + o.owner + '/' + type + '/' + o.name + '/deprecated.md');
                try{
                    data = readLocale(file);
                } catch(e) {
                    console.log(e);
                    data = '';
                }
                srctag = '{' + cls.replace(/\./g, '_') + ':' + id + ':deprecated}';
                destjson.html = destjson.html.replace(
                    srctag,
                    markdown(data)
                );
            };

            //}}}
            //{{{ descExecute

            // Repalece desc.md document
            var descExecute = function(type, o) {
                var data, srctag, long ,short,
                    id = type + '\-' + o.name;

                // desc.md
                file = path.normalize(src + '/' + o.owner + '/' + type + '/' + o.name + '/desc.md');
                srctag = '{' + o.owner.replace(/\./g, '_') + ':' + id + ':desc}';
                try{
                    data = readLocale(file);
                } catch(e) {
                    console.log(e);
                    data = '';
                }
                short = markdown(ellipsis(strip_tags(data).split('    ')[0].split("\n")[0], 50));
                long = markdown(data);

                destjson.html = htmlReplace(
                    destjson.html,
                    '(<div class=\'short\'>)' + srctag + '[\n|.]+.* (\.\.\.</div>)',
                    short, '$1', '$2'
                );

                destjson.html = htmlReplace(
                    destjson.html,
                    '(>)' + srctag + '(\.\.\.)',
                    short, '$1', '$2'
                );
                
                destjson.html = htmlReplace(
                    destjson.html,
                    '(<p>)' + srctag + '(</p>)',
                    long, '$1', '$2'
                );
                if( o.meta.deprecated ){
                    deprecatedExecute(type, o, id);
                }
            };
            //}}}
            //{{{ methodExecute

            // Replace method document.
            var methodExecute = function(o) {

                var data, srctag, ptn, long ,short, p,
                    id = 'method\-' + o.name;

                // desc.md
                descExecute('method', o);

                // return.md
                try {
                    file = path.normalize(
                        src + '/' + o.owner + '/method/' + o.name + '/return.md'
                    );
                    data = readLocale(file);
                    destjson.html = htmlReplace(
                        destjson.html,
                        '(<p>){' + o.owner.replace(/\./g, '_') + ':' + id + ':return}(</p>)',
                        markdown(data), '$1', '$2'
                    );
                } catch(e) {
                    console.log(e);
                }

                // params
                try {
                    p = path.normalize(
                        src + '/' + o.owner + '/method/' + o.name + '/param/'
                    );
                    mkdirp(p);
                    params = fs.readdirSync(p);

                    params.forEach(function(p) {
                        file = path.normalize(
                            src + '/' + o.owner + '/method/' + o.name + '/param/' + p
                        );
                        ptn = '(<p>){' + o.owner.replace(/\./g, '_') + ':' + id +
                                ':param_' + p.replace('\.md', '') + '}(</p>)';
                        data = readLocale(file);
                        destjson.html = htmlReplace(
                            destjson.html,
                            ptn, markdown(data), '$1', '$2'
                        );
                    });
                } catch(e) {
                    console.log(e);
                }
                

            };
            // }}}

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

                descExecute('cfg', o);
            });

            if( o.dir === 'ja' ){
                destjson.html = destjson.html.replace(/Defaults to:/g, 'デフォルトは:');
                destjson.html = destjson.html.replace(/This method has been <strong>deprecated<\/strong>/g, 'このメソッドは<strong>非推奨</strong>です');
            }

            fs.writeFileSync(
                output,
                'Ext.data.JsonP.' + cls.replace(/\./g, '_') + '(' +
                    JSON.stringify(destjson) + ');',
                'utf8'
            );
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
                classes: classes,
                dir: dir
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
