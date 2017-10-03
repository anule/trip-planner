const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./models').db;


//logging middleware & body parser
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));



app.use('/', function(req, res){
  console.log('I\'m working!');
  res.send('Hello');
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error('Something has happened!😱', err);
  res.send('Something has happened on our end!');
});


app.listen(3000, (req, res) => {
  console.log("I'm listening...");
  db
    .sync()
    .then(function() {
      console.log('Synchronated the database');
    })
    .catch(function(err) {
      console.log('Trouble in cyberspace...', err, err.stack);
    });
});
