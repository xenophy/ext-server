ローダーのコンフィグを設定します。
ext-(debug).jsがページにインクルードされてからExt.onReadyが実行される前に呼び出す必要があります。例:

    <script type="text/javascript" src="ext-core-debug.js"></script>
    <script type="text/javascript">
        Ext.Loader.setConfig({
          enabled: true,
          paths: {
              'My': 'my_own_path'
          }
        });
    </script>
    <script type="text/javascript">
        Ext.require(...);

        Ext.onReady(function() {
          // application code here
        });
    </script>

指定できるプロパティについては
<a href="#!/api/Ext.Loader" rel="Ext.Loader" class="docClass">Ext.Loader</a>
のコンフィグ オプションを参照してください。
