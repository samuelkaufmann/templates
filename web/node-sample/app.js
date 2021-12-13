const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', function(req, res) {
        res.render('pages/index');
});
var port = 3000;
server.listen(port);
