var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	flash = require("connect-flash"),
	session = require("express-session"),
	cookieParser = require("cookie-parser"),
	middleware = require("./middleware")
	validator = require('validator'),
	Guest = require("./models/guest");


// APP CONFIG
mongoose.connect("mongodb://localhost/eventForm_v2");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ROUTES
app.get("/", function(req, res){
	res.render("index");
});

app.post("/", middleware.isRequestValid, function(req, res){
	Guest.create(req.body.guest, function(err, newGuest){
		if(err){
			req.flash("error", "Something went wrong! Try again later.");
			res.redirect("/");
		}else{
			req.flash("success", "You've successfully signed up for an event!");
			res.redirect("/");
		}
	});
});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});