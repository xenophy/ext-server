var path = require('path');
var fs = require('fs');
var fd;
var p1 = '/Users/sunvisor/hoge/fuga/test.md';

    var createFullPath = function createFullPath(fullPath, callback) {
        var parts = path.dirname(path.normalize(fullPath)).split("/"),
            working = '/',
            pathList = [];

        for(var i = 0, max = parts.length; i < max; i++) {
            working = path.join(working, parts[i]);
            
            pathList.push(working);
        }
        
        var recursePathList = function recursePathList(paths) {
            console.log(paths);
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

var f = function(s) {
    if( s.match(/\/$/) ) {
        createFullPath(s + 'dummy.md', function (e) {});
    } else {
        console.log(path.dirname(s));
        createFullPath(s, function(e) {
            console.log(path.basename(s));
            fd = fs.openSync(s, 'w');
            fs.closeSync(fd);
        });
    }
}

f('/Users/sunvisor/foo/bar/baz.md');
