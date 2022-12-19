<?php
$user = "root";
$pass = "";
$db = "project_work";

$conn = mysqli_connect('localhost', $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

session_start();

session_unset();

session_destroy();

include "Account.html";

?>
