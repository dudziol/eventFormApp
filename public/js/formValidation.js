var data = [
	name = {
		element: "name",
		missingValueError: "This field is required",
		notValidError: "You can use only: A-Z, a-z"
	},
	lastName = {
		element: "lastName",
		missingValueError: "This field is required",
		notValidError: "You can use only: A-Z, a-z"
	},
	email = {
		element: "email",
		missingValueError: "This field is required",
		notValidError: "You have to follow pattern: abc@abc"
	},
	date = {
		element: "date",
		missingValueError: "This field is required",
		notValidError: "This field is required"
	},
]

function isFormValid(data){
	var element, isElementValid;
	for(var i=0; i<data.length; i++){
		element = $("#" + data[i].element)[0];
		if(!element.validity.valid){
			if(element.validity.valueMissing){
				isElementValid = false;
				addMessage(data[i].element, data[i].missingValueError);
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
}

function addMessage(id, message){
	$("#"+id+"Message").text(message);
    $("#"+id+"Message").addClass("error");
}
function removeMessage(id, message){
	$("#"+id+"Message").text("");
    $("#"+id+"Message").removeClass("error");
}

$("#submit").on("click", function(event){
	isFormValid(data);
	if(!isFormValid(data)){
		event.preventDefault();
	}
});