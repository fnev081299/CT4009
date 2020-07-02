var password = document.getElementById("txtPassword");
var confirmPassword = document.getElementById("txtConfirmPassword");

function validatePassword(){
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords Don't Match");
    }else{
        confirmPassword.setCustomValidity('');
    }
}


password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

$('#formUserRegistration').submit(function(event){
  event.preventDefault();
    
    setDatabaseName('dbFlogger', ['UserObjectStore', 'ItemsObjectStore']);
    setCurrObjectStoreName('UserObjectStore');
    startDB(function(){
        saveRegistrationData();
        alert(" Thank you for registering on The Flogger! Please now login to access your account.")
        window.location.href="../LoginPage/Login.html";
    })
  })