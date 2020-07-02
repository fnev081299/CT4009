function insertProfileData() {
    selectOne(parseInt(sessionStorage.getItem('userID')), function(record) {
        if (record.ProfilePicture !== undefined) {
            $('#ImagePreview').attr('src', window.URL.createObjectURL(record.ProfilePicture));
        }
        
        //inserts the additional information in place for the profile
        $('#ProfileName').text(record.firstname + ' ' + record.lastname);
        $('#bio').text(record.bio);
    });
}