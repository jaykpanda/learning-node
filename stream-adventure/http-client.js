var req = require('request');
var r = req.post('http://localhost:8099');
process.stdin.pipe(r).pipe(process.stdout);
