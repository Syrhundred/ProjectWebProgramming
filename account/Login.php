<?php
$user = "root";
$pass = "";
$db = "project_work";

$conn = mysqli_connect('localhost', $user, $pass, $db);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}


mysqli_select_db($conn, "project_work");

$uname = $_POST['user'];
$pass = $_POST['password'];


if (empty($uname)) {

    header("Location: login.php?error=User Name is required");


} else if (empty($pass)) {

    header("Location: index.php?error=Password is required");



} else {

    $sql = "SELECT * FROM usersfromproject WHERE Email='$uname' AND Password='$pass'";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) === 1) {

        $row = mysqli_fetch_assoc($result);

        if ($row['Email'] === $uname && $row['Password'] === $pass) {

            $_SESSION['Email'] = $row['Email'];

            $_SESSION['FirstName'] = $row['FirstName'];

            $_SESSION['LastName'] = $row['LastName'];

            $_SESSION['Password'] = $row['Password'];

            include 'Profile.html';

        } else {

            header("Location: login.php?error=Incorect User name or password");
        }

    } else {

        header("Location: login.php?error=Incorect User name or password");

    }

    mysqli_close($conn);
}
?>