<?php
	$servername = "localhost";
	$username = "	_user";
	$password = "	,	,	";
	$dbname = "	_flogger";

	$connection = new mysqli($servername, $username, $password, $dbname);

	if($connection->connect_error) {
		echo $connection->connect_error;
	}
?>