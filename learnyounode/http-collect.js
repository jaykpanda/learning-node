var http = require('http');
site=process.argv[2];

http.get(site, function(response) {
    metadata = '';
    response.on('data', function(data) {
        metadata = metadata.concat(data.toString());
    });
    response.on('end', function() {
        console.log(metadata.length);
        console.log(metadata);
    });
});