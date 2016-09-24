<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent='From: $name \n Message: $message';
    $recipient = 'heidi.n.yee@gmail.com';
    $subject = 'someone says hi from theheidiyee';
    $mailheader = 'From: $email \r\n';
    mail($recipient, $subject, $formcontent, $mailheader) or die('Error!');
    echo "Thanks for the message, I'll get back to you shortly";
?>
