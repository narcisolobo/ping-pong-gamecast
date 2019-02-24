const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
mongoose.connect('mongodb://localhost/ping_pong_gamecast', { useNewUrlParser: true });

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function () {
    console.log('listening on port 8000');
});