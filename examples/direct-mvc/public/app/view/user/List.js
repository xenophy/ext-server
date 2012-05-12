/**
 * ユーザー情報表示グリッド
 * File:    List.js
 * Auther:  sunvisor
 * Date:    2011-08-10
 * Copyright (C) Sunvisor 2011 All right reserved.
 **/
Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.AMuserlist',

    title : '全てのユーザー',
    store: 'Users',

    columns: [
        {header: '名前',  dataIndex: 'name',  flex: 1},
        {header: 'メール', dataIndex: 'email', flex: 1}
    ]
});

