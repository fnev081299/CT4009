<?php

if(isset($_POST['functionCalled']) && !empty($_POST['functionCalled'])) {
	$functionCalled = $_POST['functionCalled'];
	switch($functionCalled) {
		case 'Posts':
			Posts();
			break;
		case 'addLikes':
			addLikes();
			break;
	}
}

if(isset($_GET['functionCalled']) && !empty($_GET['functionCalled'])) {
	$functionCalled = $_GET['functionCalled'];
	switch($functionCalled) {
		case 'Posts':
			Posts();
			break;
		case 'addLikes':
			addLikes();
			break;
	}
}

function Posts() {
	include('../Include/config.php');

	$sql = "SELECT `tbl_UserPosts`.`id`, `tbl_UserPosts`.`Post_content`, `tbl_UserPosts`.`likes`, `users`.`first_name`, `users`.`last_name` FROM `tbl_UserPosts` JOIN `users` ON `tbl_UserPosts`.`user_id`=`users`.`id` ORDER BY `tbl_UserPosts`.`id` desc";
	$result = mysqli_query($connection, $sql);

	$posts = [];

	while ($row = mysqli_fetch_assoc($result)) {
		$posts[] = $row;
	}

	echo json_encode($posts);
}

function addLikes() {
	include('../Include/config.php');

    $postId = $_POST['postId'];

    $sql = "UPDATE `tbl_UserPosts` SET `likes`= `likes` + 1 WHERE `id`=$postId";
    $result = mysqli_query($connection, $sql);

    if (!$result) {
        echo "Failed to like the post";
        return false;
    }
}