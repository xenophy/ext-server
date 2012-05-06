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

            'Android': function() {
                if(ua.match(/Android/i)) {
                    return true;
                }
                return false;
            },

            'Chrome': function() {
                if(ua.match(/chrome/i)) {
                    return true;
                }
                return false;
            },

            'Gecko': function() {
                if(!is.Webkit() && ua.match(/gecko/i)) {
                    return true;
                }
                return false;
            },

            'Gecko2': function() {
                if(is.Gecko() && ua.match(/rv:1\.8/i)) {
                    return true;
                }
                return false;
            },

            'Gecko3': function() {
                if(is.Gecko() && ua.match(/rv:1\.9/i)) {
                    return true;
                }
                return false;
            },

            'Gecko4': function() {
                if(is.Gecko() && ua.match(/rv:2\.0/i)) {
                    return true;
                }
                return false;
            },

            'Gecko5': function() {
                if(is.Gecko() && ua.match(/rv:5\./i)) {
                    return true;
                }
                return false;
            },

            'Gecko10': function() {
                if(is.Gecko() && ua.match(/rv:10\./i)) {
                    return true;
                }
                return false;
            },

            'IE': function() {
                if(!is.Opera() && ua.match(/msie/i)) {
                    return true;
                }
                return false;
            },

            'IE6': function() {
                if(is.IE() && !is.IE7() && !is.IE8()) {
                    return true;
                }
                return false;
            },

            'IE7': function() {
                if(is.IE() && ua.match(/msie 7/i)) {
                    return true;
                }
                return false;
            },

            'IE8': function() {
                if(is.IE() && ua.match(/msie 8/i)) {
                    return true;
                }
                return false;
            },

            'IE9': function() {
                if(is.IE() && ua.match(/msie 9/i)) {
                    return true;
                }
                return false;
            },

            'iPad': function() {
                if(ua.match(/iPad/i)) {
                    return true;
                }
                return false;
            },

            'iPhone': function() {
                if(ua.match(/iPhone/i)) {
                    return true;
                }
                return false;
            },

            'iPod': function() {
                if(ua.match(/iPod/i)) {
                    return true;
                }
                return false;
            },

            'Linux': function() {
                if(ua.match(/linux/i)) {
                    return true;
                }
                return false;
            },

            'Opera': function () {
                if(ua.match(/opera/i)) {
                    return true;
                }
                return false;
            },

            'Opera10_5': function() {
                if(is.Opera() && ua.match(/version\/10\.5/i)) {
                    return true;
                }
                return false;
            },

            'Mac': function() {
                if(Ext.isString(ua) && ua.match(/Mac/i)) {
                    return true;
                }
                return false;
            },

            'Safari': function() {
                if(!is.Chrome() && !is.Xperia() && ua.match(/safari/i)) {
                    return true;
                }
                return false;
            },

            'Safari2': function() {
                if(is.Safari(ua) && ua.match(/applewebkit\/4/i)) {
                    return true;
                }
                return false;
            },

            'Safari3': function() {
                if(is.Safari(ua) && ua.match(/version\/3/i)) {
                    return true;
                }
                return false;
            },

            'Safari4': function() {
                if(is.Safari(ua) && ua.match(/version\/4/i)) {
                    return true;
                }
                return false;
            },

            'Safari5_0': function() {
                if(is.Safari() && ua.match(/version\/5\.0/i)) {
                    return true;
                }
                return false;
            },

            'Safari5': function() {
                if(is.Safari(ua) && ua.match(/version\/5/i)) {
                    return true;
                }
                return false;
            },

            'Webkit': function() {
                if(ua.match(/webkit/i)) {
                    return true;
                }
                return false;
            },

            'Windows': function() {
                if(ua.match(/Win/i)) {
                    return true;
                }
                return false;
            },

            'Xperia': function() {
                if(ua.match(/SonyEricsson(SO-01B|X10i)/i)) {
                    return true;
                }
                return false;
            }
        };

        /**
         * {Ext_server_UserAgent:method-is:desc}
         * @method is
         * @param {String} id {Ext_server_UserAgent:method-is:papram_id}
         * @return {Boolean}
         */
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
