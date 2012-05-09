ユーザーエージェントの判定をします。
引数にエージェントのIDを渡して判定することもできますが、
this.is.iPhone のように、プロパティとして使うこともできます。

例:

    if( this.is.iPhone ) {
        agent = 'iPhone';
    }

は

    if( this.is('iPhone')) {
        agent = 'iPhone';
    }

と等価です。
