function saveRegistrationData() {
    //adds these variables into the user account db
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var addressline1 = $('#addressline1').val();
    var addressline2 = $('#addressline2').val();
    var postcode = $('#postcode').val();
    var city = $('#city').val();
    var username = $('#username').val();
    var password = $('#Password').val();
    
    //makes a data set for the user
    var data = {
        'firstname': firstname,
        'lastname': lastname,
        'addressline1': addressline1,
        'addressline2': addressline2,
        'postcode': postcode,
        'city': city,
        'username': username,
        'password': password,
    };
    
    insertOne(data, function(lastID) {
        event.preventDefault();
        return false;
    });
    
};
