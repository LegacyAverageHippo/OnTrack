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
        if (isset ($_POST['submit']))
        {
            echo "Connected successfully \n"
            if(isset($_POST['name']))
            {
                $name = $_POST['name'];
                echo $name;
            }
            if(isset($_POST['age']))
            {
                $age = $_POST['age'];
                echo $age;
            }
            if(isset($_POST['gender']))
            {
                $gender = $_POST['gender'];
                echo $gender;
            }
            if(isset($_POST['race']))
            {
                $race = $_POST['race'];
                echo $race;
            }
            if(isset($_POST['minutes']))
            {
                $minutes = $_POST['minutes'];
                echo $minutes;
            }
            if(isset($_POST['seconds']))
            {
                $seconds = $_POST['seconds'];
                echo $seconds;
            }
            if(isset($_POST['hundredths']))
            {
                $hundredths = $_POST['hundredths'];
                echo $hundredths;
            }
            $totalTime = $minutes + ":" + $seconds + "." + $hundredths;
            echo $totalTime;
        }
        if ($age <= '10')
        {
            if ($gender == "female")
            {
                $sql = "UPDATE tenundergirl SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
            else
            {
                $sql = "UPDATE tenunderboy SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
        }
        if ($age == '11' || $age == '12')
        {
            if ($gender == "female")
            {
                $sql = "UPDATE eleventwelvegirl SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
            else
            {
                $sql = "UPDATE eleventwelveboy SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
        }
        if ($age == '13' || $age == '14')
        {
            if ($gender == "female")
            {
                $sql = "UPDATE fourteengirl SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
            else
            {
                $sql = "UPDATE fourteenboy SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
        }
        else if ($age >= '15')
        {
            if ($gender == "female")
            {
                $sql = "UPDATE fifteenplusgirl SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
            else
            {
                $sql = "UPDATE fifteenplusboy SET $race = $totalTime WHERE name = $name;"
                if($conn->query($sql) === true)
                {
                    echo "You're entry has been updated!";
                }
                else
                {
                    echo "ERROR: $conn->error";
                }
            }
        }
        else
        {
            echo "Error: $conn->error";
        }
        ?>    
    </body>
</html>