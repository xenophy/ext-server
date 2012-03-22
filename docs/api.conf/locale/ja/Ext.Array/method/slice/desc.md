Returns a shallow copy of a part of an array. This is equivalent to the native
call "Array.prototype.slice.call(array, begin, end)". This is often used when "array"
is "arguments" since the arguments object does not supply a slice method but can
be the context object to Array.prototype.slice.
