//Update registration details data in a indexeddb object store
function updateRegistrationData() {
	
	
	var firstname = $('#txtFirstName').val();
	var lastname = $('#txtLastName').val();
	var addressline1 = $('#txtAddressline1').val();
	var addressline2 = $('#txtAddressline2').val();
	var postcode = $('#txtPostcode').val();
	var city = $('#txtCity').val();
	var email = $('#txtEmail').val();
	var password = $('#txtPassword').val();
			
	var data = {
		'id': parseInt(sessionStorage.getItem('userID')), 
		'firstname': firstname, 
		'lastname': lastname,
		'addressline1': addressline1,
		'addressline2': addressline2,
		'postcode': postcode,
		'city': city,
		'email': email,
		'password': password
	};
										
	updateOne(data, function(lastID) {
		event.preventDefault();
		return false;
	});
}

//Show the existing registration data in a form
function showRegistrationDetails() {
	selectOne(sessionStorage.getItem('userID'), function(record) {
		
		if(!record) {
			console.log('Not found');
		}
		else {
			$('#txtFirstName').val(record.firstname);
			$('#txtLastName').val(record.lastname);
			$('#txtAddressline1').val(record.addressline1);
			$('#txtAddressline2').val(record.addressline2);
			$('#txtPostcode').val(record.postcode);
			$('#txtCity').val(record.city);
			$('#txtEmail').val(record.email);
		}
	});
}

