var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];

function checkDir() {
    fs.readdir(dirName, function (err, fa) {
        if (err) {
            return console.log(err);
        }
        fa.forEach(function (filename) {
            if (path.extname(filename) == '.'+ process.argv[3]) {
                console.log(filename);
            }
        });
    });
}

checkDir();