<!DOCTYPE html>
<html>
    <body>
        <?php
        $conn = mysqli_connect('goldfinsinstance.czoorucuk06n.us-east-2.rds.amazonaws.com', 'AverageHippo', 'N3rf1r311A', 'imchallenge', 3306);
        if($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        }
        else
        {
            echo("connection successful!");
        }
        $temp = 'temp';
        $yep = 0;
        $sql = "INSERT INTO senior VALUES ('$temp', $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep, $yep);";
        if ($conn->query($sql) === true)
        {
            echo "data entered into database";
            echo $conn->query("SELECT * FROM senior;");
        }
        else
        {
            echo "Error: $conn->error";
        }
        ?>    
    </body>
</html>