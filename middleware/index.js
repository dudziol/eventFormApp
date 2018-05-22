var message = {
	empty: "Filling in the whole form is required.",
	onlyLetters: "First and Last Name can only contains letters [a-z] or [A-Z].",
	invalidEmail: "Not Valid Email.",
	invalidDate: "Not Valid Date.",
};

function sendResponse(res, message){
	res.status(400).send(message);
}

function isRequestValid(req, res, next){
	var guest = req.body.guest;
	for(field in guest){
		if (validator.isEmpty(guest[field])){
			sendResponse(res, message.empty);
			return false;
		}
	}
	if(!validator.isAlpha(guest.firstName) || !validator.isAlpha(guest.lastName)){
		sendResponse(res, message.onlyLetters);
		return false;
	}
	if(!validator.isEmail(guest.email)){
		sendResponse(res, message.invalidEmail);
		return false;
	}
	if(!validator.toDate(guest.date)){
		sendResponse(res, message.invalidDate);
		return false;
	}
	next();
}

module.exports = {isRequestValid};