エイリアス名から、クラスをインスタンス化します。

通常はショートハンドである
<a href="#!/api/Ext-method-createByAlias" rel="Ext-method-createByAlias" class="docClass">Ext.createByAlias</a>
から呼び出されます。
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass">Ext.Loader</a>
が
<a href="#!/api/Ext.Loader-method-setConfig" rel="Ext.Loader-method-setConfig" class="docClass">有効(`enabled`)</a>
で、クラスが定義されていない場合、同期読み込みによってクラスをロードすることを試みます。

    var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });
