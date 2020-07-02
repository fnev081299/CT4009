$(document).ready(function() {
    setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    // uses the account store db
	setCurrObjectStoreName('AccountStore');
	startDB(function() {
        //calls insert profile data function
		insertProfileData();
	});
});

//adds a contact button action that can have additional features in the future
$('#Prof').submit(function(){
	event.preventDefault();

		alert("Cannot currently contact");
	})