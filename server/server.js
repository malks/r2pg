var net = require ('net');
var streamSet = require ('stream-set');

var clients = streamSet();
var server = net.createServer( function (socket) {
    console.log('someone connected');

    clients.forEach( function(otherSocket) {

        otherSocket.on('data', function (data){
            console.log("OTHERSOCKET onserver "+data);
            socket.write(data);
        })

        socket.on('data', function (data){
            console.log("SOCKET onserver "+data);
            otherSocket.write(data);
        })

    });
    clients.add(socket);
})

server.listen(9000);