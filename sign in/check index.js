let users = [
    {
        user_name: 'admin', 
        password: 'admin', 
    },
    {
        user_name: 'user', 
        password: 'user',
    },
    {
        user_name: 'guest', 
        password: 'guest',
    },
]
for (let i = 0; i < users.length; i++){
    localStorage.setItem("account_name"+i, users[i].user_name);
    localStorage.setItem("account_password"+i, users[i].password);
}

function myFunction(event) {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


for(let i = 0; i < users.length; i++){
if(username== localStorage.getItem("account_name"+i)&&password== localStorage.getItem("account_password"+i)){
    button.action='../index.html';
    break;
}
else  {
    alert("Sai tài khoản mật khẩu");
    let text;
    let person = prompt("Have you got an account yet?", "No");
    if (person == null || person == "") {
        alert("Please enter the prompt again");
        event.preventDefault();
        break
      
    } 
    if (person == "No") {
        button.action='sign-up.html';
        break
    }
    else {
      
    }
    event.preventDefault();
    break;
    
}
}
}
var button = document.getElementById("form");
button.addEventListener('submit',myFunction);