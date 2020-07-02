function saveData() {
    //populates the variables
    var postName = $('#txtpostTitle').val();
	var userPost = $('#txtPost').val();
			
	var data = {
		'Username' : sessionStorage.getItem('userUsername'),
		'postName': postName, 
		'userPost': userPost,
	};
	
	//image
	var fileInput = $('#fileImage');
    var selectedFile = fileInput.get(0).files[0];
	console.log("selectedFile:", selectedFile);
	
	if (typeof selectedFile != 'undefined')
      data.Image = selectedFile;
										
	insertOne(data, function(lastID) {
		event.preventDefault();
		return false;
	});
}