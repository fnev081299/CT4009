<?php

require_once '../Include/config.php';

if ($_POST['phpFunction'] == 'Login'){
	
	login();
}

function login(){
    //echo "test";
	session_start();
	
	include '../Include/config.php';
	$uName = $_POST['username'];
	$pWord = $_POST['password'];

	$sql = "SELECT * FROM `users` WHERE username='".$uName."' AND password='". md5($pWord) . "' AND is_deleted=0";
	
	//echo $sql;

	$res = mysqli_query($connection, $sql);
	$num_row = mysqli_num_rows($res);
	$row=mysqli_fetch_assoc($res);

	//save login session successful

	if($num_row > 0) {
		$_SESSION['id'] = $row['id'];
		echo json_encode($row);
	} else {
		echo 'false';
	}
}
