# Class System

Ext Serverには、Ext JS 4で採用されたのと共通したクラスシステムが実装されています。
これにより、Ext Serverではクラスベースのプログラミングをすることができます。

I. 概要
-------

JavaScriptはクラスレスのプロトタイプ指向言語です。
この言語の本来の最も強力な特徴の1つは柔軟性です。
そのため同じ仕事を多くの方法で（コーディングスタイルやテクニックを使って）実装できます。
しかし，そのことはコストの予測を難しくする原因でもあります。
統一された構造のないJavaScriptコードは、理解にくく、メンテナンスや再利用がしやすいとはいえないもになる場合があります。

一方，クラスベースのプログラミングというのは，オブジェクト指向モデルの中で最もポピュラーなものです。
クラスベースの言語にはたいてい強固な型定義，カプセル化，標準的なコーディング規則があります。
一般的に、開発者が膨大な規則に準拠して記述したコードは，時間が経っても読みやすく保守性や拡張性が高い傾向があります。
しかしそれらの言語には，JavaScriptなどの言語で見られるような動的な機能はありません。
どちらのアプローチも一長一短ですが，短所を隠しながら，両方の長所を同時に手にできないのでしょうか。
Ext JS 4やExt Serverのクラスシステムはそれを解決します。

II. 名付け規則
--------------

### 1) クラス

クラス名は英数字のみで記述します。数字は許されていますが，テクニカルタームでない限り使わない方がいいです。アンダースコアやハイフンなどの英数字以外の文字は使ってはいけません。例：

-   `MyCompany.useful_util.Debug_Toolbar` これはNGです。
-   `MyCompany.util.Base64` これはOKです。

クラス名は，オブジェクトのプロパティのドット表記をうまく使って，パッケージごとにグループ化する必要があります。ユニークなトップレベルのネームスペースは一つだけにして，それにクラス名を続けます。例：

-   `MyCompany.data.CoolProxy`
-   `MyCompany.Application`

トップレベルのネームスペースと実際のクラス名はアッパーキャメルケース（CamelCase）で書き，それ以外は全て小文字で書きます。例：

-   `MyCompany.form.action.AutoLoad`

Senchaが配布するものでないクラスは，Extをトップレベル名前空間として使わないでください。
アクロニム（頭文字語）も同様にアッパーキャメルケースで表記してください。例：

-   `Ext.data.JSONProxy`ではなく`Ext.data.JsonProxy`
-   `MyCompary.parser.HTMLParser`ではなく`MyCompany.util.HtmlParser`
-   `MyCompany.server.HTTP`ではなく`MyCompany.server.Http`

### 2) ソースファイル

クラスの名前は保存されているファイルパスにひもつけられます。結果として一つのファイルには一つのクラスだけが存在するということになります。例：

-   `Ext.util.Observable` は
   `path/to/src/Ext/util/Observable.js` に保存されます。
-   `Ext.form.action.Submit` は
   `path/to/src/Ext/form/action/Submit.js` に保存されます。
-   `MyCompany.chart.axis.Numeric` は
   `path/to/src/MyCompany/chart/axis/Numeric.js` に保存されます。
-   `/path/to/src`は，そのアプリケーションにおいてクラスが保存されるディレクトリです。すべてのクラスが一つのディレクトリ下にあって，適切なネームスペースに配置されていると，デプロイやメンテナンスのためになります。

### 3) メソッドと変数

クラス名と同様，メソッドや変数の名前も英数字のみで表記します。数字は許されていますが，テクニカルタームでない限り使わない方がいいです。アンダースコアやハイフンなどの英数字以外の文字は使ってはいけません。メソッドと変数の名前は常にキャメルケース（camelCase)で書きます。これはアクロニムにも適用されます。例：

許容できるメソッド名:

   -   `encodeUsingMd5()`
   -   `getHTML()` ではなく `getHtml()`
   -   `getJSONResponse()` ではなく `getJsonResponse()`
   -   `parseXMLContent()` ではなく `parseXmlContent()`

許容できる変数名:

   -   `var isGoodName`
   -   `var base64Encoder`
   -   `var xmlReader`
   -   `var httpServer`

### 4) プロパティ

クラスのプロパティ名は上記のメソッドや変数とほぼ同じ規則に従います。例外はそれが静的定数の場合です。
定数を格納する静的なクラスプロパティは，すべて大文字で記述します。例：

-   `Ext.MessageBox.YES = "Yes"`
-   `Ext.MessageBox.NO = "No"`
-   `MyCompany.alien.Math.PI = "4.13"`

II. ハンズオン
--------------

### 1. 宣言

Ext JS4ではExt.defineでクラスの定義をします。クラスを作成するのに覚えなければならないのはこれだけです。基本的な構文:

    Ext.define({String} className, {Object} members, {Function} createdCallback);

-   className: クラス名
-   `members`はキーと値のペアでクラスメンバのコレクションを表わすオブジェクトです。
-   `createCallbackはオプション関数で，このクラスのすべての依存関係が解決され，クラス自身が完全に生成された時にコールバックされます。新しいクラス作成は非同期的な性質なので，このコールバックは多くの状況で役に立ちます。`

**例:**

    Ext.define('My.sample.Person', {
        name: 'Unknown',

        constructor: function(name) {
            if (name) {
                this.name = name;
            }

            return this;
        },

        eat: function(foodType) {
            alert(this.name + " is eating: " + foodType);

            return this;
        }
    });

    var aaron = new My.sample.Person("Aaron");
        aaron.eat("Salad"); // alert("Aaron is eating: Salad");

### 2. コンフィグレーション

Ext JS 4では，クラスが生成される前に、強力なExt.Classプリプロセッサが処理する，専用のコンフィグプロパティがあります。
上記の例をそれで書き直しましょう。

    Ext.define('My.own.Window', {
       /** @readonly */
        isWindow: true,

        config: {
            title: 'Title Here',

            bottomBar: {
                enabled: true,
                height: 50,
                resizable: false
            }
        },

        constructor: function(config) {
            this.initConfig(config);

            return this;
        },

        applyTitle: function(title) {
            if (!Ext.isString(title) || title.length === 0) {
                alert('Error: Title must be a valid non-empty string');
            }
            else {
                return title;
            }
        },

        applyBottomBar: function(bottomBar) {
            if (bottomBar && bottomBar.enabled) {
                if (!this.bottomBar) {
                    return new My.own.WindowBottomBar(bottomBar);
                }
                else {
                    this.bottomBar.setConfig(bottomBar);
                }
            }
        }
    });

And here's an example of how it can be used:

    var myWindow = new My.own.Window({
        title: 'Hello World',
        bottomBar: {
            height: 60
        }
    });

    alert(myWindow.getTitle()); // alerts "Hello World"

    myWindow.setTitle('Something New');

    alert(myWindow.getTitle()); // alerts "Something New"

    myWindow.setTitle(null); // alerts "Error: Title must be a valid non-empty string"

    myWindow.setBottomBar({ height: 100 }); // Bottom bar's height is changed to 100

これらの変更によって

-   My.own.Windowクラスのコード量が減り，機能的になりました。
-   コンフィグレーションは他のクラスのメンバーから完全にカプセル化されます。
-   すでに定義済みでなければクラスが生成されるときに，すべてのコンフィグプロパティに対するセッターとゲッター，それにapply\*とrest\*というメソッドが，クラスのプロトタイプの中に自動的に生成されます。

