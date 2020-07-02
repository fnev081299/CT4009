// alert("this is data access object")

function insertAnimal() {
    var animalName = $("#txtAnimalName").val();
    var animalPicture = $("#fileInputAnimalPicture")[0].files[0];
    
    var data = {
        'nameOfTheAnimal' : animalName,
        'pictureOfTheAnimal' : animalPicture
    }
    
    insertOne(data, function() {
        
    })
}