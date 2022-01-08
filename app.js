const express = require('express');
const app = express();

const rotaFilmes = require('./routes/filmes');

app.use('/filmes', rotaFilmes);

module.exports = app;