名前空間を作成し、作成したオブジェクトにvalueを挿入します。

    Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);

    alert(MyCompany.pkg.Example === someObject); // alerts true

