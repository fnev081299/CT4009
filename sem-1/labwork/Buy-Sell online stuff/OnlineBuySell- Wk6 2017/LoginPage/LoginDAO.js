function isValidUser() {
    selectAll(function(results) {
        var result = false;
        if(!results || !results.length) {
            
        }
        else {
            var len = results.length, i;
            
            var userEmail = document.getElementById("txtEmail").value;
            var userPassword = document.getElementById("txtPassword").value;
            sessionStorage.clear();
            
            for(i = 0; i < len; i++) {
                if(userEmail === results[i].email && userPassword === results[i].password) {
                    sessionStorage.setItem('userEmail', results[i].email);
                    sessionStorage.setItem('userID', results[i].id);
                }
                
            }
            
            if(results) {
                window.location.href = "../SellItemPage/SellItem.html";
            } else {
                alert("Invalid email or password");
            }
        }
    });
}