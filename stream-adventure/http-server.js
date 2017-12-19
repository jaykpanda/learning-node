var http = require('http');
var tr = require('through2');
var server = http.createServer(function (req, res) {
    if(req.method === 'POST') {
        var stream = tr(function(buf,_,next) {
            this.push(buf.toString().toUpperCase());
            next();
        });
        req.pipe(stream).pipe(res);
    }
    else res.end(); 
});
server.listen(process.argv[2]);

