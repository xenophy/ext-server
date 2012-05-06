
module.exports = {

    connect: function(socket) {
        socket.emit('news', { hello: 'world' });
    },

    disconnect: function() {
        console.log("disconnect.");
    },

    onMyEvent: function(data) {
        console.log(data);
    }

};

