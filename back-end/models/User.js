// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String
	email: String
});

var User = mongoose.model('User', userSchema);
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

module.exports = User;
