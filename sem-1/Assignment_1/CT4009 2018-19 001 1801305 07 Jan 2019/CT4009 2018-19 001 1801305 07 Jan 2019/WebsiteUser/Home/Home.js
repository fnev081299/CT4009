setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
//using the post store for the home page to store the posts that users have made
setCurrObjectStoreName('PostStore');
startDB(function () {
    //calls a show all function
	showAll();
});
