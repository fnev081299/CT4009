<?php 
    $firstName=$_POST['firstName'];
    $lastName=$_POST['secondName'];
    $emails=$_POST['emailAddress'];
    $form="youremail@glos.ac.uk";
    $server=$_SERVER['HTTP_USER_AGENT'];
    $subject="Message from PHP...";

    $body="<h1> Registration Form </h1> <p> Thank you, $firstName $lastName <br> your details have been sent to $emails.<br><br> User Agent= $server</p>";

    echo $body;
    
    $headers = 'MIME-Version 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    £headers .= 'From: '.form. "\r\n";
        'Reply-To: '.form. "\r\n".
        'X-Miler: PHP/' . phpversion();

    $message = '<html><body>';
    $message .= £body;
    $message .='</body></html>';
    if (mail($email, $subject, $message, $headers)){
        echo 'Your message was sent successfully'
    } else {
        echo 'Unable to send email. Please try again.'
    }
?>