<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project_work";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$email = $_POST['address'];

$sql = "UPDATE usersFromProject SET FirstName = '$FirstName' WHERE Email = '$email'";
$sql1 = "UPDATE usersFromProject set LastName = '$LastName' where Email = '$email'";

if ($conn->query($sql) === TRUE && $conn->query($sql1) === TRUE) {
    include "ChangingData.html";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>