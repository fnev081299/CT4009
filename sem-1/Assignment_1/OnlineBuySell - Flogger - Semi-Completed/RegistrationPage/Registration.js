//Password Validate
//The following lines of code checks whether
//or not user entered the same password in both
//paasword and confirm password textbox
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


//Event handler for registration form submit 
$('#formUserRegistration').submit(function(event){
    // cancels the form submission
    event.preventDefault();

	setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
	setCurrObjectStoreName('UsersObjectStore');
	startDB(function () {
		saveRegistrationData();
		alert("Thank you for registering on The Flogger! Please now login to access your account.")
		window.location.href = "../LoginPage/Login.html";
		//event.preventDefault();
	//}, function () {});
	});
});



