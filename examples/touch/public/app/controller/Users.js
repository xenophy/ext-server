/**
 * Ext JS / Sencha Touch Perfectday #008
 * Using Ext Direct with Sencha Touch 2
 * Users Controller
 * File:    Users.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/

Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Users'],
        models: ['User'],
        views: ['List'],
        refs: {
            nav: 'navigationview',
            userEdit: 'useredit',
            saveButton: 'useredit #saveButton',
            deleteButton: 'useredit #deleteButton',
            addButton: 'userlist #addButton'
        },
        control: {
            'userlist' : {
                disclose: 'onDisclosure'
            },
            addButton: {
                tap: 'onAddTap'
            },
            saveButton: {
                tap: 'onSaveTap'
            },
            deleteButton: {
                tap: 'onDeleteTap'
            }
        }
    },

    init: function() {
        var me = this;


    },

    launch: function () {
        var me = this,
            store = Ext.getStore('Users');

        Ext.create('AM.view.List');
        store.load();
    },

    onAddTap: function () {
        var me = this,
            edit = Ext.widget('useredit');

        me.getNav().push(edit);

    },

    onDisclosure: function(list, record) {
        var me = this,
            edit = Ext.widget('useredit');

        me.editMode = 'edit';
        edit.setRecord(record);
        me.getNav().push(edit);
    },

    onSaveTap: function(button){
        var me = this,
            form = me.getUserEdit(),
            rec = form.getRecord(),
            values = form.getValues(),
            store = Ext.getStore('Users');

        if( rec ){
            rec.set(values);
        } else {
            rec = Ext.create('AM.model.User');
            rec.set(values);
            store.add(rec);
        }
        store.sync();
        me.getNav().pop();
    },

    onDeleteTap: function(button) {
        var me = this,
            form = me.getUserEdit(),
            rec = form.getRecord(),
            store = Ext.getStore('Users');

        store.remove(rec);
        store.sync();
        me.getNav().pop();

    }

});

