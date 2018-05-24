var missingValueError = "This field is required";

var data = [
	name = {
		element: "name",
		notValidError: "You can use only: A-Z, a-z"
	},
	lastName = {
		element: "lastName",
		notValidError: "You can use only: A-Z, a-z"
	},
	email = {
		element: "email",
		notValidError: "You have to follow pattern: xxx@xxx.xx"
	},
	date = {
		element: "date",
		notValidError: missingValueError
	},
];

function isFormValid(data){
	var element, isElementValid;
	for(var i=0; i<data.length; i++){
		element = document.getElementById(data[i].element);
		if(!element.validity.valid){
			if(element.validity.valueMissing){
				isElementValid = false;
				addMessage(data[i].element, missingValueError);
				break;
			} else{
				addMessage(data[i].element, data[i].notValidError);
				isElementValid = false;
				break;
			}
		} else{
			removeMessage(data[i].element);
			isElementValid = true;
		}
	}
	return isElementValid;
};

function createMessageSelector(id){
	return document.getElementById(id + "Message");
};
function addMessage(id, message){
	createMessageSelector(id).classList.add("error");
	createMessageSelector(id).innerHTML = message;
};
function removeMessage(id){
	createMessageSelector(id).classList.remove("error");
	createMessageSelector(id).innerHTML = "";
};

document.getElementById("submit").addEventListener("click", function(event){
	isFormValid(data);
	if(!isFormValid(data)){
		event.preventDefault();
	}
});