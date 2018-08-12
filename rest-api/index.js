var express = require('express');
var Router = require('express').Router();
var bodyParser = require('body-parser');
var Users = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
	Users.getAll(req, res);
	res.send();
});

app.post('/api/users', function(req, res) {
	Users.setAll(req, res);
	res.send();
});

app.get('/api/users/:id', function(req, res) {
	Users.getOne(req, res);
	res.send();
});

app.put('/api/users/:id', function(req, res) {
	Users.updateOne(req, res);
	res.send();
});

app.delete('/api/users/:id', function(req, res) {
	Users.deleteOne(req, res);
	res.send();
});
// Router.route('/api/users')
// 	.get(function(req, res) {
// 		Users.getAll(req, res);
// 	})
// 	.post(function(req, res) {
// 		Users.setAll(req, res);
// 	});

// Router.route('/api/users/:id')
// 	.get(function(req, res) {
// 		Users.getOne(req, res);
// 	})
// 	.put(function(req, res) {
// 		Users.updateOne(req, res);
// 	})
// 	.delete(function(req, res) {
// 		Users.deleteOne(req, res);
// 	});
// app.get('/api/users', (req, res) => res.send('Hello World!'))

// Do not touch this invocation of the `listen` method
app.listen('8888', function() {
	console.log('listening on 8888');
});

// Do not touch the exports object
module.exports = app;
