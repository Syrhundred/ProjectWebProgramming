<?php
    $user = "root";
    $pass = "";
    $db = "users";

    $conn = new mysqli('localhost', $user, $pass, $db ) or die("Unable to connect");

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    } else{
      echo "Successfully connected";
    }

    $f_name = $_POST['FirstName'];
    $l_name = $_POST['LastName'];
    $email = $_POST['Email'];
    $password = $_POST['Password'];

    $sql = "select * from users where FirstName like '$f_name' and LastName like '$l_name' and Email like '$email' and password like '$password'";

    $result = $conn -> query($sql);

    $count = mysqli_num_rows($result);

    if($count > 0){
        $message = "Success!";
    }else{
        $message = "Email or Password is incorrect";
    }
?>
