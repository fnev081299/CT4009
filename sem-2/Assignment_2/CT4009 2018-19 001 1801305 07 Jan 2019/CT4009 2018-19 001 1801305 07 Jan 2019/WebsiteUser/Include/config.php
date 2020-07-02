<?php

	$servername = "localhost";
	$username = "s1801305_CT4009";
	$password = "Bp9HXc#z0_DL";
	$dbname = "s1801305_CT4009";

	$connection = new mysqli($servername,$username, $password, $dbname);

	if ($connection->connect_error) {
		die("Connection failed: " . $conn->connection_error);
	}
?>

