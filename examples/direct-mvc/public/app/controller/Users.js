/**
 * Usersコントローラー
 * File:    Users.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/

Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],

    models: ['User'],

    views: ['user.Edit', 'user.List'],

    refs: [
        {
            ref: 'dataview',
            selector: 'AMuserlist dataview'
        }
    ],

    init: function() {

        var me = this;

        me.control({
            'AMuserlist dataview': {
                itemdblclick: me.onGridDblClick,
                itemclick: me.onGridClick
            },
            'AMuserlist button[action=edit]': {
                click: me.onButtonEditClick
            },
            'AMuserlist button[action=delete]': {
                click: me.onButtonDeleteClick
            },
            'AMuserlist button[action=add]': {
                click: me.onButtonAddClick
            },
            'AMuserlist button[action=save]': {
                click: me.onButtonSaveClick
            },
            'AMuseredit button[action=save]': {
                click: me.updateUser
            }
        });
    },

    onLaunch: function () {
        var store = this.getUsersStore();

        // Proxyにサーバー関数をセット
//        store.getProxy().api = {
//            create: AM.users.addRec,
//            read: AM.users.getAll,
//            update: AM.users.updateRec,
//            destroy: AM.users.removeRec
//        };
        store.load();
    },

    onButtonSaveClick: function(button){
        var me = this,
            store = me.getUsersStore();

        store.sync();
    },

    onButtonDeleteClick: function(button){
        var me = this,
            sm = me.getSelectionModel(),
            record = sm.getSelection()[0],
            store = me.getUsersStore();

        if(record) {
			store.remove(record);
        }

    },

    onGridClick: function(grid) {
        grid.ownerCt.down('button[action=delete]').enable();
        grid.ownerCt.down('button[action=edit]').enable();
    },

    onGridDblClick: function(grid, record){
        this.openUserDialog(record);
    },

    onButtonAddClick: function(button){
        this.openUserDialog(undefined, "add");
    },
    
    onButtonEditClick: function(button){
        var me = this,
            sm = me.getSelectionModel(),
            record = sm.getSelection()[0];

        if(record) {
            me.openUserDialog(record, "edit");
        }
    },

    openUserDialog: function(record, mode) {
        var edit = Ext.create('AM.view.user.Edit', {editMode: mode}).show();

        if( record ){
            edit.down('form').loadRecord(record);
        }
    },

    updateUser: function(button) {
        var me = this,
            win = button.up('window'),
            store = me.getUsersStore(),
            form = win.down('form'),
            model = this.getModel('User'),
            values = form.getValues(),
            mode = win.editMode;

        if(mode == 'add') {
            record = new model(values);
            store.add(record);
        } else {
            record = form.getRecord();
            record.set(values);
        }
        win.close();
    },

    getSelectionModel: function() {
        var me = this;

        return me.getDataview().getSelectionModel();
    }

});

