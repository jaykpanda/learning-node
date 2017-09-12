var fs = require('fs');
var buf = require('buffer');
var fc = buf.toString(fs.readFileSync(process.argv[1]));
var nl = 0
for (var i=0; i<fc.length; i++) {
    if (fc[i] === '\n') {
        nl+=1;
    }
}
console.log(nl);
