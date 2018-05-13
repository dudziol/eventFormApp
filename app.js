var express = require("express"),
	app = express();

app.get("/", function(req, res){
	res.send("Hello")
})

app.listen(3000, function(){
	console.log("Server running on port 3000");
})