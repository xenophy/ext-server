Creates a throttled version of the passed function which, when called repeatedly and
rapidly, invokes the passed function only after a certain interval has elapsed since the
previous invocation.

This is useful for wrapping functions which may be called repeatedly, such as
a handler of a mouse move event when the processing is expensive.
