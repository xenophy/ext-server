フレームワーク全体で非常に一般的に使用されているメソッドです。
メソッドのラッパーとして使用されます。
ラップされた関数は、以下のような「柔軟な」値の設定が可能です。

- name と value の２つの引数を設定します
- 一つのオブジェクトに、name - value のペアを複数設定します

For example:

    var setValue = Ext.Function.flexSetter(function(name, value) {
        this[name] = value;
    });

    // 次に、
    // name - value の１つのペアを指定
    setValue('name1', 'value1');

    // name - value のペアを複数指定
    setValue({
        name1: 'value1',
        name2: 'value2',
        name3: 'value3'
    });

