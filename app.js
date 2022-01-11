const express = require('express');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const rotaFilmes = require('./routes/filmes');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Filme API",
			version: "1.0.0",
			description: "API de filmes para o projeto Desenvolvimento Web",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ['./routes/*.js'],
};
const specs = swaggerJsDoc(options);

app.use("/", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/filmes', rotaFilmes);

module.exports = app;