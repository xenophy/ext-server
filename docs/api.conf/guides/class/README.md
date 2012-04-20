# Class System

Ext Serverには、Ext JS 4で採用されたのと共通したクラスシステムが実装されています。
これにより、Ext Serverではクラスベースのプログラミングをすることができます。

I. 概要
-------

JavaScriptはクラスレスのプロトタイプ指向言語です。
この言語の本来の最も強力な特徴の1つは柔軟性です。
そのため同じ仕事を多くの方法で（コーディングスタイルやテクニックを使って）実装できます。
しかし、そのことはコストの予測を難しくする原因でもあります。
統一された構造のないJavaScriptコードは、理解にくく、メンテナンスや再利用がしやすいとはいえないもになる場合があります。

一方、クラスベースのプログラミングというのは、オブジェクト指向モデルの中で最もポピュラーなものです。
クラスベースの言語にはたいてい強固な型定義、カプセル化、標準的なコーディング規則があります。
一般的に、開発者が膨大な規則に準拠して記述したコードは、時間が経っても読みやすく保守性や拡張性が高い傾向があります。
しかしそれらの言語には、JavaScriptなどの言語で見られるような動的な機能はありません。
どちらのアプローチも一長一短ですが、短所を隠しながら、両方の長所を同時に手にできないのでしょうか。
Ext JS 4やExt Serverのクラスシステムはそれを解決します。

II. 名付け規則
--------------

### 1) クラス

クラス名は英数字のみで記述します。数字は許されていますが、テクニカルタームでない限り使わない方がいいです。アンダースコアやハイフンなどの英数字以外の文字は使ってはいけません。例：

-   `MyCompany.useful_util.Debug_Toolbar` これはNGです。
-   `MyCompany.util.Base64` これはOKです。

クラス名は、オブジェクトのプロパティのドット表記をうまく使って、パッケージごとにグループ化する必要があります。ユニークなトップレベルのネームスペースは一つだけにして、それにクラス名を続けます。例：

-   `MyCompany.data.CoolProxy`
-   `MyCompany.Application`

トップレベルのネームスペースと実際のクラス名はアッパーキャメルケース（CamelCase）で書き、それ以外は全て小文字で書きます。例：

-   `MyCompany.form.action.AutoLoad`

Ext Server内部のものでないクラスは、Extをトップレベル名前空間として使わないでください。
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
-   `/path/to/src`は、そのアプリケーションにおいてクラスが保存されるディレクトリです。すべてのクラスが一つのディレクトリ下にあって、適切なネームスペースに配置されていると、デプロイやメンテナンスのためになります。

### 3) メソッドと変数

クラス名と同様、メソッドや変数の名前も英数字のみで表記します。数字は許されていますが、テクニカルタームでない限り使わない方がいいです。アンダースコアやハイフンなどの英数字以外の文字は使ってはいけません。メソッドと変数の名前は常にキャメルケース（camelCase)で書きます。これはアクロニムにも適用されます。例：

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
定数を格納する静的なクラスプロパティは、すべて大文字で記述します。例：

-   `Ext.MessageBox.YES = "Yes"`
-   `Ext.MessageBox.NO = "No"`
-   `MyCompany.alien.Math.PI = "4.13"`

III. ハンズオン
--------------

### 1. 宣言

Ext ServerではExt.defineでクラスの定義をします。クラスを作成するのに覚えなければならないのはこれだけです。基本的な構文:

    Ext.define({String} className, {Object} members, {Function} createdCallback);

-   `className`: クラス名
-   `members`はキーと値のペアでクラスメンバのコレクションを表わすオブジェクトです。
-   `createCallback`はオプション関数で、このクラスのすべての依存関係が解決され、クラス自身が完全に生成された時にコールバックされます。クラス作成は非同期的に動作しますのでこのコールバックは多くの状況で役に立ちます。

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
            console.log(this.name + " is eating: " + foodType);

            return this;
        }
    });

    var aaron = new My.sample.Person("Aaron");
        aaron.eat("Salad"); // console.log("Aaron is eating: Salad");

### 2. コンフィグレーション

Ext Serverには、configプロパティがあり、Ext.Classプリプロセッサが処理します。
コンフィグオプションは、このconfigプロパティの中に記述します。
すると、クラスシステムがsetter、getterを自動的に生成してくれます。
また、apply+キャピタライズされたコンフィグ オプション名 というメソッドを定義しておくと、
setterが実行されるタイミングで呼び出されるので、任意の処理を挟み込むことができます。

    Ext.define('My.test.Class', {
       /** @readonly */
        isWindow: true,

        config: {
            title: 'Title Here'
        },

        constructor: function(config) {
            this.initConfig(config);

            return this;
        },

        applyTitle: function(title) {
            if (!Ext.isString(title) || title.length === 0) {
                console.log('Error: Title must be a valid non-empty string');
            }
            else {
                return title;
            }
        }

    });

このように定義されたクラスの場合、次のようにgetter、setterが使用できます。

    var myClass = new My.test.Class({
        title: 'Hello World'
    });

    console.log(myClass.getTitle()); // "Hello World"

    myClass.setTitle('Something New');

    console.log(myClass.getTitle()); // "Something New"

    myClass.setTitle(null); // "Error: Title must be a valid non-empty string"

    console.log(myClass.getTitle()); // "Something New"

この機能により、

-   My.test.Classクラスのコード量が減り、機能的になりました。
-   コンフィグレーションは他のクラスのメンバーから完全にカプセル化されます。
-   すでに定義済みでなければクラスが生成されるときに、すべてのコンフィグプロパティに対するsetterとgetterが、クラスのプロトタイプの中に自動的に生成されます。

### Statics

staticsコンフィグオプションにオブジェクトリテラルを定義すると、
静的メンバーを定義することができます。

    Ext.define('Computer', {
        statics: {
            instanceCount: 0,
            factory: function(brand) {
                // 静的メソッド内でのthisはクラス自身を参照します
                return new this({brand: brand});
            }
        },

        config: {
            brand: null
        },

        constructor: function(config) {
            this.initConfig(config);

            // インスタンスのselfプロパティはそのクラスを参照します
            this.self.instanceCount ++;

            return this;
        }
    });

    var dellComputer = Computer.factory('Dell');
    var appleComputer = Computer.factory('Mac');

    // 自動生成されたgetterメソッドでコンフィグの値を取り出す
    console.log(appleComputer.getBrand());

    console.log(Computer.instanceCount); // Alerts "2"

### シングルトン

クラスのインスタンスが1つしか作成されないことを保証する、
シングルトン パターンを実現するための機能があります。

    Ext.define('My.Singleton', {
        singleton: true,
        statics: {
            staticMethod: function () {
                console.log('staticMethod called.');
            }
        },
        dynamicMethod: function() {
            console.log('dynamicMethod called.');
        }
    });
    My.Singleton.dynamicMethod();
    // My.Singleton.staticMethod(); // 静的メンバにアクセスできない

オブジェクト リテラルにsingleton: trueと設定するだけです。
クラスのインスタンス化もする必要はありません。
シングルトンでは、静的メンバにあくせすすることはできません。

### 継承

クラスを継承する場合は、extendコンフィグを使います。
extendコンフィグに継承元のクラス名を文字列で指定します。

    Ext.define('My.Class', {
        extend: 'Ext.Base',
        someMethod: function () {
            console.log('My.Class.someMethod called.');
        }
    });

    var c = new My.Class;

    console.log(My.Class.getName());  // My.Class
    c.someMethod();                   // My.Class.someMethod called.

この例では、My.ClassはExt.Baseを継承しています。
継承しているのを確認するために、
`console.log(My.Class.getName());` と、Ext.Baseが持っているStaticメソッドを呼び出しています。

継承元のクラスのメソッドを呼び出すにはcallParentを使います。

    MyClass.callParent(arguments);


### Mixin

Mixinでは、再利用可能な振る舞いと設定の一式を定義し、既存のクラスに「ミックス」することができます。この機能をクラスで使うには、クラスを定義する際にMixinコンフィグを記述するだけです。
例えば、あるクラスにイベント リスナー機能を持たせたい場合には、
Ext.util.Observable Mixinを指定します。

    mixin: ['Ext.util.Observable'],

クラスに適用できるMixinの数には制限はないので、多重継承を実現する方法として利用できます。

IV. ダイナミック ローディング
----------------------------

前出の継承の例では、Ext.Baseを継承したクラスを作りましたが、
その中でExt.Baseの定義をしているソースファイルを読み込んでいないことにお気づきだったでしょうか。
ソースファイルを読み込んでいないに、どうしてExe.Baseを継承することができたのでしょう。

Ext Serverでは、Ext JS 4で採用されたダイナミック ローディングを使うことができます。
クライアント サイドにおけるダイナミック ローディングでは、
デバッグ時に対象となるクラスの特定が簡単になるなどのメリットがありましたが、
サーバー サイドでのダイナミック ローディングは素晴らしく便利です。

前の例でも、このダイナミック ローディングが動作して、Ext.Baseを定義しているファイルを動的にロードしてくれていたのです。
extendに指定したクラス名から、実際のクラス定義があるソースファイルの場所を導き出し、そのファイルをロードしたのです。
 
    Ext.require('Ext.Base', function() {
        console.log(Ext.Base.getName());  // Ext.Base
    });

このようにExt.requireメソッドを使うと、ロードするファイルを指定することができます。
このメソッドの第2引数に関数を渡すと、ロードが実行された後にその関数が呼び出されます。

    Ext.define('My.Class', {
        extend: 'Ext.Base',
        requires: ['Ext.util.Observable'],
        someMethod: function () {
            console.log('My.Class.someMethod called.');
        }
    });
 
また、上記のようにクラス定義のrequiresコンフィグにクラス名を配列でセットすると、
そのクラスのファイルを読み込んでくれます。
クラス間の依存関係を、このようにして定義しておくことができます。


