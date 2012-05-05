変数やクラスをスコープするネームスペースを生成します。
それによりグローバル スコープを汚しません。
namespaceの最後のノードを指定した場合、その途中の全てのノードを暗黙的に生成します。 使用例:

    Ext.namespace('Company', 'Company.data');

    // equivalent and preferable to the above syntax
    Ext.ns('Company.data');

    Company.Widget = function() { ... };

    Company.data.CustomStore = function(config) { ... };

