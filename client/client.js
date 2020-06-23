var net = require('net');
var jsonStream = require('duplex-json-stream');

var user = process.argv[2];
console.log(user);

var socket = jsonStream(net.connect(9000,'172.17.0.2'));

socket.on('data',function (data) {
    console.log(data.user + '> ' +data.message);
})

process.stdin.on('data',function (data) {
    socket.write({
        user:user,
        message:data.toString().trim()
    })
})