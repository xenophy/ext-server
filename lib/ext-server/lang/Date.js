/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Date

/**
 * @class Ext.Date
 * 日付を扱うのに便利な、静的メソッドのセット。
 * Ext.Dateを読み込むと、便宜上すべてのメソッドとプロパティがコピーされることに注意してください。
 * 
 * 日付のパースと構文の書式に関しては、PHPのdate()関数に準拠しています。
 * サポートするフォーマットもPHP版と同等です。
 * 
 * 現在サポートされているすべての形式は以下の通りです: 
<pre class="">
記号	説明	例
------	-----------------------------------------------------------------------	-----------------------
  d     日。２桁の数字で、１桁の場合は左に0が付きます。                             01 から 31
  D     曜日。３文字の短いテキスト形式。                                            Mon から Sun
  j     日。dと違い、１桁の場合も先頭に0は付きません。                              1 から 31
  l     曜日。フルスペル形式。                                                      Sunday から Saturday
  N     ISO-8601 形式の、曜日の数値表現。                                           1（月曜日）から 7（日曜日）
  S     英語形式の序数を表すサフィックス。2 文字。                                  st, nd, rd または th。
                                                                                    jと一緒に使用することができる。
  w     曜日。数値で表現した曜日。                                                  0 (日曜)から 6 (土曜)
  z     年間の通算日。数字。(ゼロから開始)	0 から 364 (閏年で365)
  W     ISO-8601 月曜日に始まる年単位の週番号。２桁の数字で、１桁の場合は左に0が
        付きます。                                                                  01 から 53(例: 42は年の第 42 週目)
  F     月。フルスペルの文字。                                                      January から December
  m     月。２桁の数字で、１桁の場合は左に0が付きます。                             01 から 12
  M     月。３文字の短いテキスト形式。                                              Jan から Dec
  n     月。mと違い、１桁の場合も先頭に0は付きません。                              1 から 12
  t     指定した月の日数。                                                          28 から 31
  L     閏年であるかどうか。                                                        1なら閏年。0なら閏年ではない。
  o     ISO-8601 形式の年。これは Y ほぼ同じだが、ISO 週番号（W）が前年あるいは
        翌年に属する場合がある点で異なる。                                          例: 1998 あるいは 2004
  Y     年。4 桁の数字。                                                            例: 1999 または 2003
  y     年。2 桁の数字。                                                            例: 99 または 03
  a     午前または午後（小文字）                                                    am または pm
  A     午前または午後（大文字）                                                    AM または PM
  g     時。12時間単位。hと違い、１桁の場合も先頭に0は付きません。                  1 から 12
  G     時。24時間単位。Hと違い、１桁の場合も先頭に0は付きません。                  0 から 23
  h     時。12 時間単位。２桁の数字で、１桁の場合は左に0が付きます。                01 から 12
  H     時。24 時間単位。２桁の数字で、１桁の場合は左に0が付きます。                00 から 23
  i     分。２桁の数字で、１桁の場合は左に0が付きます。                             00 から 59
  s     秒。２桁の数字で、１桁の場合は左に0が付きます。                             00 から 59
  u     ミリ秒	                                                                    例:
                                                                                    001 (i.e. 0.001s) または
                                                                                    100 (i.e. 0.100s) または
                                                                                    999 (i.e. 0.999s) または
                                                                                    999876543210 (i.e. 0.999876543210s)
  O     グリニッジ標準時 (GMT) との時差                                             例: +1030
  P     グリニッジ標準時 (GMT) との時差。時間と分をコロンで区切った形式             例: -08:00
  T     タイムゾーンの略称                                                          例: EST, MDT, PDT ...
  Z     タイムゾーンのオフセット秒数。UTC の西側のタイムゾーン用のオフセット
        は常に負です。そして、 UTC の東側のオフセットは常に正です。                 -43200 から 50400
  c     ISO 8601 日付	2004-02-12T15:19:21+00:00
  U     Unix Epoch (1970 年 1 月 1 日 0 時 0 分 0 秒) からの秒数                    1193432466 から -2138434463
  MS    Microsoft AJAX serialized dates                                             \/Date(1238606590509)\/ 
                                                                                   (i.e. UTC milliseconds since epoch)
                                                                                   または
                                                                                   \/Date(1238606590509+0800)\/
</pre>
 *
 * 使用例: (注意: フォーマット記号と同じ文字列を記述したい場合、'¥'を付けてエスケープする必要があります)
 * <pre><code>
// Sample date:
// 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'

var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
console.log(Ext.Date.format(dt, 'Y-m-d'));                          // 2007-01-10
console.log(Ext.Date.format(dt, 'F j, Y, g:i a'));                  // January 10, 2007, 3:05 pm
console.log(Ext.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A')); // Wednesday, the 10th of January 2007 03:05:01 PM

</code></pre>
 * 役立つ標準の日付と時刻のパターンです。
 * これらはExt.Dateのソースの一部ではありません。
 * ですが、Ext.Dateを読み込んだ後で、スクリプトコードに以下のコードをコピーするだけで
 * グローバルのDateオブジェクトでも利用可能になります。
 * 必要に応じてパターンを追加・削除してください。
 * <pre><code>
Ext.Date.patterns = {
    ISO8601Long:"Y-m-d H:i:s",
    ISO8601Short:"Y-m-d",
    ShortDate: "n/j/Y",
    LongDate: "l, F d, Y",
    FullDateTime: "l, F d, Y g:i:s A",
    MonthDay: "F d",
    ShortTime: "g:i A",
    LongTime: "g:i:s A",
    SortableDateTime: "Y-m-d\\TH:i:s",
    UniversalSortableDateTime: "Y-m-d H:i:sO",
    YearMonth: "F, Y"
};
</code></pre>
 *
 * Example usage:
 * <pre><code>
var dt = new Date();
console.log(Ext.Date.format(dt, Ext.Date.patterns.ShortDate));
</code></pre>
 *
 * カスタムフォーマットは、開発者によって専門的な形式と構文解析機能の両方が提供されるかもしれません。
 * これらの機能はparseFunctionsとformatFunctionsに格納されます。
 *
 * @singleton
 */
module.exports = {

    // {{{ DAY

    /**
     * @property DAY
     */
    DAY: "d",

    // }}}
    // {{{ dayNames

    /**
     * @property dayNames
     */
    dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],

    // }}}
    // {{{ defaultFormat

    /**
     * @property defaultFormat
     */
    defaultFormat: "m/d/Y",

    // }}}
    // {{{ defaults

    /**
     * @property defaults
     */
    defaults: {},

    // }}}
    // {{{ formatCodes

    /**
     * @property
     */
    formatCodes: {
        d: "Ext.String.leftPad(this.getDate(), 2, '0')",
        D: "Ext.Date.getShortDayName(this.getDay())",
        j: "this.getDate()",
        l: "Ext.Date.dayNames[this.getDay()]",
        N: "(this.getDay() ? this.getDay() : 7)",
        S: "Ext.Date.getSuffix(this)",
        w: "this.getDay()",
        z: "Ext.Date.getDayOfYear(this)",
        W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(this), 2, '0')",
        F: "Ext.Date.monthNames[this.getMonth()]",
        m: "Ext.String.leftPad(this.getMonth() + 1, 2, '0')",
        M: "Ext.Date.getShortMonthName(this.getMonth())",
        n: "(this.getMonth() + 1)",
        t: "Ext.Date.getDaysInMonth(this)",
        L: "(Ext.Date.isLeapYear(this) ? 1 : 0)",
        o: "(this.getFullYear() + (Ext.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))",
        Y: "Ext.String.leftPad(this.getFullYear(), 4, '0')",
        y: "('' + this.getFullYear()).substring(2, 4)",
        a: "(this.getHours() < 12 ? 'am' : 'pm')",
        A: "(this.getHours() < 12 ? 'AM' : 'PM')",
        g: "((this.getHours() % 12) ? this.getHours() % 12 : 12)",
        G: "this.getHours()",
        h: "Ext.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",
        H: "Ext.String.leftPad(this.getHours(), 2, '0')",
        i: "Ext.String.leftPad(this.getMinutes(), 2, '0')",
        s: "Ext.String.leftPad(this.getSeconds(), 2, '0')",
        u: "Ext.String.leftPad(this.getMilliseconds(), 3, '0')",
        O: "Ext.Date.getGMTOffset(this)",
        P: "Ext.Date.getGMTOffset(this, true)",
        T: "Ext.Date.getTimezone(this)",
        Z: "(this.getTimezoneOffset() * -60)",

        c: function() {
            for(var c = "Y-m-dTH:i:sP", code = [], i = 0, l = c.length; i < l; ++i) {
                var e = c.charAt(i);
                code.push(e == "T" ? "'T'" : Ext.Date.getFormatCode(e));
            }
            return code.join(" + ");
        },

        U: "Math.round(this.getTime() / 1000)"
    },

    // }}}
    // {{{ formatFunctions

    /**
     * @property
     */
    formatFunctions: {
        "MS": function() {
            return '\\/Date(' + this.getTime() + ')\\/';
        }
    },

    // }}}
    // {{{ HOUR

    /**
     * @property HOUR
     */
    HOUR: "h",

    // }}}
    // {{{ MILLI

    /**
     * @property MILLI
     */
    MILLI: "ms",

    // }}}
    // {{{ MINUTE

    /**
     * @property MINUTE
     */
    MINUTE: "mi",

    // }}}
    // {{{ MONTH

    /**
     * @property MONTH
     */
    MONTH: "mo",

    // }}}
    // {{{ monthNames

    /**
     * @property monthNames
     */
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],

    // }}}
    // {{{ monthNames

    /**
     * @property monthNumbers
     */
    monthNames: {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
    },

    // }}}
    // {{{ parseRegexes

    /**
     * @property parseRegexes
     */
    parseRegexes: [],

    // }}}
    // {{{ SECOND

    /**
     * @property SECOND
     */
    SECOND: "s",

    // }}}
    // {{{ useStrict

    /**
     * @property useStrict
     */
    useStrict: false,

    // }}}
    // {{{ y2kYear

    /**
     * @property y2kYear
     */
    y2kYear: 50,

    // }}}
    // {{{ YEAR

    /**
     * @property YEAR
     */
    YEAR: "y",

    // }}}
    // {{{ $xf

    /**
     * @private
     */
    $xf: function(format) {

        var args = Array.prototype.slice.call(arguments, 1);

        return format.replace(/\{(\d+)\}/g, function(m, i) {
            return args[i];
        });
    },

    // }}}
    // {{{ add

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    add: function(date, interval, value) {

        var d = Ext.Date.clone(date),
            Date = Ext.Date;

        if(!interval || value === 0) {
            return d;
        }

        switch(interval.toLowerCase()) {

            case Ext.Date.MILLI:
                d.setMilliseconds(d.getMilliseconds() + value);
            break;

            case Ext.Date.SECOND:
                d.setSeconds(d.getSeconds() + value);
            break;

            case Ext.Date.MINUTE:
                d.setMinutes(d.getMinutes() + value);
            break;

            case Ext.Date.HOUR:
                d.setHours(d.getHours() + value);
            break;

            case Ext.Date.DAY:
                d.setDate(d.getDate() + value);
            break;

            case Ext.Date.MONTH:
                var day = date.getDate();

                if(day > 28) {
                    day = Math.min(
                        day,
                        Ext.Date.getLastDateOfMonth(
                            Ext.Date.add(
                                Ext.Date.getFirstDateOfMonth(date),
                                'mo',
                                value
                            )
                        ).getDate()
                    );
                }

                d.setDate(day);
                d.setMonth(date.getMonth() + value);
                break;

            case Ext.Date.YEAR:
                d.setFullYear(date.getFullYear() + value);
            break;
        }

        return d;
    },

    // }}}
    // {{{ between

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    between: function(date, start, end) {

        var t = date.getTime();

        return start.getTime() <= t && t <= end.getTime();
    },

    // }}}
    // {{{ clearTime

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    clearTime: function(date, clone) {

        if(clone) {
            return Ext.Date.clearTime(Ext.Date.clone(date));
        }

        var d = date.getDate();

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        //#JSCOVERAGE_IF 1
        /*
         if(date.getDate() != d) {

             for (var hr = 1, c = Ext.Date.add(date, Ext.Date.HOUR, hr); c.getDate() != d; hr++, c = Ext.Date.add(date, Ext.Date.HOUR, hr));

             date.setDate(d);
             date.setHours(c.getHours());

         }
        */
        //#JSCOVERAGE_ENDIF

        return date;
    },

    // }}}
    // {{{ clone

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    clone: function(date) {
        return new Date(date.getTime());
    },

    // }}}
    // {{{ createFormat

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createFormat: function(format) {

        var code = [],
            special = false,
            ch = '';

        for(var i = 0; i < format.length; ++i) {

            ch = format.charAt(i);

            if(!special && ch == "\\") {

                special = true;

            } else if(special) {

                special = false;
                code.push("'" + Ext.String.escape(ch) + "'");

            } else {

                code.push(Ext.Date.getFormatCode(ch));
            }
        }

        Ext.Date.formatFunctions[format] = Ext.functionFactory("return " + code.join('+'));

    },

    // }}}
    // {{{ createParser

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    createParser: (function() {

        var code = [
            "var dt, y, m, d, h, i, s, ms, o, z, zz, u, v,",
            "def = Ext.Date.defaults,",
            "results = String(input).match(Ext.Date.parseRegexes[{0}]);",

            "if(results){",

                "{1}",

                "if(u != null){",
                    "v = new Date(u * 1000);",
                "}else{",

                    "dt = Ext.Date.clearTime(new Date);",
                    "y = Ext.Number.from(y, Ext.Number.from(def.y, dt.getFullYear()));",
                    "m = Ext.Number.from(m, Ext.Number.from(def.m - 1, dt.getMonth()));",
                    "d = Ext.Number.from(d, Ext.Number.from(def.d, dt.getDate()));",
                    "h  = Ext.Number.from(h, Ext.Number.from(def.h, dt.getHours()));",
                    "i  = Ext.Number.from(i, Ext.Number.from(def.i, dt.getMinutes()));",
                    "s  = Ext.Number.from(s, Ext.Number.from(def.s, dt.getSeconds()));",
                    "ms = Ext.Number.from(ms, Ext.Number.from(def.ms, dt.getMilliseconds()));",

                "if(z >= 0 && y >= 0) {",

                    "v = Ext.Date.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);",
                    "v = !strict? v : (strict === true && (z <= 364 || (Ext.Date.isLeapYear(v) && z <= 365))? Ext.Date.add(v, Ext.Date.DAY, z) : null);",

                "} else if(strict === true && !Ext.Date.isValid(y, m + 1, d, h, i, s, ms)){",

                    "v = null;",

                "} else {",

                    "v = Ext.Date.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);",

                "}",
            "}",
        "}",

        "if(v){",
            "if(zz != null){",

                "v = Ext.Date.add(v, Ext.Date.SECOND, -v.getTimezoneOffset() * 60 - zz);",

            "} else if(o) {",

                "v = Ext.Date.add(v, Ext.Date.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",

            "}",
        "}",

        "return v;"

        ].join('\n');

        return function(format) {

            var me = this;
            var regexNum = Ext.Date.parseRegexes.length,
                currentGroup = 1,
                calc = [],
                regex = [],
                special = false,
                ch = "";

            for(var i = 0; i < format.length; ++i) {

                ch = format.charAt(i);

                if(!special && ch == "\\") {

                    special = true;

                } else if(special) {

                    special = false;
                    regex.push(Ext.String.escape(ch));

                } else {

                    var obj = Ext.Date.formatCodeToRegex(ch, currentGroup);

                    currentGroup += obj.g;

                    regex.push(obj.s);

                    if(obj.g && obj.c) {

                        calc.push(obj.c);

                    }
                }
            }

            Ext.Date.parseRegexes[regexNum] = new RegExp("^" + regex.join('') + "$", 'i');
            Ext.Date.parseFunctions[format] = Ext.functionFactory("input", "strict", me.$xf(code, regexNum, calc.join('')));
        };

    })(),

    // }}}
    // {{{ dateFormat

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    dateFormat: function(date, format) {
        return Ext.Date.format(date, format);
    },

    // }}}
    // {{{ format

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    format: function(date, format) {

        if(Ext.Date.formatFunctions[format] == null) {
            Ext.Date.createFormat(format);
        }

        var result = Ext.Date.formatFunctions[format].call(date);

        return result + '';
    },

    // }}}
    // {{{ formatCodeToRegex

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    formatCodeToRegex: function(character, currentGroup) {

        var me = this;
        var p = Ext.Date.parseCodes[character];

        if(p) {
            p = typeof p == 'function'? p() : p;
            Ext.Date.parseCodes[character] = p;
        }

        return p ? Ext.applyIf({
            c: p.c ? me.$xf(p.c, currentGroup || "{0}") : p.c
        }, p) : {
            g: 0,
            c: null,
            s: Ext.String.escapeRegex(character)
        };
    },

    // }}}
    // {{{ formatContainsDateInfo

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    formatContainsDateInfo: (function(){

        var stripEscapeRe = /(\\.)/g, dateInfoRe = /([djzmnYycU]|MS)/;

        return function(format) {
            return dateInfoRe.test(format.replace(stripEscapeRe, ''));
        };

    })(),

    // }}}
    // {{{ formatContainsHourInfo

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    formatContainsHourInfo: (function(){

        var stripEscapeRe = /(\\.)/g, hourInfoRe = /([gGhHisucUOPZ]|MS)/;

        return function(format) {
            return hourInfoRe.test(format.replace(stripEscapeRe, ''));
        };

    })(),

    // }}}
    // {{{ getDayOfYear

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    formatCodes: function(date) {

        var num = 0,
            d = Ext.Date.clone(date),
            m = date.getMonth(),
            i;

        for(i = 0, d.setDate(1), d.setMonth(0); i < m; d.setMonth(++i)) {
            num += Ext.Date.getDaysInMonth(d);
        }

        return num + date.getDate() - 1;
    },

    // }}}
    // {{{ getDaysInMonth

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getDaysInMonth: (function() {

        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        return function(date) {
            var m = date.getMonth();

            return m == 1 && Ext.Date.isLeapYear(date) ? 29 : daysInMonth[m];
        };
    })(),

    // }}}
    // {{{ getElapsed

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getElapsed: function(dateA, dateB) {
        return Math.abs(dateA - (dateB || new Date()));
    },

    // }}}
    // {{{ getFirstDateOfMonth

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getFirstDateOfMonth: function(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    // }}}
    // {{{ getFirstDayOfMonth

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getFirstDayOfMonth: function(date) {

        var day = (date.getDay() - (date.getDate() - 1)) % 7;

        return (day < 0) ? (day + 7) : day;
    },

    // }}}
    // {{{ getFormatCode

    getFormatCode:function(character) {

        var f = Ext.Date.formatCodes[character];

        if(f) {
            f = typeof f == 'function'? f() : f;
            Ext.Date.formatCodes[character] = f;
        }

        return f || ("'" + Ext.String.escape(character) + "'");
    },

    // }}}
    // {{{ getGMTOffset

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getGMTOffset: function(date, colon) {

        var offset = date.getTimezoneOffset();

        return (offset > 0 ? "-" : "+")
                + Ext.String.leftPad(Math.floor(Math.abs(offset) / 60), 2, "0")
                + (colon ? ":" : "")
                + Ext.String.leftPad(Math.abs(offset % 60), 2, "0");
    },

    // }}}
    // {{{ getLastDateOfMonth

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getLastDateOfMonth: function(date) {
        return new Date(date.getFullYear(), date.getMonth(), Ext.Date.getDaysInMonth(date));
    },

    // }}}
    // {{{ getLastDayOfMonth

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getLastDayOfMonth: function(date) {
        return Ext.Date.getLastDateOfMonth(date).getDay();
    },

    // }}}
    // {{{ getMonthNumber

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getMonthNumber: function(name) {
        return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
    },

    // }}}
    // {{{ getShortDayName

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getShortDayName: function(day) {
        return Ext.Date.dayNames[day].substring(0, 3);
    },

    // }}}
    // {{{ getShortMonthName

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getShortMonthName: function(month) {
        return Ext.Date.monthNames[month].substring(0, 3);
    },

    // }}}
    // {{{ getSuffix

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getSuffix: function(date) {

        switch(date.getDate()) {
            case 1:
            case 21:
            case 31:
                return "st";
            case 2:
            case 22:
                return "nd";
            case 3:
            case 23:
                return "rd";
            default:
                return "th";
        }

    },

    // }}}
    // {{{ getTimezone

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getTimezone: function(date) {
        return date.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "");
    },

    // }}}
    // {{{ getWeekOfYear

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    getWeekOfYear: (function() {

        var ms1d = 864e5, ms7d = 7 * ms1d;

        return function(date) {

            var DC3 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d,
                AWN = Math.floor(DC3 / 7), // an Absolute Week Number
                Wyr = new Date(AWN * ms7d).getUTCFullYear();

            return AWN - Math.floor(Date.UTC(Wyr, 0, 7) / ms7d) + 1;
        };
    })(),

    // }}}
    // {{{ isDST

    /**
     * @method isDST
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    isDST: function(date) {
        return new Date(date.getFullYear(), 0, 1).getTimezoneOffset() != date.getTimezoneOffset();
    },

    // }}}
    // {{{ isLeapYear

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    isLeapYear: function(date) {

        var year = date.getFullYear();

        return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
    },

    // }}}
    // {{{ isValid

    /**
     * @method isValid
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    isValid: function(y, m, d, h, i, s, ms) {

        h = h || 0;
        i = i || 0;
        s = s || 0;
        ms = ms || 0;

        var dt = Ext.Date.add(new Date(y < 100 ? 100 : y, m - 1, d, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);

        return y == dt.getFullYear() &&
                m == dt.getMonth() + 1 &&
                d == dt.getDate() &&
                h == dt.getHours() &&
                i == dt.getMinutes() &&
                s == dt.getSeconds() &&
                ms == dt.getMilliseconds();
    },

    // }}}
    // {{{ parse

    /**
     * @method parse
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    parse: function(input, format, strict) {

        var p = Ext.Date.parseFunctions;

        if(p[format] == null) {
            Ext.Date.createParser(format);
        }

        return p[format](input, Ext.isDefined(strict) ? strict : Ext.Date.useStrict);
    },

    // }}}
    // {{{ parseCodes

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    parseCodes: {

        d: {
            g: 1,
            c: "d = parseInt(results[{0}], 10);\n",
            s: "(\\d{2})"
        },

        j: {
            g:1,
            c:"d = parseInt(results[{0}], 10);\n",
            s:"(\\d{1,2})"
        },

        D: function() {

            for(var a = [], i = 0; i < 7; a.push(Ext.Date.getShortDayName(i)), ++i);

            return {
                g: 0,
                c: null,
                s: "(?:" + a.join("|") +")"
            };
        },

        l: function() {

            return {
                g: 0,
                c: null,
                s: "(?:" + Ext.Date.dayNames.join("|") + ")"
            };
        },

        N: {
            g: 0,
            c: null,
            s: "[1-7]"
        },

        S: {
            g: 0,
            c: null,
            s: "(?:st|nd|rd|th)"
        },

        w: {
            g: 0,
            c: null,
            s: "[0-6]"
        },

        z: {
            g: 1,
            c: "z = parseInt(results[{0}], 10);\n",
            s: "(\\d{1,3})"
        },

        W: {
            g: 0,
            c: null,
            s: "(?:\\d{2})"
        },

        F: function() {

            return {
                g: 1,
                c: "m = parseInt(Ext.Date.getMonthNumber(results[{0}]), 10);\n",
                s: "(" + Ext.Date.monthNames.join("|") + ")"
            };

        },

        M: function() {

            for(var a = [], i = 0; i < 12; a.push(Ext.Date.getShortMonthName(i)), ++i);

            return Ext.applyIf({
                s:"(" + a.join("|") + ")"
            }, Ext.Date.formatCodeToRegex("F"));
        },

        m: {
            g: 1,
            c: "m = parseInt(results[{0}], 10) - 1;\n",
            s: "(\\d{2})"
        },

        n: {
            g: 1,
            c: "m = parseInt(results[{0}], 10) - 1;\n",
            s: "(\\d{1,2})"
        },

        t: {
            g: 0,
            c: null,
            s: "(?:\\d{2})"
        },

        L: {
            g: 0,
            c: null,
            s: "(?:1|0)"
        },

        o: function() {
            return Ext.Date.formatCodeToRegex("Y");
        },

        Y: {
            g: 1,
            c: "y = parseInt(results[{0}], 10);\n",
            s: "(\\d{4})"
        },

        y: {
            g: 1,
            c: "var ty = parseInt(results[{0}], 10);\n"
            + "y = ty > Ext.Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
            s: "(\\d{1,2})"
        },

        a: {
            g: 1,
            c: "if(/(am)/i.test(results[{0}])) {\n"
            + "if(!h || h == 12) { h = 0; }\n"
            + "} else { if(!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(am|pm|AM|PM)"
        },

        A: {
            g: 1,
            c: "if(/(am)/i.test(results[{0}])) {\n"
            + "if(!h || h == 12) { h = 0; }\n"
            + "} else { if(!h || h < 12) { h = (h || 0) + 12; }}",
            s: "(AM|PM|am|pm)"
        },

        g: function() {
            return Ext.Date.formatCodeToRegex("G");
        },

        G: {
            g: 1,
            c: "h = parseInt(results[{0}], 10);\n",
            s: "(\\d{1,2})"
        },

        h: function() {
            return Ext.Date.formatCodeToRegex("H");
        },

        H: {
            g: 1,
            c: "h = parseInt(results[{0}], 10);\n",
            s: "(\\d{2})"
        },

        i: {
            g: 1,
            c: "i = parseInt(results[{0}], 10);\n",
            s: "(\\d{2})"
        },

        s: {
            g: 1,
            c: "s = parseInt(results[{0}], 10);\n",
            s: "(\\d{2})"
        },

        u: {
            g: 1,
            c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
            s: "(\\d+)"
        },

        O: {
            g: 1,
            c: [
                "o = results[{0}];",
                "var sn = o.substring(0,1),",
                "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),",
                "mn = o.substring(3,5) % 60;",
                "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n" // -12hrs <= GMT offset <= 14hrs
            ].join("\n"),
            s: "([+\-]\\d{4})"
        },
        P: {
            g: 1,
            c: [
                "o = results[{0}];",
                "var sn = o.substring(0,1),",
                "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),",
                "mn = o.substring(4,6) % 60;",
                "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n" // -12hrs <= GMT offset <= 14hrs
            ].join("\n"),
            s: "([+\-]\\d{2}:\\d{2})"
        },
        T: {
            g: 0,
            c: null,
            s: "[A-Z]{1,4}"
        },
        Z: {
            g: 1,
            c: "zz = results[{0}] * 1;\n"
                + "zz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
            s: "([+\-]?\\d{1,5})"
        },
        c: function() {

            var calc = [],
                arr = [
                    Ext.Date.formatCodeToRegex("Y", 1),
                    Ext.Date.formatCodeToRegex("m", 2),
                    Ext.Date.formatCodeToRegex("d", 3),
                    Ext.Date.formatCodeToRegex("h", 4),
                    Ext.Date.formatCodeToRegex("i", 5),
                    Ext.Date.formatCodeToRegex("s", 6),
                    {c:"ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"},
                    {
                        c:[
                            "if(results[8]) {",
                            "if(results[8] == 'Z'){",
                            "zz = 0;",
                            "} else if(results[8].indexOf(':') > -1){",
                            Ext.Date.formatCodeToRegex("P", 8).c,
                            "} else {",
                            Ext.Date.formatCodeToRegex("O", 8).c,
                            "}",
                            "}"
                            ].join('\n')
                    }
                ];

            for(var i = 0, l = arr.length; i < l; ++i) {
                calc.push(arr[i].c);
            }

            return {
                g: 1,
                c: calc.join(""),
                s:[
                    arr[0].s,
                    "(?:", "-", arr[1].s,
                    "(?:", "-", arr[2].s,
                    "(?:",
                    "(?:T| )?",
                    arr[3].s, ":", arr[4].s,
                    "(?::", arr[5].s, ")?",
                    "(?:(?:\\.|,)(\\d+))?",
                    "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?",
                    ")?",
                    ")?",
                    ")?"
                ].join("")
            };
        },
        U: {
            g: 1,
            c: "u = parseInt(results[{0}], 10);\n",
            s: "(-?\\d+)"
        }
    },

    // }}}
    // {{{ parseFunctions

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    parseFunctions: {

        "MS": function(input, strict) {

            var re = new RegExp('\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/');
            var r = (input || '').match(re);

            return r? new Date(((r[1] || '') + r[2]) * 1) : null;
        }

    },

    // }}}
    // {{{ toString

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    toString: function(date) {

        var pad = Ext.String.leftPad;

        return date.getFullYear() + "-"
               + pad(date.getMonth() + 1, 2, '0') + "-"
               + pad(date.getDate(), 2, '0') + "T"
               + pad(date.getHours(), 2, '0') + ":"
               + pad(date.getMinutes(), 2, '0') + ":"
               + pad(date.getSeconds(), 2, '0');
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
