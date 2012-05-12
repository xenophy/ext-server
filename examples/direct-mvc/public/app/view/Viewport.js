/**
 * ビューポート
 * File:    Viewport.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/
Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.AM.viewport',
    id: 'AM.Viewport',
    layout: 'fit',
    items: [
        {
            xtype: 'AMuserlist',
            tbar: [
                {
                    text:'新規...',
                    action: 'add'
                }, {
                    text:'変更...',
                    action: 'edit',
                    disabled: true
                }, {
                    text:'削除',
                    action: 'delete',
                    disabled: true
                }, {
                    text:'保存',
                    action: 'save'
                }
            ]
        }

    ]
});
