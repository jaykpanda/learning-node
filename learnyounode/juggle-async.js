var http = require('http');
var respArr = ['','',''];
var done = [false,false,false];

function httpGet(index) {
    http.get(process.argv[2+index], function(resp) {
        resp.on('data', function(data) {
            respArr[index] = respArr[index].concat(data.toString());
        });
        resp.on('end', function() {
            done[index] = true;
            printStrings();
        });
    });
}

function printStrings() {
    if(done[0] && done[1] && done[2]) {
        for (var i=0; i<3; i++) {
            console.log(respArr[i]);
        }
    }
}

for (var i=0; i<3; i++) {
    httpGet(i);
}
