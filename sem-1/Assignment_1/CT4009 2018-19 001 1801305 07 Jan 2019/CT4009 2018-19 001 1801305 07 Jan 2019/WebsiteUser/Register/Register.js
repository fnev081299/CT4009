var password = document.getElementById("Password");
var confirmpassword = document.getElementById("ConfirmPassword");

//password validation
function validatePassword(){
	if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords don't match");
    } else {
        confirmpassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;

$('#formUserRegistation').submit(function(event){
    event.preventDefault();
    
    setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    //uses the account store db
    setCurrObjectStoreName('AccountStore');
    startDB(function () {
        //starts the registration 
        saveRegistrationData();
        alert("Thank you for registering! please login to your account now");
        //sends user to the login page
        window.location.href = "../Login/Login.html";
    });
});