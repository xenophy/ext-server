それぞれのプロパティが日付フォーマット関数であるオブジェクトハッシュ。
プロパティ名は、パースする関数のフォーマット文字列です。

日付パース関数がExt標準フォーマット文字列を要求したとき、このオブジェクトへ自動的に日付パース関数が格納されます。

カスタムパース関数はこのオブジェクトに格納し、キー名に関数名を設定することで
<a href="#!/api/Ext.Date-method-parse" rel="Ext.Date-method-parse" class="docClass" id="ext-gen5626">parse</a>.
メソッドによって使用することができます。

例:

    Ext.Date.parseFunctions['x-date-format'] = myDateParser;

パース関数は、Dateオブジェクトを返す必要があります。以下のパラメータが関数に渡されます。

<div class="mdetail-params"><ul>
<li><code>date</code> : String<div class="sub-desc">日付をパースする文字列</div></li>
<li><code>strict</code> : Boolean<div class="sub-desc">
日付の妥当性をチェックする場合はtrueを設定します
（これはJavaScriptの日付ロールオーバー問題を回避します）
（デフォルトはfalseである必要があります）。
無効な日付文字列の場合はnullを返します。
</div></li>
</ul></div>

その形式に従って日付がフォーマットされることを有効にするために、
対応するフォーマット関数は
<a href="#!/api/Ext.Date-property-formatFunctions" rel="Ext.Date-property-formatFunctions" class="docClass" id="ext-gen5628">formatFunctions</a>
プロパティに格納する必要があります。

