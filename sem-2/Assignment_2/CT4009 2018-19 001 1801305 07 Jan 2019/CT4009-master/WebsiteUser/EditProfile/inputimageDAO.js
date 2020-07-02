function updatePicture() {
	var Picture = $('#fileInputPicture')[0].files[0];
    var Bio = $('#formUpdateBio').val();
    var userId = parseInt(sessionStorage.getItem('userID'));
    
    // Create image data
    var data = {
		'ProfilePicture' : Picture,
        'id' : userId,
        'bio' : Bio
	}
    
    // Get rest of profile
    selectOne(userId, function(record) {
        data.addressline1 = record.addressline1;
        data.addressline2 = record.addressline2;
        data.city = record.city;
        data.firstname = record.firstname;
        data.id = record.id;
        data.lastname = record.lastname;
        data.password = record.password;
        data.postcode = record.postcode;
        data.username = record.username;
        
        // Update full profile
        updateOne(data, function() {
            alert('Profile picture has been updated');
        });
    });
}

// Finds the image
function insertProfilePicture() {
    selectOne(parseInt(sessionStorage.getItem('userID')), function(record) {
        $('#ImagePreview').attr('src', window.URL.createObjectURL(record.ProfilePicture))
    });
}