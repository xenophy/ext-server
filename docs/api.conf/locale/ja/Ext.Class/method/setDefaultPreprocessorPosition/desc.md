このpre-processorを、必要に応じて、既存のpre-processorを基準に、スタック内の特定の位置へ挿入します。 例:

    Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {
        // Your code here

        if(fn) {
            fn.call(this, cls, data);
        }
    }).setDefaultPreprocessorPosition('debug', 'last');
