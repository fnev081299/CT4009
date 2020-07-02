<?php 

session_start();
require_once '../Include/config.php';

if(isset($_GET['functionCalled']) && !empty($_GET['functionCalled'])) {
	$functionCalled = $_GET['functionCalled'];
	switch($functionCalled) {
		case 'listFriends':
			listFriends();
			break;
		case 'listMessage':
			listMessage();
			break;
	}
}

function listFriends(){
$FriendUname = $_GET[`username`];
$uid = $_SESSION['id'];

$sql = 'SELECT usr.`username` FROM `users` AS usr INNER JOIN `tbl_userMessages` AS msg ON usr.`id` = msg.`user_id` '.
	"WHERE (msg.`user_id` = $uid) OR (msg.`sending_to_id` = $uid) GROUP BY msg.`user_id`, msg.`sending_to_id`";

	$result = mysqli_query($connection, $sql);

	die(var_dump($result));
};

function listMessages(){
$sql = 'SELECT `message` ' .
  'FROM tbl_userMessages ' .
  'WHERE `deleted` = 0 ' .
  'ORDER BY `id` DESC';
$result = mysqli_query($db, $sql);
if(mysqli_num_rows($result) > 0) {
  while($row = $result->fetch_assoc()) {
    $message[] = $row;
  }
  echo json_encode($message);
}
};