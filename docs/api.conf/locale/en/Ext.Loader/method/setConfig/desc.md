Set the configuration for the loader. This should be called right after ext-(debug).js
is included in the page, and before Ext.onReady. i.e:

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

Refer to config options of {@link Ext.Loader} for the list of possible properties
