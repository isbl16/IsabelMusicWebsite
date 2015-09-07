<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "ISABEL: " . $_POST['subject'];
    $message = $_POST['message'];
    $recipient = "isbl16@gmail.com";
    $message_content = "From " . $name . " (" . $email . "):\n\n " . "\"" . $message . "\"";  
    mail($recipient, $subject, $message_content) or die("Error");
    echo "Thanks " . $name . "! I'll get back to you soon.";
?>