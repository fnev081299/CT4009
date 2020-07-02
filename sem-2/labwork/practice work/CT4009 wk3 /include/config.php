<?php

	$servername = "localhost";
	$usernmae = "           ";
	$password = "Bf&)X+a?!=q_";
	$dbname = "		_flogger";

	$connection = new mysqli($servername,$username, $password, $dbname);

	if ($connection->connect_error) {
		die("Connection failed: " . $conn->connection_error);
	}
?>
