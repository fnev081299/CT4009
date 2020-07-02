$('#loginForm').submit(function(event){
	formData = $('#loginForm').serialize();
	formData = formData +'&phpFunction=Login';

	//alert(formData);
		event.preventDefault();

	$.ajax({
		type: "POST",
		url: "LoginDAO.php",
		data: formData,
		datatype: "json",
	success:function(data)
	{
		
		dataJSON = JSON.parse(data);
		firstName = dataJSON['first_name'];
		lastName = dataJSON['last_name'];
		

		sessionStorage.setItem('first_name', firstName);
		sessionStorage.setItem('last_name', lastName);

		//check fist and last names set
		console.log(firstName + " " + lastName);

		if(data == 'false'){
			$("#divMessage").html(data);
		} else {
			window.location.href="../Home/Home.html"
		}
	},
	error:function(data) {
	    alert ("Problem logging in!");
	    
	}
	
	})
});