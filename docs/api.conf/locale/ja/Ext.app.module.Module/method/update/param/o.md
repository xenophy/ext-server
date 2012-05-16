更新するオブジェクト。

<strong>MySQL</strong>:
更新するレコードをキー／値ペアで指定します。
更新の条件は、このオブジェクトの $where キーに設定します。
条件の指定は、where句を入れた文字列、またはキー／値ペアの抽出条件を指定します。

例

    {
        'name': 'Ext Server',
        '$where': {
            id: 1
        }
    }

<strong>MongoDB</strong>:
MongoDBのupdateコマンドに渡すオブジェクト。
