const http = require('http');

http.createServer((req, res) =>{
    res.write('hello it worked.');
    res.end();
}).listen(5000, () => console.log("The server is running!"));

