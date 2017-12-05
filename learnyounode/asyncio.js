var fs = require('fs');
var nl = 0;

function checkFile(callback) {
    fs.readFile(process.argv[2], function doneRead(err, content) {
        if (err) {
            return console.log(err);
        }
        var buf = new Buffer(content);
        var fc = buf.toString();
        for (var i=0; i<fc.length; i++) {
            if (fc[i] == '\n') {
                nl+=1;
            }
        }
        callback();
        });
    }
    
    function logNewLine() {
        console.log(nl);
    }

checkFile(logNewLine);