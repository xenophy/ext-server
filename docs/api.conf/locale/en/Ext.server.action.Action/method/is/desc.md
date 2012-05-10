It is the method judging of the user agent.
Returns whether this user agent matches the supplied argument.
this.is.iPhone のように、プロパティとして使うこともできます。
Like `'this.is.iPhone'`, You can use as a property.

例:

    if( this.is.iPhone ) {
        agent = 'iPhone';
    }

Above is equivalent with:

    if( this.is('iPhone')) {
        agent = 'iPhone';
    }

