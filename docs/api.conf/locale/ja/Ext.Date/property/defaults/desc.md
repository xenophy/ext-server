日付をパースする際に使用する、デフォルト値を含んだオブジェクト。

次のプロパティが存在します:

<div class="mdetail-params"><ul>
   <li><code>y</code> : Number<div class="sub-desc">年の初期値。 (デフォルトはundefined) </div></li>
   <li><code>m</code> : Number<div class="sub-desc">1から始まる月の初期値。 (デフォルトはundefined)</div></li>
   <li><code>d</code> : Number<div class="sub-desc">日の初期値。 (デフォルトはundefined)</div></li>
   <li><code>h</code> : Number<div class="sub-desc">時の初期値。 (デフォルトはundefined)</div></li>
   <li><code>i</code> : Number<div class="sub-desc">分の初期値。 (デフォルトはundefined)</div></li>
   <li><code>s</code> : Number<div class="sub-desc">秒の初期値。 (デフォルトはundefined)</div></li>
   <li><code>ms</code> : Number<div class="sub-desc">ミリ秒の初期値。 (デフォルトはundefined)</div></li>
</ul></div>

これらのデフォルト値は、{@link #parse}メソッドを使用してオーバーライドします

<b>注意：サマータイム（DST）が存在する国では、DSTに切り替わる時間と時間に関するプロパティ（<tt>h</tt>, <tt>i</tt>, <tt>s</tt>, <tt>ms</tt>）の設定が同じタイミングである可能性があります。 これを考慮することは開発者の役割です。</b>

使用例:

    // デフォルトの日の値を、月の最初の日に設定します。
    Ext.Date.defaults.d = 1;

    // 年と月を含む、２月の日付文字列をパースします。
    // たとえば、2009年3月31日に次の日付文字列をパースするとき、
    // デフォルトの日の値を1と設定することで、奇妙なロールオーバー問題を回避します。
    Ext.Date.parse('2009-02', 'Y-m'); // 2009年2月1日を表す日付オブジェクトを返します。

