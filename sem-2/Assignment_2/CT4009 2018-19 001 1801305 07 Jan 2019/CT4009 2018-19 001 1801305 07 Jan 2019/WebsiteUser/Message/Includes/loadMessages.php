<?php 
require_once  __DIR__ . '/db-connect.php';
$sql = 'SELECT `message` ' .
  'FROM tbl_userMessages ' .
  'WHERE `deleted` = 0 ' .
  'ORDER BY `id` DESC';
$result = mysqli_query($db, $sql);
if(mysqli_num_rows($result) > 0) {
  while($row = $result->fetch_assoc()) {
    $comments[] = $row;
  }
}