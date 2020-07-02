function saveMessage() {
    //popula\tes values
	var message = $('#txtMessage').val();
			
	var data = {
		'Username' : sessionStorage.getItem('userUsername'),
		'userMessage': userMessage,
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