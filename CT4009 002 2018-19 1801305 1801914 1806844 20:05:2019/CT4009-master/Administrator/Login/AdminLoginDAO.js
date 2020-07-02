function isValidAdmin() {
    selectAll(function(results) {
        var result = false;
        if (!results || !results.length) {
        }
        else {
            var objAdmins = [
                {
                // admin login information
                username: "NAdmin",
                password: "admin123",
                }
            ]
            
            // populate variables:
            var len = objAdmins.length, i;
            var AdminUsername = document.getElementById("username").value;
            var AdminPassword = document.getElementById("password").value;
            sessionStorage.clear();
            
            // checks to see if it is valid
            for(i = 0; i < len; i ++) {
                if(AdminUsername === results[i].username && AdminPassword ===                   results[i].password) {
                    sessionStorage.setItem('AdminUsername', results[i].username);
                    sessionStorage.setItem('AdminID', results[i].id);
                    result = true;
                
            }             
}
            if(results) {
                window.location.href = "../ViewPostsSummary/PostSummary.html";
            } else {
                alert("Invalid username or password.")
            }
        }
    });
}