<?php

	if($_GET['phpfunction'] == 'createUser') {
		createUser();
	}
	if($_GET['phpfunction'] == 'verifyUser') {
		verifyUser();
	}

	function createUser() {
		
		$firstname = $_GET['firstname'];
		$lastname = $_GET['lastname'];
		$email = $_GET['email'];
		$pass = $_GET['password'];

		$verificationcode = substr(md5(uniqid(rand(), true)), 16, 16);
		
		include "../include/config.php";

		$sql = "SELECT * FROM `tbl_user` WHERE email='$email'";
		$query = mysql_query($connection, $sql);

		if(mysql_num_rows($query) > 0){
			echo "This email is already registered";
			return;
		}
		
		$sql = "INSERT INTO `tbl_user`".
			   " values ".
			   "('$firstname', '$lastname', '$email', '$pass', NOW(), '$verificationcode', '0')";
		
		
		if(mysqli_query($connection, $sql)) {
			echo "True";
		} else {
			echo mysqli_error($connection);
			return;
		}
		
		sendEmail($email, $verificationcode);

		mysqli_close($connection);
	} 

	function verifyUser() {
		$email = $_GET['email'];
		$verificationcode = $_GET['VerificationCode'];

		include "../include/config.php";

		$sql = 	"UPDATE `tbl_user` ".
				"SET IsVerified='1' ".
				"WHERE email = 'email' AND verificationcode='$verificationcode'";
		if(mysql_query($connection, $sql)) {
			echo "Your account has been successfully verified";
		} else {
			echo mysql_error($connection);
		}
	} 

	function sendEmail($emailTo, $verificationcode) {
		$from="username@glos.ac.uk";
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		//Create email headers

		$headers .= 'From: '.$from. "\r\n".
			'Reply-To: '.$from."\r\n" .
			'X-Mailer: PHP/' . phpversion();

		// Compose the message of the email
		$body = 'Thank you for registering with Flogger. <br>';
		$body = $body.'Please click the link below to activate your account. <br>';
		$link = 'http://s1801305.studentsites.glos.ac.uk/s1801305_wk4/RegistrationPage/RegistrationDAO.php?'.
				'phpfunction=verifyUser&email='.$emailTo.
				'&VerificationCode='.$verificationcode;
		$link = '<a href="'.$link.'">Click here</a>';
		$body = $body.$link;
		$message = '<html><body>';
		$message .= $body;
		$message .= '</body></html>';

		if (mail($emailTo, $subject, $message, $headers)){
			//Do Something
		} else {
			//Do Something
		}
	}
?>