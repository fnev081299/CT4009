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
	$sql = "SELECT first_name, last_name FROM `users` WHERE username='".$uName."' AND password='". md5($pWord) . "'";
	
	//echo $sql;
	$res = mysqli_query($connection, $sql);
	$num_row = mysqli_num_rows($res);
	$row=mysqli_fetch_assoc($res);
	//save login session successful
	if($num_row > 0) {
		echo json_encode($row);
	} else {
		echo 'false';
	}
}
?>