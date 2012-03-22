反復処理可能なもの（インデックスとlengthプロパティ）を本当の配列に変換します。
Converts any iterable (numeric indices and a length property) into a true array.

    function test() {
        var args = Ext.Array.toArray(arguments),
            fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);

        alert(args.join(' '));
        alert(fromSecondToLastArgs.join(' '));
    }
    
    test('just', 'testing', 'here'); // alertで'just testing here';
                                     // alertで'testing here';

    Ext.Array.toArray(document.getElementsByTagName('div')); // ノードリストを配列に変換します
    Ext.Array.toArray('splitted'); // ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']　を返します
    Ext.Array.toArray('splitted', 0, 3); // ['s', 'p', 'l', 'i'] を返します

{@link Ext#toArray Ext.toArray} は {@link Ext.Array#toArray Ext.Array.toArray} のエイリアスです。
