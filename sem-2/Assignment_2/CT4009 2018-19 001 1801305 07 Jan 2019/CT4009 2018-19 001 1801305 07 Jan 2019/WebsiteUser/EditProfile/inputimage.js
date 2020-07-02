//this function finds the image
$('#fileInputPicture').change( function(event) {
    var file    = event.target.files[0]; 
    var reader  = new FileReader();

    reader.onloadend = function () {
		$('#ImagePreview').attr('src', reader.result)
    }

    if (file) {
		reader.readAsDataURL(file); 
    } else {
		$('#ImagePreview').attr('src', "");
    }
});

// the update of the user profile occurs with this function
$('#formUpdate').submit(function(){
	event.preventDefault();
    
	setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    //uses the account store
	setCurrObjectStoreName('AccountStore');
	startDB(function() {
        //sends to function in DAO
		updatePicture();
		
		alert("Profile Picture has been added successfully");
	})
	
});

$(document).ready(function() {
    setDatabaseName('UltraC', ['AccountStore', 'PostStore']);
	//uses the account store
    setCurrObjectStoreName('AccountStore');
	startDB(function() {
        //sends to function in DAO
		insertProfilePicture();
	});
});