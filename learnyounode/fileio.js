var fs = require('fs');
var buf = new Buffer(fs.readFileSync(process.argv[2]));
var fc = buf.toString();
var nl = 0
for (var i=0; i<fc.length; i++) {
    if (fc[i] == '\n') {
        nl+=1;
    }
}
console.log(nl);
