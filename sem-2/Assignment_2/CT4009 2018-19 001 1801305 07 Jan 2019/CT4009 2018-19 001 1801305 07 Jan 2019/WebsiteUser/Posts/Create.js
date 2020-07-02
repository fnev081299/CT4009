$(document).on('change', '#fileImage', function(event) {
	previewFile();
});

//shows the selected file in an image container
function previewFile(){
    //selects the query named img
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

//Event handler for sell item form submit
$('#PostForm').submit(function(event){
    // cancels the form submission
    event.preventDefault();

	setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
    //uses the post store db
	setCurrObjectStoreName('PostStore');
	startDB(function () {
        //goes to the function save data
		saveData();
		alert("Your post has been saved successfully!")
	
	});
}); 