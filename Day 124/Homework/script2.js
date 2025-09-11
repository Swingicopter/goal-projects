let form = document.querySelector("form");
let pass = document.getElementById("password");
let show = document.getElementById("checkbox");
let loginBtn = document.getElementById("login");

show.addEventListener("change", function() {
    if (show.checked) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Entered password: " + pass.value);
});