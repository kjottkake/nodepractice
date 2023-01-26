const express = require('express');

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000)

app.get('/', (req, res) => {
    res.send('<h1>It works bruh</h1>');
});

