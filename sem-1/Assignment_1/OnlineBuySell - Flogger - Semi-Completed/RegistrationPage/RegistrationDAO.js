//Save registration details in an indexeddb object store

function saveRegistrationData() {
	
	
	var firstname = $('#txtFirstName').val();
	var lastname = $('#txtLastName').val();
	var addressline1 = $('#txtAddressline1').val();
	var addressline2 = $('#txtAddressline2').val();
	var postcode = $('#txtPostcode').val();
	var city = $('#txtCity').val();
	var email = $('#txtEmail').val();
	var password = $('#txtPassword').val();
			
	var data = {
		'firstname': firstname, 
		'lastname': lastname,
		'addressline1': addressline1,
		'addressline2': addressline2,
		'postcode': postcode,
		'city': city,
		'email': email,
		'password': password
	};
										
	insertOne(data, function(lastID) {
		event.preventDefault();
		return false;
	});
}