それぞれのプロパティが日付フォーマット関数であるオブジェクトハッシュ。 プロパティ名は、作成される日付文字列に対応するフォーマット文字列です。

日付フォーマット関数がExt標準フォーマット文字列を要求したとき、このオブジェクトへ自動的に日付フォーマット関数が格納されます。

カスタムフォーマット関数はこのオブジェクトに格納し、キー名に関数名を設定することで
<a href="#!/api/Ext.Date-method-format" rel="Ext.Date-method-format" class="docClass" >format</a>
メソッドによって使用することができます。 例:

    Ext.Date.formatFunctions['x-date-format'] = myDateFormatter;

フォーマット関数は、渡されたDateオブジェクトを文字列で表現されたものを返す必要があります。以下のパラメータが関数に渡されます。

<div class="mdetail-params">
    <ul>
        <li>
        <code>date</code> : Date<div class="sub-desc">フォーマットするDateオブジェクト</div>
        </li>
    </ul>
</div>

また、その形式で *パース* する日付文字列を有効にする場合、対応する関数を
<a href="#!/api/Ext.Date-property-parseFunctions" rel="Ext.Date-property-parseFunctions" class="docClass" >parseFunctions</a> property.
プロパティに格納する必要があります。
