配列の一部の簡易コピーを返します。
これは、ネイティブの"Array.prototype.slice.call(array, begin, end)"を呼び出すことと同等です。
引数オブジェクトはsliceメソッドを提供しませんが、コンテキストオブジェクトはArray.prototype.sliceを使用することができますので、引数の「array」に引数オブジェクト「arguments」を指定する場合に、このメソッドはよく使用されます。
