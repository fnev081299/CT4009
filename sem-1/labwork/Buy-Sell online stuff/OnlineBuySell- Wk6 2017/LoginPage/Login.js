$('#formUserLogin').submit(function(event){
                    
    event.preventDefault();
    
    setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
    setCurrObjectStoreName('UsersObjectStore');
    startDB(function () {
        isValidUser();
        
    });
});