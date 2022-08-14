
var User1Array =["user1@gmail.com", "1234"];

function login() {
if ( User1Array[0]!== document.getElementById("email").value) {
    window.alert("Invalid email or password.");  
    document.loginForm.reset();  
    }
 else {
        if (User1Array[1] === document.getElementById("password").value){
            alert("Login successful.");
            document.loginForm.submit();
        }
        else {
            alert("Invalid email or password."); 
            document.loginForm.reset();
        }
    }
}