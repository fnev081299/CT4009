$('#loginForm').submit(function(event){
    event.preventDefault(); 
    setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    // uses the account store to gather the user information of a specific user
    setCurrObjectStoreName('AccountStore');
    startDB(function () {
        // is valid function is called in DAO
        isValidUser();
    });
});