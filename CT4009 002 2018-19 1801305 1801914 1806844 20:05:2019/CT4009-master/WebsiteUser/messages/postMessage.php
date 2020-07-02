<?php 

	session_start();
	include('../Include/config.php');

	$uID = $_SESSION['id'];
	$sendingUser = $_POST['sendingUser'];
	$message = $_POST['message'];

	$sql = "INSERT INTO `tbl_userMessages`". 
	"(`user_id`, `sending_to_id`, `message`)".
	"VALUES".
	"($uID, (SELECT `id` FROM  `users` WHERE `username`  = '$sendingUser'), '$message')"; 
	
	// echo $sql;

		$result = mysqli_query($connection,$sql);

		mysqli_close($connection);
		if ($result) {
		    header('Location: ../Home/Home.html');
		    exit;
		}
		header('Location: ../Home/Home.html');
		exit;
