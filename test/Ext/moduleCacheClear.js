/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ requires

require('../../index.js');

// }}}
// {{{ describe

describe('Ext.moduleCacheClear', function() {

    it('モジュールキャッシュをクリアできること', function() {

        var filename = require('path').normalize(__dirname + '/../shared/req1.js');

        var src = [
            'module.exports = {',
            '    foo: "bar"',
            '};'
        ].join('');

        // ファイル書き込み
        require('fs').writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var src = [
            'module.exports = {',
            '    foo: "bar2"',
            '};'
        ].join('');

        // ファイル書き込み
        require('fs').writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var stat = require('fs').statSync(filename);

        Ext.moduleCacheClear(filename, stat.mtime);

        var o = require(filename);

        o.foo.should.equal('bar2');

        require('fs').unlinkSync(filename);

    });

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
