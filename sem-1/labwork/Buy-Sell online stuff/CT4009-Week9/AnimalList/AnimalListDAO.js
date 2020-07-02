function showAllAnimals(){
	selectAll(function(results){
		addAnimalToTable(results);
		addEventListenerForDelete();
		addEventListenerForUpdate();
	})
}

function addAnimalToTable(results) {
	for(i=0; i<results.length; i++) {
			var img_url = window.URL.createObjectURL(results[i].animalPicture);
			console.log(results[i].animalName);
			$('#tblAnimal').append(
				'<tr>' +
					'<td> ' + results[i].animalName + ' </td>' +
				
					'<td> <img src="' + img_url + '" height=50 width=50 </td>' +
				
					'<td> <a href="#" class="Delete" id=' + results[i].id + '> Delete </a> </td>' +
				
					'<td> <a href="#" class="Update" id=' + results[i].id + '> Update </a> </td>' +
				'</tr>'
			)
	}
}

function addEventListenerForDelete() {
	$(".Delete").click (function(){
		var animalIDtoDel = parseInt($(this).attr("id"));
		deleteOne(animalIDtoDel, function(){
			alert("Animal has deleted");
			location.reload();
		})
		
		
	})
}

function addEventListenerForUpdate() {
	$(".Update").click (function(){
		var animalIDtoUpdate = parseInt($(this).attr("id"));
		sessionStorage.setItem("animalIDtoUpdate", animalIDtoUpdate);
		alert("updating");
		window.location.href = "../UpdateAnimal/UpdateAnimal.html";
		
	})
}