<?php
$user = "root";
$pass = "";
$db = "users";

$conn = mysqli_connect('localhost', $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Successfully connected";
}

$f_name = $_POST['for_name'];
$l_name = $_POST['for_lname'];
$email = $_POST['email_add'];
$password = $_POST['password'];

$sql = "INSERT INTO users VALUES ('$f_name','$l_name','$email','$password')";

if (mysqli_query($conn, $sql)) {
    echo "<h3>data stored in a database successfully."
        . " Please browse your localhost php my admin"
        . " to view the updated data</h3>";

    echo nl2br("\n$f_name\n $l_name\n "
        . "$email\n $password");
} else {
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}

mysqli_close($conn);
?>
