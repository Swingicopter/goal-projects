let form = document.querySelector("form");
let namee = document.getElementById("name");
let age = document.getElementById("age");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // cancel default form submit
    console.log("გამარჯობა " + namee.value + ", შენ ხარ " + age.value + " წლის");
});