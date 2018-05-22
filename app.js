var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	validator = require('validator'),
	Guest = require("./models/guest");


// APP CONFIG
mongoose.connect("mongodb://localhost/eventForm_v1");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES
app.get("/", function(req, res){
	res.render("index");
});

app.post("/", isRequestValid, function(req, res){
	// console.log(req.body.guest)
	// Guest.create(req.body.guest, function(err, newGuest){
	// 	if(err){
	// 		console.log(err);
	// 		res.render("index");
	// 	}else{
	// 		res.redirect("/");
	// 	}
	// });
	res.send("help");

});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});

function isRequestValid(req, res, next){
	var guest = req.body.guest;
	for(field in guest){
		if (validator.isEmpty(guest[field])){
			res.status(400).send(field + " cannot be empty");
			return false;
		}
	}
	if(!validator.isAlpha(guest.firstName) || !validator.isAlpha(guest.lastName)){
		res.status(400).send("First and Last Name can only contains letters [a-z] or [A-Z]");
		return false;
	}
	if(!validator.isEmail(guest.email)){
		res.status(400).send("Not Valid Email");
		return false;
	}
	if(!validator.toDate(guest.date)){
		res.status(400).send("Not Valid Date");
		return false;
	}
	next();
}