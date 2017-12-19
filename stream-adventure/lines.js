var split = require('split');
var tr = require('through2');
var count = 1;
var stream = tr(function (buf,_,next) {
    if(count%2 === 0) {
        this.push(buf.toString().toUpperCase()+'\n');
    }
    else {
        this.push(buf.toString().toLowerCase()+'\n');
    }
    count++;
    next();
});
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);