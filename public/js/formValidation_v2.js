const errorMessages = {
	missingValueError: "This field is required",
	nameError: "You can use only: A-Z, a-z",
	emailError: "You have to follow pattern: xxx@xxx.xx"
}

function createErrorMessage(id, message){
	return document.getElementById(id + "Message").innerHTML = message
}

function validateFormHelper(id, message){
	if(id === "name" || id === "lastName"){
		createErrorMessage(id, message.nameError);
	}else if(id === "email"){
		createErrorMessage(id, message.emailError);
	} else if(id === "date"){
		createErrorMessage(id, message.missingValueError);
	}
}

function Form(form, errorMessages){
	this.errorMessages = errorMessages;
	this.removeFields = function(){
		this.fields = [];
	}
	this.createFields = function(){
		for (let i=0; i<form.length; i++){
			if(form[i].type !== "submit"){
				this.fields.push(new Field(form[i].id, form[i].value, form[i].pattern));
			}
		}
	}
	this.validateForm = function(){
		for(let i=0; i<this.fields.length;i++){
			this.fields[i].validateField();
			if(!this.fields[i].isFieldValid){
				if(this.fields[i].isEmpty){
				createErrorMessage(this.fields[i].id, this.errorMessages.missingValueError);
				} else{
					validateFormHelper(this.fields[i].id, this.errorMessages);
				}
			} else{
				createErrorMessage(this.fields[i].id, "");		
			}
		}
		for(let i=0; i<this.fields.length; i++){
			if(!this.fields[i].isFieldValid){
				this.isFormValid = false;
				break;
			} else{
				this.isFormValid = true;
			}
		}
	}
}

function Field(id, value, pattern){
	this.id = id;
	this.value = value;
	this.pattern = new RegExp("^"+pattern+"$");
	this.isFieldValid = false;
	this.isEmpty = true;
	this.isPatternValid = false;
	this.validateField = function(){
		if(this.value !== ""){
			this.isEmpty = false;
		}
		if(this.pattern.test(this.value)){
			this.isPatternValid = true;
		}
		if((this.isEmpty === false)&&(this.isPatternValid === true)){
			this.isFieldValid = true;
		}
	}
}

var Form = new Form(document.querySelectorAll("form input"), errorMessages);
document.getElementById("submit").addEventListener("click", function(event){
	Form.removeFields();
	Form.createFields();
	Form.validateForm();
	if(!Form.isFormValid){
		event.preventDefault();
	}
});

