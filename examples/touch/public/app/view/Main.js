/**
 * 
 * File:    Main.js
 * Auther:  sunvisor
 * Date:    2012-03-13
 * Copyright (C) Sunvisor 2012 All right reserved.
 **/
Ext.define('AM.view.Main', {

    extend: 'Ext.navigation.View',

    config: {
        fullscreen: true,

        items: [
            { xtype: 'userlist', title:'List' }
        ]
    }

});
