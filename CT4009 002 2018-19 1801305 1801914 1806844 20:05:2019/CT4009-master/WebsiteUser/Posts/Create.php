<?php
createPost();

function createPost() {

	session_start();
	include('../Include/config.php');
	
	$uID = $_SESSION['id'];
	$Post_content = $_POST['Post_content'];

	$sql = "INSERT INTO `tbl_UserPosts`". 
	"(user_id, Post_content, likes)".
	"VALUES".
	"('$uID','$Post_content', 0)"; 
	
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