
var socket = io.connect('https://localhost');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('MyEvent', { my: 'data' });
});

