<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <link rel="stylesheet" href="../CSS/events.css">
   <link rel="stylesheet" href="../CSS/main.css">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>
      Eighth Wonder | Waiting List
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
<h1>Waiting List</h1>
<table id="waitListTable">
   <?php
   $dbOk = false;
   @$db = new mysqli('localhost', 'phpmyadmin', 'iitphppass', 'iit');
   if ($db->connect_error) {
     echo '<div class="messages">Could not connect to the database. Error: ';
     echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
   } else {
     $dbOk = true;
   }
   if ($dbOk) {

      $query = 'select * from waitingList order by id';
      $result = $db->query($query);
      $numRecords = $result->num_rows;

      echo '<tr><th>First Name:</th><th>Last Name:</th><th>Email:</th><th>Discord Handle:</th><th>Graduation Year</th></tr>';
      for ($i = 0; $i < $numRecords; $i++) {
         $record = $result->fetch_assoc();
         if ($i % 2 == 0) {
            echo "\n" . '<tr id="waitingList-' . $record['id'] . '"><td>';
         } else {
            echo "\n" . '<tr class="odd" id="waitingList-' . $record['id'] . '"><td>';
         }
         echo htmlspecialchars($record['firstName']);
         echo '</td><td>';
         echo htmlspecialchars($record['lastName']);
         echo '</td><td>';
         echo htmlspecialchars($record['email']);
         echo '</td><td>';
         echo htmlspecialchars($record['discord']);
         echo '</td><td>';
         echo htmlspecialchars($record['gradyear']);
         echo '</td></tr>';
      }

      $result->free();

      // Finally, let's close the database
      $db->close();
   }

   ?>
</table>
<h1><a href="../contact.html">Return to form</a></h1>
</body>