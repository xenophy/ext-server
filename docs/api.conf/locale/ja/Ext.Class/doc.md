フレームワーク全体のクラス作成を処理します。
ほとんどの場合、名前空間と動的な依存関係の解決を有効にする、より高レベルのラッパーである
Ext.ClassManager.create
のエイリアスであるExt.defineを代わりに使用する必要があります。
Handles class creation throughout the framework.

このクラスは
<a href="#!/api/Ext.ClassManager" rel="Ext.ClassManager" class="docClass" >Ext.ClassManager</a>
が使う低レベルのファクトリーで、通常は直接使いません。

Ext.Classを直接使うと、
<a href="#!/api/Ext.ClassManager" rel="Ext.ClassManager" class="docClass" >Ext.ClassManager</a>
によって利用可能になっている、
ネームスペース、エイリアス、依存関係によるローディングが失敗します。
Ext.Classを直接使う唯一の機会は別名クラスを作成することです。

クラスを生成する時には、
ネームスペースや動的依存関係を解決することができる
<a href="#!/api/Ext-method-define" rel="Ext-method-define" class="docClass" >Ext.define</a>
(これは
<a href="#!/api/Ext.ClassManager-method-create" rel="Ext.ClassManager-method-create" class="docClass">Ext.ClassManager.create</a>
のエリアスです)
を使います。

Ext.Classはファクトリーであり継承してはいけません。
