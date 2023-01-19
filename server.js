const { createServer } = require("http"); //http server
const fs = require('fs'); //read from file


//create a text file
const poem = 
`Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;

fs.writeFile('test.txt', poem, (err) => {
  if (err) {
    console.log(`failed to write to file: ${err}`);
  } else {
    console.log('Poem written to test.txt');
  }
});

//read the text file


//create server, output content of text file into server
let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
        console.log(err);
        response.end('An error occurred');
        response.end(data);
        } else {
        // response.end(data);
        response.write(`
        <h1>Contents of test.txt:</h1>
        <p>${data}</p>`);
        response.end();
        }
    });
      
    // response.write(`
    // <h1>Hello!</h1>
    // <p>You asked for <code>${request.url}</code></p>`);
    // response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

