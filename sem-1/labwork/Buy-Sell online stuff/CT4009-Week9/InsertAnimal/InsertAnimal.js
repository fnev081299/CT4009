$('#fileInputAnimalPicture').change( function(event) {
    var file    = event.target.files[0]; 
    var reader  = new FileReader();

    reader.onloadend = function () {
		$('#imgPreview').attr('src', reader.result)
    }

    if (file) {
		reader.readAsDataURL(file); 
    } else {
		$('#imgPreview').attr('src', "")
    }
})

$('#formInsertAnimal').submit(function(){
	event.preventDefault();
	setDatabaseName('dbAnimal', ['AnimalObjStore']);
	setCurrObjectStoreName('AnimalObjStore');
	startDB(function() {
		insertAnimal();
		
		alert("Animal has addedd successfully");
	})
	
})

