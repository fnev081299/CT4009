setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
//uses messages store that is added as a new db
setCurrObjectStoreName('Message');
startDB(function () {
    //calls the messages function
	Messages();
});
