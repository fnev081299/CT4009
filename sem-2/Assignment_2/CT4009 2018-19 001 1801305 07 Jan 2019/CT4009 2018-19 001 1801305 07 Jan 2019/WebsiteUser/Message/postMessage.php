<?php 
require_once  'includes/dbConnect.php';
$message = filter_var($_POST['message']);
$sql = 'INSERT INTO message ' .
  '(`comment`) ' .
  'VALUES ' .
  '("'. $db->escape_string($message) . '")';
$result = mysqli_query($db, $sql);
if($result) {
  header('Location: /');
  die();
}
die('There was an error inserting the message');