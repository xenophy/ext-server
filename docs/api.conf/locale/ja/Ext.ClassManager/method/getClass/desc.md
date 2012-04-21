指定されたオブジェクトのクラスを取得します。 Ext.defineで生成されたインスタンスでない場合、nullを返します。
通常はショートハンドである
<a href="#!/api/Ext-method-getClass" rel="Ext-method-getClass" class="docClass">Ext.getClass</a>
から呼び出されます。

    var component = new Ext.Component();

    Ext.ClassManager.getClass(component); // returns Ext.Component
