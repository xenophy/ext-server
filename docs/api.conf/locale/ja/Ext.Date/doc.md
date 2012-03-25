日付を扱うのに便利な、静的メソッドのセット。

Ext.Dateを読み込むと、便宜上すべてのメソッドとプロパティがコピーされることに注意してください。

日付のパースと構文の書式に関しては、<a href="http://www.php.net/date">PHPのdate()</a>関数に準拠しています。
サポートするフォーマットもPHP版と同等です。

現在サポートされているすべての形式は以下の通りです:

<style>
div.member-table-wrap {
  border: solid 1px #E8E8E8;
  padding: 10px 15px;
 margin: 10px 0 14px 0;
  overflow-y: auto;
}
table.member-table {
  width: 960px;
}
table.member-table * {
  padding: 0px 10px 0px 10px;
  color: #314E64;
  font-family: "Menlo", "Courier New", Courier, monospace;
  vertical-align: top;
}
table.member-table th {
  text-align: left;
}
table.member-table td.member-sign {
  width: 70px;
}
table.member-table td.member-sign {
  text-align: center;
}
table.member-table td.member-desc {
  width: 590px;
}
table.member-table td.member-example {
  width: 300px;
}
</style>
<div class="member-table-wrap">
<table class="member-table">
<tbody>
<tr><th class="member-sign">記号   </th><th class="member-desc"> 説明</th><th class="member-example"> 戻り値の例</th></tr>
<tr><td class="member-sign">------ </td><td class="member-desc"> ----------------------------------------------------------------------- </td><td class="member-example"> -----------------------</td></tr>
<tr><td>  d    </td><td> 日。２桁の数字で、１桁の場合は左に0が付きます。                         </td><td> 01 から 31</td></tr>
<tr><td>  D    </td><td> 曜日。３文字の短いテキスト形式。                                        </td><td> Mon から Sun</td></tr>
<tr><td>  j    </td><td> 日。dと違い、１桁の場合も先頭に0は付きません。                          </td><td> 1 から 31</td></tr>
<tr><td>  l    </td><td> 曜日。フルスペル形式。                                                  </td><td> Sunday から Saturday</td></tr>
<tr><td>  N    </td><td> ISO-8601 形式の、曜日の数値表現。                                       </td><td> 1（月曜日）から 7（日曜日）</td></tr>
<tr><td></td></tr>
<tr><td>  S    </td><td> 英語形式の序数を表すサフィックス。2 文字。                              </td><td> st, nd, rd または th。</td></tr>
<tr><td>       </td><td>                                                                         </td><td> jと一緒に使用することができる。</td></tr>
<tr><td>  w    </td><td> 曜日。数値で表現した曜日。                                              </td><td> 0 (日曜)から 6 (土曜)</td></tr>
<tr><td>  z    </td><td> 年間の通算日。数字。(ゼロから開始)                                      </td><td> 0 から 364 (閏年で365)</td></tr>
<tr><td>  W    </td><td> ISO-8601 月曜日に始まる年単位の週番号。２桁の数字で、１桁の場合は左に   </td><td> 01 から 53</td></tr>
<tr><td>       </td><td> 0が付きます。                                                           </td><td> (例: 42は年の第 42 週目)</td></tr>
<tr><td>  F    </td><td> 月。フルスペルの文字。                                                  </td><td> January から December</td></tr>
<tr><td>  m    </td><td> 月。２桁の数字で、１桁の場合は左に0が付きます。                         </td><td> 01 から 12</td></tr>
<tr><td>  M    </td><td> 月。３文字の短いテキスト形式。                                          </td><td> Jan から Dec</td></tr>
<tr><td>  n    </td><td> 月。mと違い、１桁の場合も先頭に0は付きません。                          </td><td> 1 から 12</td></tr>
<tr><td>  t    </td><td> 指定した月の日数。                                                      </td><td> 28 から 31</td></tr>
<tr><td>  L    </td><td> 閏年であるかどうか。                                                    </td><td> 1なら閏年。0なら閏年ではない。</td></tr>
<tr><td>  o    </td><td> ISO-8601 形式の年。これは Y ほぼ同じだが、ISO 週番号（W）が前年あるい   </td><td> 例: 1998 あるいは 2004</td></tr>
<tr><td>       </td><td> は翌年に属する場合がある点で異なる。</td></tr>
<tr><td>  Y    </td><td> 年。4 桁の数字。                                                        </td><td> 例: 1999 または 2003</td></tr>
<tr><td>  y    </td><td> 年。2 桁の数字。                                                        </td><td> 例: 99 または 03</td></tr>
<tr><td>  a    </td><td> 午前または午後（小文字）                                                </td><td> am または pm</td></tr>
<tr><td>  A    </td><td> 午前または午後（大文字）                                                </td><td> AM または PM</td></tr>
<tr><td>  g    </td><td> 時。12時間単位。hと違い、１桁の場合も先頭に0は付きません。              </td><td> 1 から 12</td></tr>
<tr><td>  G    </td><td> 時。24時間単位。Hと違い、１桁の場合も先頭に0は付きません。              </td><td> 0 から 23</td></tr>
<tr><td>  h    </td><td> 時。12 時間単位。２桁の数字で、１桁の場合は左に0が付きます。            </td><td> 01 から 12</td></tr>
<tr><td>  H    </td><td> 時。24 時間単位。２桁の数字で、１桁の場合は左に0が付きます。            </td><td> 00 から 23</td></tr>
<tr><td>  i    </td><td> 分。２桁の数字で、１桁の場合は左に0が付きます。                         </td><td> 00 から 59</td></tr>
<tr><td>  s    </td><td> 秒。２桁の数字で、１桁の場合は左に0が付きます。                         </td><td> 00 から 59</td></tr>
<tr><td>  u    </td><td> ミリ秒                                                                  </td><td>  例:</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 001 (i.e. 0.001s) または</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 100 (i.e. 0.100s) または</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 999 (i.e. 0.999s) または</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 999876543210 (i.e. 0.999876543210s)</td></tr>
<tr><td>  O    </td><td> グリニッジ標準時 (GMT) との時差                                         </td><td> 例: +1030</td></tr>
<tr><td>  P    </td><td> グリニッジ標準時 (GMT) との時差。時間と分をコロンで区切った形式         </td><td> 例: -08:00</td></tr>
<tr><td>  T    </td><td> タイムゾーンの略称                                                      </td><td> 例: EST, MDT, PDT ...</td></tr>
<tr><td>  Z    </td><td> タイムゾーンのオフセット秒数。 UTC の西側のタイムゾーン用のオフセット</td></tr>
<tr><td>       </td><td> は常に負です。そして、 UTC の東側のオフセットは常に正です。             </td><td> -43200 から 50400</td></tr>
<tr><td>  c    </td><td> ISO 8601 日付</td></tr>
<tr><td>       </td><td> 注:                                                                     </td><td> Examples:</td></tr>
<tr><td>       </td><td> 1) 月／日が指定されない場合は現在の月／日がデフォルトになります。       </td><td> 1991 or</td></tr>
<tr><td>       </td><td>    時間のデフォルトは深夜、タイムゾーンのデフォルトはブラウザーの       </td><td> 1992-10 or</td></tr>
<tr><td>       </td><td>    タイムゾーンです。時間を指定するときは時／分の両方が必須です。       </td><td> 1993-09-20 or</td></tr>
<tr><td>       </td><td>    "T"デリミタ秒／ミリ秒とタイムゾーンは省略可能です。                  </td><td> 1994-08-19T16:20+01:00 or</td></tr>
<tr><td>       </td><td> 2) 秒の小数値を指定するときには最低でも1つの数字を指定する必要があ      </td><td> 1995-07-18T17:21:28-02:00 or</td></tr>
<tr><td>       </td><td>    ります。(最大の桁数については制限はありません)                       </td><td> 1996-06-17T18:22:29.98765+03:00 or</td></tr>
<tr><td>       </td><td>    また、"." または "," で区切ります。                                  </td><td> 1997-05-16T19:23:30,12345-0400 or</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 1998-04-15T20:24:31.2468Z or</td></tr>
<tr><td>       </td><td> サポートされる日付時刻の表現については、右側のサンプルを参照して        </td><td> 1999-03-14T20:24:32Z or</td></tr>
<tr><td>       </td><td> ください。                                                              </td><td> 2000-02-13T21:25:33</td></tr>
<tr><td>       </td><td>                                                                         </td><td> 2001-01-12 22:26:34</td></tr>
<tr><td>  U    </td><td> Unix Epoch (1970 年 1 月 1 日 0 時 0 分 0 秒) からの秒数                </td><td> 1193432466 から -2138434463</td></tr>
<tr><td>  MS   </td><td> Microsoft AJAX シリアライズ日付                                         </td><td> \/Date(1238606590509)\/ </td></tr>
<tr><td>       </td><td>                                                                         </td><td> (i.e. UTC milliseconds since epoch) または</td></tr>
<tr><td>       </td><td>                                                                         </td><td> \/Date(1238606590509+0800)\/</td></tr>
</tbody>
</table>


使用例: (注意: フォーマット記号と同じ文字列を記述したい場合、'¥'を付けてエスケープする必要があります)

    // サンプルの日付:
    // 'Wed Jan 10 2007 15:05:01 GMT-0600 (中央標準時)'
    // Sample date:
    // 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'
    
    var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
    console.log(Ext.Date.format(dt, 'Y-m-d'));                          // 2007-01-10
    console.log(Ext.Date.format(dt, 'F j, Y, g:i a'));                  // January 10, 2007, 3:05 pm
    console.log(Ext.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A')); // Wednesday, the 10th of January 2007 03:05:01 PM

役立つ標準の日付と時刻のパターンです。
これらはExt.Dateのソースの一部ではありません。
ですが、Ext.Dateを読み込んだ後で、スクリプトコードに以下のコードをコピーするだけでグローバルのDateオブジェクトでも利用可能になります。 必要に応じてパターンを追加・削除してください。

    Ext.Date.patterns = {
        ISO8601Long:"Y-m-d H:i:s",
        ISO8601Short:"Y-m-d",
        ShortDate: "n/j/Y",
        LongDate: "l, F d, Y",
        FullDateTime: "l, F d, Y g:i:s A",
        MonthDay: "F d",
        ShortTime: "g:i A",
        LongTime: "g:i:s A",
        SortableDateTime: "Y-m-d\\TH:i:s",
        UniversalSortableDateTime: "Y-m-d H:i:sO",
        YearMonth: "F, Y"
    };

使用例:

    var dt = new Date();
    console.log(Ext.Date.format(dt, Ext.Date.patterns.ShortDate));

カスタムフォーマットは、開発者によって専門的な形式と構文解析機能の両方が提供されるかもしれません。
これらの機能は
<a href="#!/api/Ext.Date-property-parseFunctions" rel="Ext.Date-property-parseFunctions" class="docClass">parseFunctions</a>
と
<a href="#!/api/Ext.Date-property-formatFunctions" rel="Ext.Date-property-formatFunctions" class="docClass">formatFunctions</a>
に格納されます。

