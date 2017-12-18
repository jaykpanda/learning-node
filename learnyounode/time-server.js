var strftime = require('strftime');
var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var str = strftime('%F %H:%M', date);
    socket.write(str + "\n");
    socket.end();
});
server.listen(process.argv[2]);
