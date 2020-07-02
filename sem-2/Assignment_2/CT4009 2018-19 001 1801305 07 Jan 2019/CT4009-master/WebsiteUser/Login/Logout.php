<?php
	session_start();

	include('../Include/config.php');
	$uID = (int)$_SESSION['id'];

	$sql = "UPDATE `users` ". 
	"SET `active`=0 ".
	"WHERE ".
	"`id`=$uID"; 
	$result = mysqli_query($connection, $sql);



	session_destroy();
	header("Location: Login.html");