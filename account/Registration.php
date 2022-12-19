<?php
$user = "root";
$pass = "";
$db = "project_work";

$conn = mysqli_connect('localhost', $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}


mysqli_select_db($conn, "project_work");

$f_name = $_POST['First'];
$l_name = $_POST['Last'];
$email = $_POST['email_add'];
$password = $_POST['password'];

$sql = "INSERT INTO usersfromproject(FirstName, LastName, Email, Password) VALUES ('$f_name','$l_name','$email','$password')";

if (mysqli_query($conn, $sql)) {
    include 'Account.html';
} else {
    include 'Step2.html';
}

mysqli_close($conn);
?>
