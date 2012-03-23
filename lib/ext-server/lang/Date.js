/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Date

/**
 * @class Ext.Date
 *
 * {Ext_Date:doc-contents}
 *
 * @singleton
 */
module.exports = {

    // {{{ DAY

    /**
     * {Ext_Date:property-DAY:desc}
     *
     * @type String
     */
    DAY: "d",

    // }}}
    // {{{ dayNames

    /**
     * @property {String[]} dayNames
     *
     * {Ext_Date:property-dayNames:desc}
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
     * @property {String} defaultFormat
     *
     * {Ext_Date:property-defaultFormat:desc}
     */
    defaultFormat : "m/d/Y",

    // }}}
    // {{{ defaults

    /**
     * {Ext_Date:property-defaults:desc}
     *
     * @property defaults
     * @type Object
     */
    defaults: {},

    // }}}
    // {{{ formatCodes

    /**
     * {Ext_Date:property-formatCodes:desc}
     *
     * @type Object
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
     * {Ext_Date:property-formatFunctions:desc}
     *
     * @property formatFunctions
     * @type Object
     */
    formatFunctions: {
        "MS": function() {
            return '\\/Date(' + this.getTime() + ')\\/';
        }
    },

    // }}}
    // {{{ HOUR

    /**
     * {Ext_Date:property-HOUR:desc}
     *
     * @type String
     */
    HOUR: "h",

    // }}}
    // {{{ MILLI

    /**
     * {Ext_Date:property-MILLI:desc}
     *
     * @type String
     */
    MILLI: "ms",

    // }}}
    // {{{ MINUTE

    /**
     * {Ext_Date:property-MINUTE:desc}
     *
     * @type String
     */
    MINUTE: "mi",

    // }}}
    // {{{ MONTH

    /**
     * {Ext_Date:property-MONTH:desc}
     *
     * @type String
     */
    MONTH: "mo",

    // }}}
    // {{{ monthNames

    /**
     * @property {String[]} monthNames
     *
     * {Ext_Date:property-monthNames:desc}
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
    // {{{ monthNumbers

    /**
     * {Ext_Date:property-monthNumbers:desc}
     */
    monthNumbers: {
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

    // private
    parseRegexes: [],

    // }}}
    // {{{ SECOND

    /**
     * {Ext_Date:property-SECOND:desc}
     *
     * @type String
     */
    SECOND: "s",

    // }}}
    // {{{ useStrict

    /**
     * {Ext_Date:property-useStrict:desc}
     *
     * @type Boolean
     */
    useStrict: false,

    // }}}
    // {{{ y2kYear

    // private
    y2kYear: 50,

    // }}}
    // {{{ YEAR

    /**
     * {Ext_Date:property-YEAR:desc}
     *
     * @type String
     */
    YEAR: "y",

    // }}}
    // {{{ parseFunctions

    /**
     * {Ext_Date:property-parseFunctions:desc}
     *
     * @type Object
     */
    parseFunctions: {

        "MS": function(input, strict) {

            var re = new RegExp('\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/');
            var r = (input || '').match(re);

            return r? new Date(((r[1] || '') + r[2]) * 1) : null;
        }

    },

    // }}}
    // {{{ $xf

    // private
    $xf: function(format) {

        var args = Array.prototype.slice.call(arguments, 1);

        return format.replace(/\{(\d+)\}/g, function(m, i) {
            return args[i];
        });
    },

    // }}}
    // {{{ add

    /**
     * {Ext_Date:method-add:desc}
     *
     * @param {Date} date {Ext_Date:method-add:param_date}
     * @param {String} interval {Ext_Date:method-add:param_interval}
     * @param {Number} value {Ext_Date:method-add:param_value}
     * @return {Date} {Ext_Date:method-add:return}
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
     * {Ext_Date:method-between:desc}
     *
     * @param {Date} date {Ext_Date:method-between:param_date}
     * @param {Date} start {Ext_Date:method-between:param_start}
     * @param {Date} end {Ext_Date:method-between:param_end}
     * @return {Boolean} {Ext_Date:method-between:return}
     */
    between: function(date, start, end) {

        var t = date.getTime();

        return start.getTime() <= t && t <= end.getTime();
    },

    // }}}
    // {{{ clearTime

    /**
     * {Ext_Date:method-clearTime:desc}
     *
     * @param {Date} date {Ext_Date:method-clearTime:param_date}
     * @param {Boolean} clone {Ext_Date:method-clearTime:param_clone}
     * @return {Date} {Ext_Date:method-clearTime:retrun}
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
     * {Ext_Date:method-clone:desc}
     *
     * @param {Date} date {Ext_Date:method-clone:param_date}
     * @return {Date} {Ext_Date:method-clone:return}
     */
    clone: function(date) {
        return new Date(date.getTime());
    },

    // }}}
    // {{{ createFormat

    // private
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

    // private
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

    // private
    dateFormat: function(date, format) {
        return Ext.Date.format(date, format);
    },

    // }}}
    // {{{ format

    /**
     * {Ext_Date:method-format:desc}
     *
     * @param {Date} date {Ext_Date:method-format:param_date}
     * @param {String} format {Ext_Date:method-format:param_format}
     * @return {String} {Ext_Date:method-format:return}
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

    // private
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
     * {Ext_Date:method-formatContainsDateInfo:desc}
     *
     * @param {String} format {Ext_Date:method-formatContainsDateInfo:param_format}
     * @return {Boolean} {Ext_Date:method-formatContainsDateInfo:return}
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
     * {Ext_Date:method-formatContainsHourInfo:desc}
     *
     * @param {String} format {Ext_Date:method-formatContainsHourInfo:param_format}
     * @return {Boolean} {Ext_Date:method-formatContainsHourInfo:return}
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
     * {Ext_Date:method-getDayOfYear:desc}
     *
     * @param {Date} date {Ext_Date:method-getDayOfYear:param_date}
     * @return {Number} {Ext_Date:method-getDayOfYear:return}
     */
    getDayOfYear: function(date) {

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
     * {Ext_Date:method-getDaysInMonth:desc}
     *
     * @param {Date} date {Ext_Date:method-getDaysInMonth:param_date}
     * @return {Number} {Ext_Date:method-getDaysInMonth:return}
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
     * {Ext_Date:method-getElapsed:desc}
     *
     * @param {Date} dateA {Ext_Date:method-getElapsed:param_dateA}
     * @param {Date} dateB {Ext_Date:method-getElapsed:param_dateB}
     * @return {Number} {Ext_Date:method-getElapsed:return}
     */
    getElapsed: function(dateA, dateB) {
        return Math.abs(dateA - (dateB || new Date()));
    },

    // }}}
    // {{{ getFirstDateOfMonth

    /**
     * {Ext_Date:method-getFirstDateOfMonth:desc}
     *
     * @param {Date} date {Ext_Date:method-getFirstDateOfMonth:param_date}
     * @return {Date} {Ext_Date:method-getFirstDateOfMonth:return}
     */
    getFirstDateOfMonth: function(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    // }}}
    // {{{ getFirstDayOfMonth

    /**
     * {Ext_Date:method-getFirstDayOfMonth:desc}
     *
     * @param {Date} date {Ext_Date:method-getFirstDayOfMonth:param_date}
     * @return {Number} {Ext_Date:method-getFirstDayOfMonth:return}
     */
    getFirstDayOfMonth: function(date) {

        var day = (date.getDay() - (date.getDate() - 1)) % 7;

        return (day < 0) ? (day + 7) : day;
    },

    // }}}
    // {{{ getFormatCode

    // private
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
     * {Ext_Date:method-getGMTOffset:desc}
     *
     * @param {Date} date {Ext_Date:method-getGMTOffset:param_date}
     * @param {Boolean} colon {Ext_Date:method-getGMTOffset:param_colon}
     * @return {String} {Ext_Date:method-getGMTOffset:return}
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
     * {Ext_Date:method-getLastDateOfMonth:desc}
     *
     * @param {Date} date {Ext_Date:method-getLastDateOfMonth:param_date}
     * @return {Date} {Ext_Date:method-getLastDateOfMonth:return}
     */
    getLastDateOfMonth: function(date) {
        return new Date(date.getFullYear(), date.getMonth(), Ext.Date.getDaysInMonth(date));
    },

    // }}}
    // {{{ getLastDayOfMonth

    /**
     * {Ext_Date:method-getLastDayOfMonth:desc}
     *
     * @param {Date} date {Ext_Date:method-getLastDayOfMonth:param_date}
     * @return {Number} {Ext_Date:method-getLastDayOfMonth:return}
     */
    getLastDayOfMonth: function(date) {
        return Ext.Date.getLastDateOfMonth(date).getDay();
    },

    // }}}
    // {{{ getMonthNumber

    /**
     * {Ext_Date:method-getMonthNumber:desc}
     *
     * @param {String} name {Ext_Date:method-getMonthNumber:param_name}
     * @return {Number} {Ext_Date:method-getMonthNumber:return}
     */
    getMonthNumber: function(name) {
        return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
    },

    // }}}
    // {{{ getShortDayName

    /**
     * {Ext_Date:method-getShortDayName:desc}
     *
     * @param {Number} day {Ext_Date:method-getShortDayName:param_day}
     * @return {String} {Ext_Date:method-getShortDayName:return}
     */
    getShortDayName: function(day) {
        return Ext.Date.dayNames[day].substring(0, 3);
    },

    // }}}
    // {{{ getShortMonthName

    /**
     * {Ext_Date:method-getShortMonthName:desc}
     *
     * @param {Number} month {Ext_Date:method-getShortMonthName:param_month}
     * @return {String} {Ext_Date:method-getShortMonthName:return}
     */
    getShortMonthName: function(month) {
        return Ext.Date.monthNames[month].substring(0, 3);
    },

    // }}}
    // {{{ getSuffix

    /**
     * {Ext_Date:method-getSuffix:desc}
     *
     * @param {Date} date {Ext_Date:method-getSuffix:param_date}
     * @return {String} {Ext_Date:method-getSuffix:return}
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
     * {Ext_Date:method-getTimezone:desc}
     *
     * @param {Date} date {Ext_Date:method-getTimezone:param_date}
     * @return {String} {Ext_Date:method-getTimezone:return}
     */
    getTimezone: function(date) {
        return date.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "");
    },

    // }}}
    // {{{ getWeekOfYear

    /**
     * {Ext_Date:method-getWeekOfYear:desc}
     *
     * @param {Date} date {Ext_Date:method-getWeekOfYear:param_date}
     * @return {Number} {Ext_Date:method-getWeekOfYear:return}
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
     * {Ext_Date:method-isDST:desc}
     *
     * @param {Date} date {Ext_Date:method-isDST:param_date}
     * @return {Boolean} {Ext_Date:method-isDST:return}
     */
    isDST: function(date) {
        return new Date(date.getFullYear(), 0, 1).getTimezoneOffset() != date.getTimezoneOffset();
    },

    // }}}
    // {{{ isLeapYear

    /**
     * {Ext_Date:method-isLeapYear:desc}
     *
     * @param {Date} date {Ext_Date:method-isLeapYear:param_date}
     * @return {Boolean} {Ext_Date:method-isLeapYear:return}
     */
    isLeapYear: function(date) {

        var year = date.getFullYear();

        return !!((year & 3) == 0 && (year % 100 || (year % 400 == 0 && year)));
    },

    // }}}
    // {{{ isValid

    /**
     * {Ext_Date:method-isValid:desc}
     *
     * @param {Number} year {Ext_Date:method-isValid:param_year}
     * @param {Number} month {Ext_Date:method-isValid:param_month}
     * @param {Number} day {Ext_Date:method-isValid:param_day}
     * @param {Number} hour {Ext_Date:method-isValid:param_hour}
     * @param {Number} minute {Ext_Date:method-isValid:param_minute}
     * @param {Number} second {Ext_Date:method-isValid:param_second}
     * @param {Number} millisecond {Ext_Date:method-isValid:param_millisecond}
     * @return {Boolean} {Ext_Date:method-isValid:return}
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
    // {{{ now

    /**
     * {Ext_Date:method-now:desc}
     *
     * @return {Date} {Ext_Date:method-now:return}
     */
    now: Date.now || function() {
        return +new Date();
    },

    // }}}
    // {{{ parse

    /**
     * {Ext_Date:method-parse:desc}
     *
     * @param {String} input {Ext_Date:method-parse:input}
     * @param {String} format {Ext_Date:method-parse:format}
     * @param {Boolean} strict {Ext_Date:method-parse:strict}
     * @return {Date} {Ext_Date:method-parse:return}
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

    // private
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
    // {{{ toString

    // private
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
