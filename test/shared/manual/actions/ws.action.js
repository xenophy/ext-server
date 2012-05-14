
module.exports = {

    connect: function(socket) {

        socket.emit('news', { hello: 'world' });

    },

    disconnect: function() {
        console.log("disconnect.");
    },

    onMyEvent: function(data) {

        var socket = this.socket;

        socket.emit('news', { hello: 'world in MyEvent!!' });
        socket.broadcast.emit('news', { hello: 'world in MyEvent!!' });

    }

};

