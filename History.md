# 0.2.0 (2012/05/29)
======================
  * Add     module(db) escape method.
  * Fixed   directory index handling fixed.
  * Fixed   404 Error handling fixed.


# 0.1.9 (2012/05/25)
======================
  * Fixed   too many static contents transfer fixed.


# 0.1.8 (2012/05/24)
======================
  * Change  validation at connection pooling of MySQL.
  * Change  Optimize transfer Static Files.


# 0.1.7 (2012/05/19)
======================
  * Add     Reverse Proxy add http header 'x-forwarded-https', and 'x-forwarded-proto'.


# 0.1.6 (2012/05/18)
======================
  * Change  need higher than node v0.6.18
  * Add     add Ext.util.OTP
  * Add     add Ext.util.GeoIP and auto settiong "res.geoip" object.


# 0.1.5 (2012/05/15)
======================
  * Change  "onLaunch" method, change the scope at the method call.
  * Add     became able to generate a user module class, "module.exports='your module class name';"
  * Add     become able to custom bind name, "{name:'mod name', bind:'bind name', conn:'conn name'}"


# 0.1.4 (2012/05/14)
======================
  * Add     MySQL add 'end' method. connection does not close it if you do not call end method.
  * Add     enable reference a socket object by this.socket of the user event handler.


# 0.1.3 (2012/05/14)
======================
  * Change  MySQL, disable Connection Pooling.


# 0.1.2 (2012/05/14)
======================
  * Change  Reverse Proxy Server Config style to {host:xxxx, port:xxxx} changed.
  * Add     Support, WebSocket balance in Reverse Proxy.


# 0.1.1 (2012/05/11)
======================
  * Add     Chained CA Support for SSL.
  * Change  change it than node version 0.6.17
  * Add     add Ext.createProxy method. Simple reverse proxy.


# 0.1.0 (2012/05/07)
======================
  * Change  turned off an automatic escape of Swig.
  * Add     implemented this.redirect of the action class method.
  * Add     implemented this.is.XXXX of the action chass method for User-Agent.
  * Add     implemented Markdown Parser, "Ext.markdown" method.
  * Add     implemented send mail method in action execute,
            ex.) this.mail({ ... }), specify nodemailer message config.
            transport config is specify Ext.application({smtp: { /* here */ }});
  * Add     SSL support, SSL config is specify Ext.application({ssl: { /* here */ }});
  * Add     set a time limit for the execute time of the action.
  * Add     display all error indication about Ext.Server for a browser.
  * Add     Ext Direct Support.
  * Add     Socket.IO support.

