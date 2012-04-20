実行されるコールバック関数。 典型的なフォーマット:

    function(cls, data, fn) {
        // Your code here

        // Execute this when the processing is finished.
        // Asynchronous processing is perfectly ok
        if(fn) {
            fn.call(this, cls, data);
        }
    });
