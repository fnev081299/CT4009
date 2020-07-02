setDatabaseName('dbAnimal', 'AnimalObjStore');
setCurrObjectStoreName('AnimalObjStore');
startDB(function () {
	showAllAnimals();
})