function insertAnimal() {
	var animalName = $('#txtAnimalName').val();
	var animalPicture = $('#fileInputAnimalPicture')[0].files[0];
	
	var data = {
		'animalName' : animalName,
		'animalPicture' : animalPicture
	}

	insertOne(data, function() {
		//return false;
	})
	
}