ネームスペースからファイル パスへのマッピングです。

    {
        'Ext': '.', // This is set by default, Ext.layout.container.Container will be
                    // loaded from ./layout/Container.js

        'My': './src/my_own_folder' // My.layout.Container will be loaded from
                                    // ./src/my_own_folder/layout/Container.js
    }

全ての相対パスは現在のHTMLドキュメントからの相対パスです。
指定しない場合は、<code>other.awesome.class</code>
の場合であれば、<code>./Other/awesome/Class.js</code>
をロードします。
