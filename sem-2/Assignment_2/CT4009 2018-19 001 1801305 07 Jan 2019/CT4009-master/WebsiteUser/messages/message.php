<html>
<head>
	<title> Message </title>
    <!--connect to the css-->
    <link href="../css/styles.css" type="text/css" rel = "stylesheet"/>
    <link href="./messages.css" type="text/css" rel = "stylesheet"/>
</head>

<body>
    <!--name of the site-->
    <h1 class="company">Messages</h1>
<!--navigation bar-->	
<div class="nav">
        <ul class="main-nav">
            <li><a href="../Home/Home.html">Home</a></li>
            <li><a href="../login/Login.html">Logout</a></li>
            <li><a href="../Message/message.html">Message</a></li>
            <!--additional messages navigator-->
            <li><a href="../Message/messageFriends.html">Messages</a></li>
            <li><a href="../Profile/Profile.html">Your Profile</a></li>
        </ul>
 </div>
    <!-- table to display previous massages -->
<form method="POST" action="postMessage.php?receiver=<?php echo $_GET['sending_to_id'], ?>" class="MessageForm">
    <div>
        <input type="text" name="sendingUser" id="sendingUser" placeholder="Sending to ...?"> 
        <br>
        <textarea rows="4" cols="50" name="message" id="message" rows="1" placeholder="Messsge"> </textarea>
        <br>
    </div>
        <button type="submit" id="btnSave" name="SavePost" class="btn-margin"> Send </button>
    <div>
</body>    
</html>