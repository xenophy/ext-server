/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.UserAgent

/**
 * @class Ext.server.UserAgent
 *
 * {Ext_server_UserAgent:doc-contents}
 */
Ext.define('Ext.server.UserAgent', {

    // {{{ constructor

    constructor: function(ua) {
        this.UserAgent = ua;
    },

    // }}}
    // {{{ statics

    statics: {
        support: [
            'Android',
            'Chrome',
            'Gecko',
            'Gecko2',
            'Gecko3',
            'Gecko4',
            'Gecko5',
            'Gecko10',
            'IE',
            'IE6',
            'IE7',
            'IE8',
            'IE9',
            'iPad',
            'iPhone',
            'iPod',
            'Linux',
            'Opera',
            'Opera10_5',
            'Safari',
            'Safari2',
            'Safari3',
            'Safari4',
            'Safari5_0',
            'Safari5',
            'Mac',
            'Webkit',
            'Windows',
            'Xperia'
        ]
    },

    // }}}
    // {{{ apply

    apply: function(target) {

        var is, ua, support = this.statics().support;

        ua      = this.UserAgent;
        target  = target || {};


        is = {

            /**
             * {Ext_server_UserAgent:method-isAndroid:desc}
             * @method isAndroid
             */
            'Android': function() {
                if(ua.match(/Android/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isChrome:desc}
             * @method isChrome
             */
            'Chrome': function() {
                if(ua.match(/chrome/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isGecko:desc}
             * @method isGecko
             */
            'Gecko': function() {
                if(!is.Webkit() && ua.match(/gecko/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-is$type:desc}
             * @method isGecko2$type
             */
            'Gecko2': function() {
                if(is.Gecko() && ua.match(/rv:1\.8/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isGecko3:desc}
             * @method isGecko3
             */
            'Gecko3': function() {
                if(is.Gecko() && ua.match(/rv:1\.9/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isGecko4:desc}
             * @method isGecko4
             */
            'Gecko4': function() {
                if(is.Gecko() && ua.match(/rv:2\.0/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isGecko5:desc}
             * @method isGecko5
             */
            'Gecko5': function() {
                if(is.Gecko() && ua.match(/rv:5\./i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isGecko10:desc}
             * @method isGecko10
             */
            'Gecko10': function() {
                if(is.Gecko() && ua.match(/rv:10\./i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isIE:desc}
             * @method isIE
             */
            'IE': function() {
                if(!is.Opera() && ua.match(/msie/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isIE6:desc}
             * @method isIE6
             */
            'IE6': function() {
                if(is.IE() && !is.IE7() && !is.IE8()) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isIE7:desc}
             * @method isIE7
             */
            'IE7': function() {
                if(is.IE() && ua.match(/msie 7/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isIE8:desc}
             * @method isIE8
             */
            'IE8': function() {
                if(is.IE() && ua.match(/msie 8/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isIE9:desc}
             * @method isIE9
             */
            'IE9': function() {
                if(is.IE() && ua.match(/msie 9/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isiPad:desc}
             * @method isiPad
             */
            'iPad': function() {
                if(ua.match(/iPad/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isiPhone:desc}
             * @method isiPhone
             */
            'iPhone': function() {
                if(ua.match(/iPhone/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isiPod:desc}
             * @method isiPod
             */
            'iPod': function() {
                if(ua.match(/iPod/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isLinux:desc}
             * @method isLinux
             */
            'Linux': function() {
                if(ua.match(/linux/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isOpera:desc}
             * @method isOpera
             */
            'Opera': function () {
                if(ua.match(/opera/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isOpera10_5:desc}
             * @method isOpera10_5
             */
            'Opera10_5': function() {
                if(is.Opera() && ua.match(/version\/10\.5/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isMac:desc}
             * @method isMac
             */
            'Mac': function() {
                if(Ext.isString(ua) && ua.match(/Mac/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari:desc}
             * @method isSafari
             */
            'Safari': function() {
                if(!is.Chrome() && !is.Xperia() && ua.match(/safari/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari2:desc}
             * @method isSafari2
             */
            'Safari2': function() {
                if(is.Safari(ua) && ua.match(/applewebkit\/4/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari3:desc}
             * @method isSafari3
             */
            'Safari3': function() {
                if(is.Safari(ua) && ua.match(/version\/3/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari4:desc}
             * @method isSafari4
             */
            'Safari4': function() {
                if(is.Safari(ua) && ua.match(/version\/4/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari5_0:desc}
             * @method isSafari5_0
             */
            'Safari5_0': function() {
                if(is.Safari() && ua.match(/version\/5\.0/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isSafari5:desc}
             * @method isSafari5
             */
            'Safari5': function() {
                if(is.Safari(ua) && ua.match(/version\/5/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isWebkit:desc}
             * @method isWebkit
             */
            'Webkit': function() {
                if(ua.match(/webkit/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isWindows:desc}
             * @method isWindows
             */
            'Windows': function() {
                if(ua.match(/Win/i)) {
                    return true;
                }
                return false;
            },

            /**
             * {Ext_server_UserAgent:method-isXperia:desc}
             * @method isXperia
             */
            'Xperia': function() {
                if(ua.match(/SonyEricsson(SO-01B|X10i)/i)) {
                    return true;
                }
                return false;
            }
        };

        target.is = function(id) {
            if(support.indexOf(id) !== -1 && is[id]) {
                return target.is[id];
            } else {
                return null;
            }
        };

        Ext.iterate(is, function(id) {
            target.is[id] = is[id]();
        });

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
