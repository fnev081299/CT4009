//Password Validate
var password = document.getElementById("txtPassword");
var confirmPassword = document.getElementById("txtConfirmPassword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


//startDB("UserObjectStore");
$('#formUserRegistration').submit(function(event){
    // cancels the form submission
    event.preventDefault();

	setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		updateRegistrationData();
		alert("Your details have been updated.")
		window.location.href = "../LoginPage/Login.html";
		//event.preventDefault();
	//}, function () {});
	});
});

//Show Saved Registration Details

setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
setCurrObjectStoreName('UsersObjectStore');
startDB(function () {
	showRegistrationDetails();
});



$('#formUpdateRegistrationDetails').submit(function(event){
    // cancels the form submission
    event.preventDefault();

    // do whatever you want here
	
	
	//alert("test1");
	$(document).on('click', '#btnRegister', function(event) {
		startDB(function () {
		
			updateRegistrationData();
			console.log('test');
			event.preventDefault();
		});	
	});
	
	
});

