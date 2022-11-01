const express = require('express');
const app = express();

app.use(express.static(__dirname + './main.css'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
  console.log('🚀 server on!');
});
