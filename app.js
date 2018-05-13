var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	Guest = require("./models/guest");


// APP CONFIG
mongoose.connect("mongodb://localhost/eventForm");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES
app.get("/", function(req, res){
	res.render("index");
});

app.post("/", function(req, res){
	res.send("POSTED");
});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});