const express = require('express');
const path = require('path');
const api = require('./api');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.use('/api', api);

module.exports = app;
