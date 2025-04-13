let age = prompt("Enter your age")
let information = document.getElementById("information")

if (Number(age) < 6) {
    information.textContent = "Your ticket is free!"
}
else if (Number(age) < 18) {
    information.textContent = "Your ticket costs 5₾."
}
else if (Number(age) < 65) {
    information.textContent = "Your ticket costs 10₾."
}
else if (Number(age) >= 65) {
    information.textContent = "Your ticket costs 7₾."
}
else{
    information.textContent = "Please type a valid age."
}