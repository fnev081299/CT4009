<?php

createUser();

function createUser() {
$success = false;
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$addressline1 = $_POST['addressline1'];
$addressline2 = $_POST['addressline2'];
$postcode = $_POST['postcode'];
$city = $_POST['city'];
$uname = $_POST['username'];
$pword = md5($_POST['password']);

include('../Include/config.php');

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
}

function updateUser() {
	echo "Updating the User";
}

?>