設定オブジェクトのリストから、アクセサメソッドを自動的に生成します。 使用例:

    Ext.define('SmartPhone', {
         config: {
             hasTouchScreen: false,
             operatingSystem: 'Other',
             price: 500
         },
         constructor: function(cfg) {
             this.initConfig(cfg);
         }
    });

    var iPhone = new SmartPhone({
         hasTouchScreen: true,
         operatingSystem: 'iOS'
    });

    iPhone.getPrice(); // 500;
    iPhone.getOperatingSystem(); // 'iOS'
    iPhone.getHasTouchScreen(); // true;
