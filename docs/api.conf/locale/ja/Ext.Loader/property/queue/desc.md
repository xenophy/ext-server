全ての依存関係のキューを保持します。
配列中の各項目は次のフォーマットです。

    {
         requires: [...], // The required classes for this queue item
         callback: function() { ... } // The function to execute when all classes specified in requires exist
    }
