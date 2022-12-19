<?php
include "Login.php";

$user = "root";
$pass = "";
$db = "project_work";

$conn = mysqli_connect('localhost', $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_select_db($conn, "project_work");

$email = $_POST['email'];
$sql = "DELETE FROM usersfromproject WHERE Email = '$email'";
?>
