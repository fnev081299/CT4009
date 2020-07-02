//print user from session id

if (sessionStorage.getItem('first_name') !== null){
	$('#divWelcome').html ('Hello ' + sessionStorage.getItem('first_name')+ ' ' + sessionStorage.getItem('last_name') );}
// look out function
$('#linkLogout').click(function(event){
	event.preventDefault();
	$ajax({
		type: 'POST',
		data: "phpFunction=Logout",
		success: function(html){
			sessionStorage.setItem('first_name', " ");
			sessionStorage.setItem('last_name'," ");

			window.location.href="../Login/Login.html";
		},
		error: function(msg){
			console.log(msg);
		}
	});
});

setDatabaseName('UltraC', ['AccountStore', 'PostStore', 'Messages']);
//using the post store for the home page to store the posts that users have made
setCurrObjectStoreName('PostStore');
startDB(function () {
    //calls a show all function
	showAll();
});
