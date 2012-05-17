/**
 * Ext JS / Sencha Touch Perfectday #008
 * Using Ext Direct with Sencha Touch 2
 * List view
 * File:    list.js
 * Auther:  sunvisor
 * Date:    2012-03-10
 * Copyright (C) Sunvisor 2012 All right reserved.
 **/
Ext.define('AM.view.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.userlist',

    config: {
        items: [
            {
                xtype : 'toolbar',
                ui: 'neutral',
                docked: 'bottom',
                scrollable: false,
                defaults: {
                    iconMask: true,
                    ui      : 'plain'
                },
                items: [
                    {
                        itemId: 'addButton',
                        iconCls: 'add'
                    }
                ],
                layout: {
                    pack : 'right',
                    align: 'right'
                }
            }
        ],

        store: 'Users',
        onItemDisclosure: true,
        itemTpl: [
            '<div>{name}</div>'
        ]
    }

});
