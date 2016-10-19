var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(1000, function () {
  console.log('jorgeromeromoli listening on port 1000!');
});



app.get('/', function (req, res) {
  res.render('index');
});


app.get('/docs/mongodbapi/index', function (req, res) {
  res.render('docs/mongodbapi/index');
});

app.get('/docs/mongodbapi/insert', function (req, res) {
  res.render('docs/mongodbapi/insert');
});

app.get('/docs/mongodbapi/read', function (req, res) {
  res.render('docs/mongodbapi/read');
});

app.get('/docs/mongodbapi/update', function (req, res) {
  res.render('docs/mongodbapi/update');
});

app.get('/docs/mongodbapi/delete', function (req, res) {
  res.render('docs/mongodbapi/delete');
});
