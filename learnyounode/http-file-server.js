var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);
