const express = require('express');

const app = express();


app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));


app.get('/', (req, res) => {
    res.send('<h1>It works bruh</h1>');
});


app.get('/index', (req, res)=> {
    res.render('index');
})

app.get('/deeznuts', (req, res)=> {
    res.send('<h1>what what yeah!</h1>');
})


app.listen(3000);
console.log('Server is listening on port 3000');
