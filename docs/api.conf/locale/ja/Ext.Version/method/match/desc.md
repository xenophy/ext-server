このバージョンが引数で指定したバージョンと一致するかどうかを返します。例:

    var version = new Ext.Version('1.0.2beta');
    console.log(version.match(1)); // True
    console.log(version.match(1.0)); // True
    console.log(version.match('1.0.2')); // True
    console.log(version.match('1.0.2RC')); // False
