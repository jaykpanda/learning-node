var tr = require('through2');
var stream = tr(function (buf,_,next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(stream).pipe(process.stdout);