var User = require('../models/User.js');
// Given the name of a user, retrieve their record from the database
exports.getUserByName = function(name, callback) {
	User.findOne({ name: name }, callback);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function(name, newEmail, callback) {
	User.update({ name: name }, { email: newEmail }, {}, callback);
};

// Read all users from the database at once
exports.readAllUsers = function(callback) {
	User.find(callback);
};
