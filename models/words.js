var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WordSchema = new Schema({
	fr: { type: String, min: [1, "fail"]},
	en: { type: String, min: [1, "fail"]},
	cat: { type: Number }
})

var Word = mongoose.model('Word', WordSchema);

module.exports = Word;