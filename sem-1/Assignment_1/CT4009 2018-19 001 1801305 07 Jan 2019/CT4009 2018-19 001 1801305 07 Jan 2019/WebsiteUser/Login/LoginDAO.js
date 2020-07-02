function isValidUser() {
    selectAll(function(results) {
        var result = false;
        if (!results || !results.length) {
        }
        else {
            //sets values for these to then use for viewing the similarities
            var len = results.length, i;
            var userUsername = document.getElementById("Username").value;
            var userPassword = document.getElementById("Password").value;
            sessionStorage.clear();
            
            //checks the user input
            for(i = 0; i < len; i ++) {
                if(userUsername === results[i].username && userPassword === results[i].password) {
                    sessionStorage.setItem('userUsername', results[i].username);
                    sessionStorage.setItem('userID', results[i].id);
                    result = true;
                }
                
            }
            // if the user is there and has the correct information then it 
            // will send them to the home page, otherwise they are sent an alert
            if(results) {
                window.location.href = "../Home/Home.html";
            } else {
                alert("Invalid username or password.")
            }
        }
    });
}