/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

/**
 * @class Ext.util.Obfuscator
 *
 * {Ext_util_Obfuscator:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ encode

    encode: function(src) {

        var table, getNum, getValues;

        getNum = function(n) {

            var nums, values, target, pre, ret;

            nums = [ 0, 1, 2 ];
            values = [
                '+[]',      //  0
                '-~[]',     //  1
                '-~-~[]'    //  2
            ];
            target = n;
            ret = '';

            for(;;) {

                var idx;

                for(;;) {
                    idx = Math.floor( Math.random() * nums.length );
                    if(idx !== pre && target >= nums[idx]) {
                        break;
                    }
                }

                target = target - nums[idx];
                ret += values[idx];

                if(target === 0) {
                    break;
                }

                pre = idx;
            }

            return ret;
        };

        var charAtArray = '', name = '_' + Ext.uid(6);

        charAtArray = [
            'var ' + name + '=[',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74",',
            '"\\x63\\x68\\x61\\x72\\x41\\x74"',
            '];'
            ].join('');

        getValues = function() {

            return {
                'a' : '(!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(1) + ')',
                'b' : '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(2) + ')',
                'c' : '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(5) + ')',
                'd' : '({}.$+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(2) + ')',
                'e' : '({}.$+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(3) + ')',
                'f' : '(!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](+[])',
                'g' : "'\\x67'",
                'h' : "'\\x68'",
                'i' : "'\\x69'",
                'j' : "'\\x6a'",
                'k' : "'\\x6b'",
                'l' : "'\\x6c'",
                'm' : "'\\x6d'",
                'n' : "'\\x6e'",
                'o' : "'\\x6f'",
                'p' : "'\\x70'",
                'q' : "'\\x71'",
                'r' : "'\\x72'",
                's' : "'\\x73'",
                't' : "'\\x74'",
                'u' : "'\\x75'",
                'v' : "'\\x76'",
                'w' : "'\\x77'",
                'x' : "'\\x78'",
                'y' : "'\\x79'",
                'z' : "'\\x7a'",
                'A' : "'\\x41'",
                'B' : "'\\x42'",
                'C' : "'\\x43'",
                'D' : "'\\x44'",
                'E' : "'\\x45'",
                'F' : "'\\x46'",
                'G' : "'\\x47'",
                'H' : "'\\x48'",
                'I' : "'\\x49'",
                'J' : "'\\x4a'",
                'K' : "'\\x4b'",
                'L' : "'\\x4c'",
                'M' : "'\\x4d'",
                'N' : "'\\x4e'",
                'O' : '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) +']](' + getNum(8) + ')',
                'P' : "'\\x50'",
                'Q' : "'\\x51'",
                'R' : "'\\x52'",
                'S' : "'\\x53'",
                'T' : "'\\x54'",
                'U' : "'\\x55'",
                'V' : "'\\x56'",
                'W' : "'\\x57'",
                'X' : "'\\x58'",
                'Y' : "'\\x59'",
                'Z' : "'\\x5a'",
                '@' : "'\\x40'",
                '/' : "'\\x2f'",
                '[' : "'\\x5b'",
                ']' : "'\\x5d'",
                '{' : "'\\x7b'",
                '}' : "'\\x7d'",
                '(' : "'\\x28'",
                ')' : "'\\x29'",
                '*' : "'\\x2a'",
                '+' : "'\\x2b'",
                '=' : "'\\x3d'",
                ',' : "'\\x2c'",
                ':' : "'\\x3a'",
                ';' : "'\\x3b'",
                '|' : "'\\x7c'",
                '?' : "'\\x3f'",
                '!' : "'\\x21'",
                '"' : "'\\x22'",
                '#' : "'\\x23'",
                '$' : "'\\x24'",
                '%' : "'\\x25'",
                '&' : "'\\x26'",
                '^' : "'\\x5e'",
                '~' : "'\\x7e'",
                '`' : "'\\x60'",
                '\'' : "'\\x27'",
                '\\' : "'\\x5c'"
            };
        }

        var ret = '';
        for(var i=0; i<src.length; i++) {
            var values = getValues()
            var c = src[i];

            if(ret.length > 0) {
                ret += '+';
            }

            if(values[c]) {
                ret += values[c];
            } else {
                ret += '\'' + c + '\'';
            }
        }

        var getConstructorStr = function() {

            var str = '';

            // c
            str += '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(5) + ')';

            // o
            str += '+';
            str += '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(1) + ')';

            // n
            str += '+';
            str += '({}.$+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(1) + ')';

            // s
            str += '+';
            str += '(!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(3) + ')';

            // t
            str += '+';
            str += '(!!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](+[])';

            // r
            str += '+';
            str += '(!!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(1) + ')';

            // u
            str += '+';
            str += '({}.$+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](+[])';

            // c
            str += '+';
            str += '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(5) + ')';

            // t
            str += '+';
            str += '(!!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](+[])';

            // o
            str += '+';
            str += '({}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(1) + ')';

            // r
            str += '+';
            str += '(!!{}+"")[' + name + '[' + getNum(Math.floor( Math.random() * 10 )) + ']](' + getNum(1) + ')';

            return str;
        };

        var code = encodeURIComponent(
            (function(s) {
                var a = 53300, b, c, d, e, f, g = -1, h, r = [];

                s = Array(a--).join(' ') + s;
                while(b = s.substr(a, 256)) {
                    for(c = 2; c <= b.length; ++c) {
                        d = s.substring(a - 52275, a + c - 1).lastIndexOf(b.substring(0, c));
                        if (d === -1) {
                            break;
                        }
                        e = d;
                    }
                    if(c === 2 || c === 3 && f === g) {
                        f = g;
                        h = s.charCodeAt(a++);
                        r.push(h >> 8 & 255, h & 255);
                    } else {
                        r.push((e >> 8 & 255) | 65280, e & 255, c - 3);
                        a += c - 1;
                    }
                }
                return String.fromCharCode.apply(0, r);
            })([
                charAtArray,
                "(+[])["+ getConstructorStr() + "][" + getConstructorStr() + "](" + ret + ")();"
            ].join('')));

        var output = 'var _0x5d3c=["' + code + '","\x20","\x6A\x6F\x69\x6E","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x73\x6C\x69\x63\x65","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x6C\x65\x6E\x67\x74\x68"];eval((function (_0x2e11x1){var _0x2e11x2=53300,_0x2e11x3=0,_0x2e11x4,_0x2e11x5,_0x2e11x6,_0x2e11x7,_0x2e11x8,_0x2e11x9,_0x2e11xa=Array(_0x2e11x2--)[_0x5d3c[2]](_0x5d3c[1]);while(_0x2e11x3<_0x2e11x1[_0x5d3c[7]]){_0x2e11x4=_0x2e11x1[_0x5d3c[3]](_0x2e11x3++);if(_0x2e11x4<=255){_0x2e11xa+=String[_0x5d3c[4]]((_0x2e11x4<<8)|_0x2e11x1[_0x5d3c[3]](_0x2e11x3++));} else {_0x2e11x6=((_0x2e11x4&255)<<8)|_0x2e11x1[_0x5d3c[3]](_0x2e11x3++);_0x2e11x7=_0x2e11x6+_0x2e11x1[_0x5d3c[3]](_0x2e11x3++)+2;_0x2e11x9=_0x2e11xa[_0x5d3c[5]](-52275);_0x2e11x8=_0x2e11x9[_0x5d3c[6]](_0x2e11x6,_0x2e11x7);if(_0x2e11x8){while(_0x2e11x9[_0x5d3c[7]]<_0x2e11x7){_0x2e11x9+=_0x2e11x8;} ;_0x2e11xa+=_0x2e11x9[_0x5d3c[6]](_0x2e11x6,_0x2e11x7);} ;} ;} ;return _0x2e11xa[_0x5d3c[5]](_0x2e11x2);} )(decodeURIComponent(_0x5d3c[0])));';

        return output.split("_0x5d3c").join('_0x' + Ext.uid(4))
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
