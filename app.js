const express = require('express');
const fs = require('fs');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.set('port', (process.env.PORT || 5000));

const hostname = 'localhost';

let english_idioms = require(__dirname + '/english_idioms.json');

app.use(parser.json()); // support json encoded bodies
app.use(parser.urlencoded({extended: true})); // support encoded bodies

app.use(express.static(__dirname + '/www'));
app.use(cors());

// app.use((req, res, next) =>{
//   console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
//   next();
// });

app.get('/dictionary-api', (req, res) => {
	res.json(english_idioms);
});

app.post('/dictionary-api', (req, res) => {
  english_idioms.push(req.body);
	res.json(english_idioms);
});

app.delete("/dictionary-api/:term", (req, res) => {
  english_idioms = english_idioms.filter(def => def.term.toLowerCase() !== req.params.term.toLowerCase())
	res.json(english_idioms);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
