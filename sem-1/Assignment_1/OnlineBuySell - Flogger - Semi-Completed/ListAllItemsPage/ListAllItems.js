//The functions below will be precessed on page load 
setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
setCurrObjectStoreName('ItemsObjectStore');
startDB(function () {
	showAllItems();
});
