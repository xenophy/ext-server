Extの現在のインタンスを参照するグローバル ネームスペース(Node.jsではglobal)でのプロパティ名です。
これは通常<code>"Ext"</code>です、しかし、ExtJSのサンドボックス ビルドが使われている時は違う名前になります。
コードが<code>eval</code>で使われるか<code>new Function</code>で生成されるように生成されいて、
Extのグローバル インスタンスを参照する必要がある場合には、
コードに組み入れられなければならない名前です。
