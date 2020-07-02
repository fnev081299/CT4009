<?php

createUser();

function createUser() {

	$success = false;
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$postcode = $_POST['constituency'];
	$address_line1 = $_POST['address_line1'];
	$address_line2 = $_POST['address_line2'];
	$city = $_POST['city'];
	$uname = $_POST['username'];
	$pword = md5($_POST['password']);

	include('../Include/config.php');

	if(!mysqli_query('SELECT username FROM users WHERE username=:username', array(':username' => $uname))) {
		$sql = "INSERT INTO `users`".
			"(first_name, last_name, address_line1, address_line2, postcode, city, username, password)".
			"VALUES".
			"('$firstname', '$lastname', '$addressline1', '$addressline2', '$postcode', '$city', '$uname', '$pword')";

			if (mysqli_query($connection,$sql)) {
				$success = true;
			}
			else
			{
				echo "<br><br>Error: " . $connection. "<br>" .mysqli_error($connection);
			}

			mysqli_close($connection);
			if ($success) {
			    header('Location: ../Login/Login.html');
			    exit;
			}
			header('Location: Register.html');
			exit;
		} else {
			$message = "User already exists!";
			echo "<script type='text/javascript'>alert('$message');</script>";
		}
}
function updateUser() {
	echo "Updating the User";
}