var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
	username: { type: String, min: [3, "min 3 chars"], max:[15, "max 15 chars"] },
	password: { type: String, min:[3, "too short"], max:[15, "too long"]}
})

var User = mongoose.model('User', UserSchema);

module.exports = User;

