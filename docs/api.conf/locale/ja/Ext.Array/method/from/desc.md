Converts a value to an array if it's not already an array; returns:

- An empty array if given value is `undefined` or `null`
- Itself if given value is already an array
- An array copy if given value is {@link Ext#isIterable iterable} (arguments, NodeList and alike)
- An array with one item which is the given value, otherwise
