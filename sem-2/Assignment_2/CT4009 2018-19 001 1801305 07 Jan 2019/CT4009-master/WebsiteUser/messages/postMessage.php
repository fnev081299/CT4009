<?php 

GetID();

function GetID() {
	session_start();
	include('../Include/config.php');
	
	$SendingUname = $_GET['sendingUser'];
		$sql = "SELECT `id`". 
	"FROM `users`".
	"WHERE".
	"`username` = $SendingUname";
	$result = mysqli_query($connection,$sql);
	
	echo $result[$sql];
	// messagePost();
}

function messagePost(){
	$uID = $_SESSION['id'];
	$sendingID = $_POST[$SendingUname];
	$message = $_POST['message'];

	$sql = "INSERT INTO `message`". 
	"(username, message)".
	"VALUES".
	"('$uID','$message')"; 
	
	// echo $sql;

		$result = mysqli_query($connection,$sql);

		mysqli_close($connection);
		if ($success) {
		    header('Location: ../Home/Home.html');
		    exit;
		}
		header('Location: ../Home/Home.html');
		exit;
} 