var fs = require('fs');
var filePath = process.argv[2];
var extName = process.argv[3];

fs.readdir(filePath, function (err, list) {
    if (err) {
        return console.log(err);
    }
    for(var i=0; i<list.length; i++) {
        if(list[i].split('.')[1] == extName) {
            console.log(list[i]);
        }
    }
});
