$(document).on('change', '#fileImage', function(event) {
	previewFile();
});

//shows the selected file in an image container
function previewFile(){
    //select the quetry named img 
	var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
		preview.src = reader.result;
    }

    if (file) {
		reader.readAsDataURL(file); //reads the data as a URL
    } else {
		preview.src = "";
    }
}

//event handler for sell item form submit
$('#messageForm').submit(function(event){
    // cancels the form submission
    event.preventDefault();

	setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    // uses the messages database
	setCurrObjectStoreName('Messages');
	startDB(function () {
        //calls the function to save messages
		saveMessages();
		alert("Your message has been sent successfully!")
	
	});
});