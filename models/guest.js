var mongoose = require("mongoose");

var guestSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	date: String
});

module.exports = mongoose.model("Guest", guestSchema);