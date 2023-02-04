function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

var account = {
       
    password: password,
    username: username,
};

var json = JSON.stringify(account);
localStorage.setItem("account", json);
console.log("User saved");

event.preventDefault();