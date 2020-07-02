$('#AloginForm').submit(function(event){
    event.preventDefault(); 
    setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    //uses the account store for the admin information
    setCurrObjectStoreName('AccountStore');
    startDB(function () {
        // calls the is valid 
        isValidUser();
    });
});