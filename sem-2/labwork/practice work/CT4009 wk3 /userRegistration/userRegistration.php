<?php
if(isset($_GET['phpFunction'])) {
	if($_GET['phpFunction'] == 'createUser') {
		createUser();
	} elseif($_GET['phpFunction']) == 'updateUser'); {
	updateUser();
	} elseif($_GET['phpFunction'] == 'deleteUser') {
		deleteUser();
	}
}

function createwUser() {
	$servername=$_GET['firstname'];
	$usernmae=$_GET['lastname'];
	$email=$_GET['email'];
	$password=$_GET['password'],

	include "../include/config.php";

	$sql =  "INSERT INTO tbl_user".
			"(`firstname`, `lastname`, `email`, `password`) ".
			"VALUES ".
			"('$firstname', '$lastname', '$email', '$password')";
	if (mysqli_query($connection,$sql)) {
		echo "New Record created successfully";
	}
	else
	{
		echo "<br><br>Error: " . $connection. "<br>" .mysqli_error($connection);
	}

	mysqli_close($connection);
}

function updateUser() {
	echo "Updating the User";
}

function selectAllUser() {
	include "../include/config.php";

	$sql = "SELECT * FROM tbl_user WHERE 1";
	$result = mysql_query($connection, $sql);

	if (mysql_num_rows($results) > 0)
	{
		while($row = mysqli_fetch-assoc($result)){
			echo "ID:" .$row["first_name"]. " " .$row["email"]. " used a password of" .$row["password"] . "<br>";
		}
	}
	else
	{
		echo "0 results";
	}
	mysqli_close($connection);
}
?>