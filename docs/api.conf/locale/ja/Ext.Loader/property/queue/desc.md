Maintain the queue for all dependencies. Each item in the array is an object of the format:

    {
         requires: [...], // The required classes for this queue item
         callback: function() { ... } // The function to execute when all classes specified in requires exist
    }
