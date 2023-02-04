function myFunction() {
    var username = document.getElementById('username').value;
    var passworld = document.getElementById('passworld').value;

    localStorage.setItem('username', username);
    console.log("ok");
}


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var pasword_repeat = document.getElementById("password-repeat").value;

    
    
    if(username== "") {
        alert("Please enter an username!");
        event.preventDefault();
        
    }
    if (password == "") {
        alert("Please enter a password!");
        event.preventDefault();
    }
    if(pasword_repeat == "") {
        alert("Please enter a password repeat!");
        event.preventDefault();
    }
    if(password_reapeat != password){
        alert("Try again!");
        event.preventDefault();
    }
    
    else{
        alert('Successful registration');
    }
    
}
