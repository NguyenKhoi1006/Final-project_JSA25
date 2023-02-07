
function myFunction(event) {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;



if(username== localStorage.getItem(username)&&password== localStorage.getItem(password)){
    button.action='../index.html';
    
}
else  {
    alert("Sai tài khoản mật khẩu");
    let text;
    let person = prompt("Have you got an account yet?", "No");
    if (person == null || person == "") {
        alert("Please enter the prompt again");
        event.preventDefault();
        
      
    } 
    if (person == "No") {
        button.action='sign-up.html';
        
        
    }
    else {
      
    }
    event.preventDefault();
    
    
}
}

var button = document.getElementById("form");
button.addEventListener('submit',myFunction);