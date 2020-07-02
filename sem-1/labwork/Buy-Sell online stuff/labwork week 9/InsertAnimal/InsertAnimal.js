// alert("this event handler javascript")

$("#fileInputAnimalPicture").change(function(event){
    var file = event.target.files[0];
    var reader = new FileReader();
    
    if(file) {
        reader.readAsDataURL(file);
    } else {
       $("#imgPreview").attr("src", "") 
    }
    
    reader.onloadend = function() {
        $("#imgPreview").attr("src", reader.result)
    }
})

$("#formInsertAnimal").on("submit", function() {
    event.preventDefault();
    setDatabaseName("dbAnimal", ["AnimalObjectStore"]);
    setCurrObjectStoreName("AnimalObjectStore");
    
    startDB(function() {
        insertAnimal();
        alert("Data stored successfully");
    })
})