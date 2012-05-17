/**
 * ユーザー情報編集ウィンドウ
 * File:    Edit.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/
Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.AMuseredit',

    requires: ['Ext.form.Panel'],

    title : 'ユーザー情報の編集',
    layout: 'fit',
    autoShow: true,
    width: 480,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                defaults: {
                    anchor: '100%'
                },

                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: '名前'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: '電子メール'
                    },
                    {
                        xtype: 'textarea',
                        name : 'bio',
                        fieldLabel: '紹介'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});

