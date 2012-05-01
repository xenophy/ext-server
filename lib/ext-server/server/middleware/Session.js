/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.middleware.Session

/**
 * @class Ext.server.middleware.Session
 *
 * {Ext_server_middleware_Session:doc-contents}
 */
Ext.define('Ext.server.middleware.Session', {

    // {{{ alias

    alternateClassName: 'Ext.server.Session',

    // }}}
    // {{{ init

    init: function(config) {

        var session = config.app.session = config.app.session || {};

        Ext.applyIf(session, {
            key: 'extserver.sid'
        });

        session.redis = session.redis || {};
        Ext.applyIf(session.redis, {
        });

        if(Ext.isString(session.type) && session.type.toLowerCase() === 'redis') {

            // Redis Session
            var RedisStore = Ext.$dependencies['connect-redis'](Ext.$dependencies.connect);

            session.store = new RedisStore(session.redis);

            // TODO: change to random.
            session.secret = 'keyboard cat';
        }

        return Ext.server.Connect.session(session);
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

