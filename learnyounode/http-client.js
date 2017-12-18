var http = require('http');
site=process.argv[2];

http.get(site, function(response) {
    response.on('data', function(data) {
        console.log(data.toString());
    });
});