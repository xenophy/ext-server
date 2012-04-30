var path = require('path');
var fs = require('fs');

var mkdirp = function(dir) {
    var parent = path.dirname(dir);

    if(!path.existsSync(parent)) { 
        mkdirp(parent);
    }
    if(!path.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

mkdirp('/Users/sunvisor/test/hoge/fuga');
