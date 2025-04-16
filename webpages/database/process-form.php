<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <link rel="stylesheet" href="../CSS/events.css">
   <link rel="stylesheet" href="../CSS/main.css">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>
      Eighth Wonder | Form Processed
   </title>
   <link rel="icon" type="image/x-icon" href="../Images/EightWonderLogo.png">
</head>

<body>
   <div id = "nav">
     <ul>
         <li class = logo><a href = "../../index.html"><img src = "../Images/EightWonderLogo.png" id = "EighthWonderNavBar" alt = "Eighth Wonder Logo"></a></li>
         <li class = logo><a href = "../../index.html">Eighth Wonder</a></li>
         <li class = rightBar><a href="../faq.html">FAQ</a></li>
         <li class = rightBar><a class="active" href="../contact.html">Contact</a></li>
         <li class = rightBar><a href="../events.html">Events</a></li>
         <li class = rightBar><a href="../schedule.html">Schedule</a></li>
         <li class = rightBar><a href="../about-us.html">About Us</a></li>
         <li class = rightBar><a href="../../index.html">Home</a></li>
      </ul>
   </div>

  <br>
  <br>
<?php
$dbOk = false;
@$db = new mysqli('localhost', 'phpmyadmin', 'iitphppass', 'iit');
if ($db->connect_error) {
  echo '<div class="messages">Could not connect to the database. Error: ';
  echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
} else {
  $dbOk = true;
}

$havePost = isset($_POST["submit"]);

if($havePost){
  $firstName = htmlspecialchars(trim($_POST["firstName"]));
  $lastName = htmlspecialchars(trim($_POST["lastName"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $discord = htmlspecialchars(trim($_POST["discord"]));
  $gradyear = trim($_POST["gradyear"]);

  if($dbOk){
    $insQuery = "INSERT INTO waitingList (`firstName`,`lastName`, `email`, `discord`, `gradyear`) VALUES (?,?,?,?,?)";
    $statement = $db->prepare($insQuery);
    $statement->bind_param("ssssi", $firstName, $lastName, $email, $discord, $gradyear);
    $statement->execute();
    echo "<h2>Successfully Added Entry</h2><br>";
    echo "<p>First Name: " . $firstName . "</p>";
    echo "<p>Last Name: " . $lastName . "</p>";
    echo "<p>Email: " . $email . "</p>";
    echo "<p>Discord: " . $discord . "</p>";
    echo "<p>Graduation Year:" . $gradyear . "</p>";
    $statement->close();
  }
} else{
  echo '<h2>No Post Found</h2>';
}
?>
<h1><a href="../contact.html">Return to form</a></h1>
</body>
</html>